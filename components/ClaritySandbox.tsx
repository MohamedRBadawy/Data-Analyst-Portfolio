import React, { useState, useEffect, useRef, useCallback } from 'react';
import ScramblingHeading from './ScramblingHeading';
import { useInteraction } from '../context/InteractionContext';

type Pattern = 'automate' | 'centralize' | 'visualize';

const PATTERN_DESCRIPTIONS: Record<Pattern, { title: string; description: string; }> = {
    automate: {
        title: "How I Automate Processes",
        description: "I build systems that handle repetitive tasks, reducing manual errors and freeing your team to focus on strategic, high-impact work."
    },
    centralize: {
        title: "How I Centralize Data",
        description: "I consolidate your scattered information into one accessible dashboard. This creates a single source of truth for faster, more informed decisions."
    },
    visualize: {
        title: "How I Visualize Information",
        description: "I transform raw numbers into intuitive charts and graphs. This helps you instantly spot trends, identify outliers, and communicate complex data with ease."
    }
};

const PATTERNS: Record<Pattern, (width: number, height: number, particleCount: number) => { x: number; y: number }[]> = {
    automate: (width, height, count) => {
        const points = [];
        const lineCount = 5;
        const particlesPerLine = Math.floor(count / lineCount);
        for (let i = 0; i < lineCount; i++) {
            const y = height * (i + 1) / (lineCount + 1);
            for (let j = 0; j < particlesPerLine; j++) {
                points.push({ x: width * (j / particlesPerLine), y });
            }
        }
        return points;
    },
    centralize: (width, height, count) => {
        const points = [];
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) * 0.4;
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            points.push({
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius,
            });
        }
        return points;
    },
    visualize: (width, height, count) => {
        const points = [];
        const barWidth = width / 5;
        const barHeights = [0.4, 0.7, 0.5];
        const particlesPerBar = Math.floor(count / 3);
        for (let i = 0; i < 3; i++) {
            const barHeight = height * barHeights[i];
            const barX = width * (i + 1) / 4 - barWidth / 2;
            for (let j = 0; j < particlesPerBar; j++) {
                points.push({
                    x: barX + Math.random() * barWidth,
                    y: height - Math.random() * barHeight,
                });
            }
        }
        return points;
    },
};


class Particle {
    x: number; y: number;
    vx: number; vy: number;
    size: number;
    originX: number; originY: number;
    targetX: number | null = null;
    targetY: number | null = null;
    color: { r: number; g: number; b: number; };
    ease: number;

    constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.originX = this.x;
        this.originY = this.y;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 1.5 + 1;
        this.color = { r: 244, g: 63, b: 94 }; // brand-chaos
        this.ease = 0.03 + Math.random() * 0.04;
    }

    update(wanderBounds: { width: number, height: number }) {
        if (this.targetX !== null && this.targetY !== null) {
            this.x += (this.targetX - this.x) * this.ease;
            this.y += (this.targetY - this.y) * this.ease;
            // Transition color to clarity green
            const targetColor = { r: 52, g: 211, b: 153 };
            this.color.r += (targetColor.r - this.color.r) * this.ease;
            this.color.g += (targetColor.g - this.color.g) * this.ease;
            this.color.b += (targetColor.b - this.color.b) * this.ease;
        } else {
            // Wander within specified bounds
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > wanderBounds.width) this.vx *= -1;
            if (this.y < 0 || this.y > wanderBounds.height) this.vy *= -1;
            // Transition color back to chaos red
            const targetColor = { r: 244, g: 63, b: 94 };
            this.color.r += (targetColor.r - this.color.r) * this.ease;
            this.color.g += (targetColor.g - this.color.g) * this.ease;
            this.color.b += (targetColor.b - this.color.b) * this.ease;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    setTarget(x: number, y: number) {
        this.targetX = x;
        this.targetY = y;
    }

    releaseTarget() {
        this.targetX = null;
        this.targetY = null;
    }
}


const ClaritySandbox: React.FC = () => {
    const { setIsHovering } = useInteraction();
    const [activePattern, setActivePattern] = useState<Pattern | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationFrameId = useRef<number | null>(null);

    const initCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;
        
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;

        const chaosZone = container.querySelector('.chaos-zone') as HTMLElement;
        if (!chaosZone) return;

        const particleCount = window.innerWidth < 768 ? 200 : 400;
        particlesRef.current = [];
        for (let i = 0; i < particleCount; i++) {
            particlesRef.current.push(new Particle(chaosZone.offsetWidth, chaosZone.offsetHeight));
        }

    }, []);

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const chaosZone = containerRef.current?.querySelector('.chaos-zone') as HTMLElement;
        if (!chaosZone) return;

        const wanderBounds = { width: chaosZone.offsetWidth, height: chaosZone.offsetHeight };

        particlesRef.current.forEach(p => {
            p.update(wanderBounds);
            p.draw(ctx);
        });

        animationFrameId.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        initCanvas();
        window.addEventListener('resize', initCanvas);
        animationFrameId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', initCanvas);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [initCanvas, animate]);

    const handleButtonClick = (pattern: Pattern) => {
        if (activePattern === pattern) {
            setActivePattern(null);
            particlesRef.current.forEach(particle => particle.releaseTarget());
            return;
        }

        setActivePattern(pattern);
        const container = containerRef.current;
        const clarityZone = container?.querySelector('.clarity-zone') as HTMLElement;
        if (!clarityZone) return;

        const targetPoints = PATTERNS[pattern](clarityZone.offsetWidth, clarityZone.offsetHeight, particlesRef.current.length);
        
        const shuffledParticles = [...particlesRef.current].sort(() => 0.5 - Math.random());

        shuffledParticles.forEach((particle, index) => {
            if (targetPoints[index]) {
                const targetX = targetPoints[index].x + clarityZone.offsetLeft;
                const targetY = targetPoints[index].y + clarityZone.offsetTop;
                particle.setTarget(targetX, targetY);
            } else {
                particle.setTarget(-100, -100); 
            }
        });
    };

    return (
        <section className="py-20 px-8 lg:px-16 bg-brand-bg border-y border-brand-border">
            <div className="text-center mb-12">
                <ScramblingHeading text="The Clarity Sandbox" />
                <p className="text-lg text-brand-text/80 mt-2 max-w-2xl mx-auto">This isn't just theory. Click a filter to actively transform chaotic data into a clear, structured pattern.</p>
            </div>
            <div ref={containerRef} className="relative max-w-7xl mx-auto h-[500px] flex flex-col md:flex-row gap-8 bg-brand-surface p-4 rounded-xl border border-brand-border">
                <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-xl" />
                <div className="chaos-zone w-full md:w-1/3 h-full rounded-lg border border-brand-chaos/50 z-10">
                    {/* This div is a visual container for the initial particle positions */}
                </div>
                <div className="w-px bg-brand-border hidden md:block z-10" />
                <div className="clarity-zone flex-grow h-full relative flex flex-col z-10">
                    <div className="flex justify-center md:justify-start gap-4">
                        {(['automate', 'centralize', 'visualize'] as Pattern[]).map(p => (
                            <button
                                key={p}
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                onClick={() => handleButtonClick(p)}
                                className={`font-poppins font-bold py-2 px-6 rounded-lg border-2 transition-all duration-300 ${activePattern === p ? 'bg-brand-process text-white border-brand-process' : 'bg-transparent border-brand-border text-brand-text/70 hover:border-brand-process hover:text-white'}`}
                            >
                                {p.charAt(0).toUpperCase() + p.slice(1)}
                            </button>
                        ))}
                    </div>
                    <div className="flex-grow flex items-center justify-center text-center p-4">
                        <div className={`transition-opacity duration-500 max-w-md ${activePattern ? 'opacity-100' : 'opacity-0'}`}>
                            {activePattern && (
                                <>
                                    <h3 className="font-poppins text-2xl font-bold text-brand-process mb-2">
                                        {PATTERN_DESCRIPTIONS[activePattern].title}
                                    </h3>
                                    <p className="text-brand-text/80">
                                        {PATTERN_DESCRIPTIONS[activePattern].description}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClaritySandbox;