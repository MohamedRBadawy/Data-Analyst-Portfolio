import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useInteraction } from '../context/InteractionContext';

interface HeroProps {
    scrollToContact: () => void;
}

// --- Particle Class for Hero Canvas ---
class DataPoint {
    x: number; y: number;
    size: number;
    vx: number; vy: number;
    originX: number; originY: number;
    targetX: number | null = null;
    targetY: number | null = null;
    color: { r: number; g: number; b: number; };
    targetColor: { r: number; g: number; b: number; } | null = null;
    ease: number;
    
    constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.originX = this.x;
        this.originY = this.y;
        this.size = Math.random() * 1.5 + 1;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.color = { r: 244, g: 63, b: 94 }; // brand-chaos
        this.ease = 0.05 + Math.random() * 0.05;
    }

    draw(ctx: CanvasRenderingContext2D, mouse: { x: number; y: number; radius: number }, isAnalyzed: boolean) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let finalColor = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
        let finalSize = this.size;

        // "Decoder Lens" effect before analysis is initiated
        if (!isAnalyzed && dist < mouse.radius) {
            const proximity = 1 - (dist / mouse.radius); // 0 (edge) to 1 (center)
            
            // Blend color towards accent purple
            const accentColor = { r: 129, g: 140, b: 248 }; // brand-accent
            const r = this.color.r + (accentColor.r - this.color.r) * proximity * 0.8;
            const g = this.color.g + (accentColor.g - this.color.g) * proximity * 0.8;
            const b = this.color.b + (accentColor.b - this.color.b) * proximity * 0.8;
            finalColor = `rgb(${r}, ${g}, ${b})`;

            // Create a pulsing size effect
            const pulse = Math.sin(Date.now() * 0.005 + this.x) * 0.5 + 0.5; // Varies between 0 and 1
            finalSize = this.size + (pulse * 2 * proximity);
        }

        ctx.fillStyle = finalColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, finalSize, 0, Math.PI * 2);
        ctx.fill();
    }
    
    update(mouse: { x: number; y: number; radius: number }, isAnalyzed: boolean, canvasWidth: number, canvasHeight: number) {
        if (isAnalyzed && this.targetX && this.targetY) {
            // Animate towards target
            this.x += (this.targetX - this.x) * this.ease;
            this.y += (this.targetY - this.y) * this.ease;
            if (this.targetColor) {
                this.color.r += (this.targetColor.r - this.color.r) * this.ease;
                this.color.g += (this.targetColor.g - this.color.g) * this.ease;
                this.color.b += (this.targetColor.b - this.color.b) * this.ease;
            }

        } else {
             // Gravitational pull from mouse
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < mouse.radius) {
                const angle = Math.atan2(dy, dx);
                const force = (mouse.radius - dist) * 0.01;
                this.x += Math.cos(angle) * force;
                this.y += Math.sin(angle) * force;
            }

            // Wander and stay in bounds
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
            if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
        }
    }
    
    setTarget(x: number, y: number, color: {r: number, g: number, b: number}) {
        this.targetX = x;
        this.targetY = y;
        this.targetColor = color;
    }
}


const Hero: React.FC<HeroProps> = ({ scrollToContact }) => {
    const { setIsHovering } = useInteraction();
    const [isAnalyzed, setIsAnalyzed] = useState(false);
    const heroRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const kpi1Ref = useRef<HTMLDivElement>(null);
    const kpi2Ref = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<DataPoint[]>([]);
    const mouseRef = useRef({ x: -100, y: -100, radius: 150 });

    const initCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        const hero = heroRef.current;
        if (!canvas || !hero) return;

        const dpr = window.devicePixelRatio || 1;
        canvas.width = hero.offsetWidth * dpr;
        canvas.height = hero.offsetHeight * dpr;
        canvas.style.width = `${hero.offsetWidth}px`;
        canvas.style.height = `${hero.offsetHeight}px`;
        const ctx = canvas.getContext('2d')!;
        ctx.scale(dpr, dpr);
        
        const particleCount = window.innerWidth < 768 ? 400 : 800;
        particlesRef.current = [];
        for (let i = 0; i < particleCount; i++) {
            particlesRef.current.push(new DataPoint(hero.offsetWidth, hero.offsetHeight));
        }
    }, []);

    useEffect(() => {
        initCanvas();
        window.addEventListener('resize', initCanvas);

        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                mouseRef.current.x = e.clientX - rect.left;
                mouseRef.current.y = e.clientY - rect.top;
            }
        };
        window.addEventListener('mousemove', handleMouseMove);

        let animationFrameId: number;
        const animate = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d')!;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesRef.current.forEach(p => {
                p.update(mouseRef.current, isAnalyzed, canvas.offsetWidth, canvas.offsetHeight);
                p.draw(ctx, mouseRef.current, isAnalyzed);
            });
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', initCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isAnalyzed, initCanvas]);

    const handleClick = () => {
        if (isAnalyzed) return;
        setIsAnalyzed(true);

        const kpi1Rect = kpi1Ref.current?.getBoundingClientRect();
        const kpi2Rect = kpi2Ref.current?.getBoundingClientRect();
        const heroRect = heroRef.current?.getBoundingClientRect();
        
        if (!kpi1Rect || !kpi2Rect || !heroRect) return;

        const kpi1Target = {
            x: kpi1Rect.left - heroRect.left,
            y: kpi1Rect.top - heroRect.top,
            width: kpi1Rect.width,
            height: kpi1Rect.height,
            color: { r: 52, g: 211, b: 153 } // brand-clarity
        };
        const kpi2Target = {
            x: kpi2Rect.left - heroRect.left,
            y: kpi2Rect.top - heroRect.top,
            width: kpi2Rect.width,
            height: kpi2Rect.height,
            color: { r: 244, g: 63, b: 94 } // brand-chaos
        };

        particlesRef.current.forEach((p, i) => {
            // Distribute particles between the two KPI boxes
            const isKpi1 = i < particlesRef.current.length * 0.65; // Assign more to efficiency gain
            const target = isKpi1 ? kpi1Target : kpi2Target;
            
            // Random position within the target box
            const targetX = target.x + Math.random() * target.width;
            const targetY = target.y + Math.random() * target.height;
            
            p.setTarget(targetX, targetY, target.color);
        });
    };

    return (
        <section
            ref={heroRef}
            onClick={handleClick}
            className="h-screen flex flex-col items-center justify-center p-8 lg:p-16 relative overflow-hidden"
        >
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
            
            <div className={`absolute transition-opacity duration-500 ${!isAnalyzed ? 'opacity-100' : 'opacity-0'}`}>
                <p className="font-roboto-mono text-brand-accent animate-pulse">Initiate Analysis</p>
            </div>
            
            <div className="z-10 text-center w-full max-w-4xl">
                <h1 className={`font-poppins text-5xl md:text-7xl font-bold mb-4 transition-all duration-700 ${!isAnalyzed ? 'animate-glitch-subtle text-brand-chaos/80' : 'text-brand-text'}`}>
                    Find the Signal.
                </h1>
                
                <div className={`transition-opacity duration-700 delay-500 ${isAnalyzed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <p className="text-lg md:text-xl text-brand-text max-w-xl mx-auto my-8">
                        I decode complex business data into actionable insights that drive growth and eliminate waste.
                    </p>
                </div>
                
                <div className="flex justify-center space-x-8 mb-8 h-28">
                    <div ref={kpi1Ref} className={`bg-brand-surface/0 p-4 rounded-lg border border-transparent transition-all duration-500 delay-1000 ${isAnalyzed ? 'border-brand-border bg-brand-surface/50' : ''}`}>
                         <div className={`transition-opacity duration-500 delay-[1500ms] ${isAnalyzed ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="font-roboto-mono text-3xl text-brand-clarity">+45%</p>
                            <p className="text-sm">Efficiency Gain</p>
                        </div>
                    </div>
                    <div ref={kpi2Ref} className={`bg-brand-surface/0 p-4 rounded-lg border border-transparent transition-all duration-500 delay-1000 ${isAnalyzed ? 'border-brand-border bg-brand-surface/50' : ''}`}>
                        <div className={`transition-opacity duration-500 delay-[1500ms] ${isAnalyzed ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="font-roboto-mono text-3xl text-brand-chaos">-30%</p>
                            <p className="text-sm">Operational Costs</p>
                        </div>
                    </div>
                </div>
                
                <div className={`transition-opacity duration-700 delay-[1200ms] ${isAnalyzed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <button
                        onClick={e => { e.stopPropagation(); scrollToContact(); }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="text-white font-bold font-poppins py-3 px-8 rounded-lg transform transition-all duration-500 hover:scale-105 bg-gradient-to-r from-brand-cta to-yellow-400 bg-[length:200%_auto] hover:bg-[position:100%_0] focus:bg-[position:100%_0]"
                    >
                        Decode Your Business Potential?
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;