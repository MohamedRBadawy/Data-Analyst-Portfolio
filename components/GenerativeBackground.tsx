
import React, { useRef, useEffect, useState } from 'react';
import { useInteraction } from '../context/InteractionContext';
import { CogIcon } from '../constants';

// --- Types ---
type Density = 'low' | 'medium' | 'high';
type Complexity = 'low' | 'high';

// --- Helper Functions ---
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

const COLORS = {
    red: hexToRgb('#F43F5E'),
    blue: hexToRgb('#60A5FA'),
    purple: hexToRgb('#818CF8'),
    green: hexToRgb('#34D399'),
};

// --- Shockwave Interface ---
interface Shockwave {
    x: number;
    y: number;
    radius: number;
    life: number; // 1 to 0
    speed: number;
}


// --- Particle Class ---
class Particle {
    x: number;
    y: number;
    size: number;
    baseX: number;
    baseY: number;
    density: number;
    vx: number;
    vy: number;
    color: { r: number; g: number; b: number; };
    midColor: { r: number; g: number; b: number; };
    alpha: number;

    constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.color = { r: 255, g: 255, b: 255 };
        this.midColor = Math.random() > 0.5 ? COLORS.blue! : COLORS.purple!;
        this.alpha = 1;
    }

    update(mouse: { x: number; y: number; radius: number }, width: number, height: number, scrollPercent: number, isHovering: boolean, shockwaves: Shockwave[]) {
        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1; // prevent division by zero
        
        // Spotlight effect for alpha
        const proximity = Math.max(0, 1 - distance / mouse.radius);
        this.alpha = lerp(0.4, 1.0, proximity);

        if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            
            const forceMagnitude = isHovering ? 0.3 : -0.1; // Attract vs Repel
            const directionX = forceDirectionX * force * this.density * forceMagnitude;
            const directionY = forceDirectionY * force * this.density * forceMagnitude;

            this.x += directionX;
            this.y += directionY;
        }

        // Shockwave interaction
        shockwaves.forEach(shockwave => {
            const dx_s = this.x - shockwave.x;
            const dy_s = this.y - shockwave.y;
            const distance_s = Math.sqrt(dx_s * dx_s + dy_s * dy_s) || 1;

            if (distance_s < shockwave.radius) {
                const angle = Math.atan2(dy_s, dx_s);
                // Force is stronger closer to the center, and decays with the shockwave's life
                const force = (1 - (distance_s / shockwave.radius)) * shockwave.life * 0.8;
                this.vx += Math.cos(angle) * force;
                this.vy += Math.sin(angle) * force;
            }
        });


        // Scroll-based behavior
        if (scrollPercent < 0.3) { // Chaos
            this.vx += (Math.random() - 0.5) * 0.2;
            this.vy += (Math.random() - 0.5) * 0.2;
            this.color = COLORS.red!;
        } else if (scrollPercent < 0.7) { // Filtering
            this.vx *= 0.98;
            this.vy = lerp(this.vy, 1, 0.05); // Move downwards
            const t = (scrollPercent - 0.3) / 0.4;
            this.color = {
                r: lerp(COLORS.red!.r, this.midColor.r, t),
                g: lerp(COLORS.red!.g, this.midColor.g, t),
                b: lerp(COLORS.red!.b, this.midColor.b, t),
            };
        } else { // Clarity
            this.vx = lerp(this.vx, 0, 0.05);
            this.vy = lerp(this.vy, 0, 0.05);
             const t = (scrollPercent - 0.7) / 0.3;
             this.color = {
                r: lerp(this.midColor.r, COLORS.green!.r, t),
                g: lerp(this.midColor.g, COLORS.green!.g, t),
                b: lerp(this.midColor.b, COLORS.green!.b, t),
            };
            this.size = Math.max(0.2, lerp(this.size, 2, 0.05) + Math.sin(Date.now() * 0.001 + this.x) * 0.5);
        }

        // Apply velocity and boundaries
        this.x += this.vx;
        this.y += this.vy;

        if (this.x > width + this.size) this.x = -this.size;
        if (this.x < -this.size) this.x = width + this.size;
        if (this.y > height + this.size) this.y = -this.size;
        if (this.y < -this.size) this.y = height + this.size;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class CursorParticle extends Particle {
     life: number;
     constructor(x:number, y:number, width: number, height: number) {
        super(width, height);
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.life = 1;
     }

     update() {
        this.x += this.vx * 0.5;
        this.y += this.vy * 0.5;
        this.life -= 0.025;
        this.size *= 0.98;
     }

     draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(245, 158, 11, ${this.life})`; // brand-cta
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
     }
}


const GenerativeBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const cursorParticlesRef = useRef<CursorParticle[]>([]);
    const shockwavesRef = useRef<Shockwave[]>([]);
    const mouseRef = useRef({ x: 0, y: 0, radius: 150 });
    const scrollPercentRef = useRef(0);
    const { isHovering } = useInteraction();

    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [particleDensity, setParticleDensity] = useState<Density>('medium');
    const [animationComplexity, setAnimationComplexity] = useState<Complexity>('high');

    useEffect(() => {
        const savedDensity = localStorage.getItem('clarity-dash-density') as Density;
        const savedComplexity = localStorage.getItem('clarity-dash-complexity') as Complexity;
        if (savedDensity) setParticleDensity(savedDensity);
        if (savedComplexity) setAnimationComplexity(savedComplexity);
    }, []);

    useEffect(() => {
        localStorage.setItem('clarity-dash-density', particleDensity);
    }, [particleDensity]);

    useEffect(() => {
        localStorage.setItem('clarity-dash-complexity', animationComplexity);
    }, [animationComplexity]);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            const DENSITY_MAP: Record<Density, number> = {
                low: 40000,
                medium: 20000,
                high: 12000,
            };
            const particleDensityValue = DENSITY_MAP[particleDensity] || 20000;
            const isMobile = canvas.width < 768;
            const effectiveDensity = isMobile ? particleDensityValue * 1.5 : particleDensityValue;
            const particleCount = Math.floor((canvas.width * canvas.height) / effectiveDensity);
            
            particlesRef.current = [];
            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push(new Particle(canvas.width, canvas.height));
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;

            if(animationComplexity === 'high' && Math.random() > 0.5) {
                cursorParticlesRef.current.push(new CursorParticle(e.clientX, e.clientY, canvas.width, canvas.height));
            }
        };

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const scrollableHeight = scrollHeight - clientHeight;
            scrollPercentRef.current = scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;
        };

        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('.settings-panel')) return;

            if (animationComplexity === 'high') {
                 shockwavesRef.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    radius: 30,
                    life: 1,
                    speed: 5,
                });
            }
        };
        
        resizeCanvas();
        handleScroll();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('click', handleClick);

        let animationFrameId: number;
        const animate = () => {
            ctx.fillStyle = '#111827';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const targetRadius = isHovering ? 250 : 150;
            mouseRef.current.radius = lerp(mouseRef.current.radius, targetRadius, 0.1);

            if (animationComplexity === 'high') {
                const gradient = ctx.createRadialGradient(mouseRef.current.x, mouseRef.current.y, 0, mouseRef.current.x, mouseRef.current.y, mouseRef.current.radius);
                gradient.addColorStop(0, 'rgba(96, 165, 250, 0.1)');
                gradient.addColorStop(1, 'rgba(96, 165, 250, 0)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                shockwavesRef.current.forEach((shockwave) => {
                    shockwave.radius += shockwave.speed;
                    shockwave.life -= 0.02;

                    const ringThickness = 20;
                    const innerRadius = Math.max(0, shockwave.radius - ringThickness);

                    const shockwaveGradient = ctx.createRadialGradient(
                        shockwave.x, shockwave.y, innerRadius,
                        shockwave.x, shockwave.y, shockwave.radius
                    );
                    shockwaveGradient.addColorStop(0, `rgba(245, 158, 11, ${shockwave.life})`); // brand-cta
                    shockwaveGradient.addColorStop(1, `rgba(129, 140, 248, ${shockwave.life * 0.5})`);
                    
                    ctx.fillStyle = shockwaveGradient;
                    
                    ctx.beginPath();
                    ctx.arc(shockwave.x, shockwave.y, shockwave.radius, 0, Math.PI * 2);
                    ctx.arc(shockwave.x, shockwave.y, innerRadius, 0, Math.PI * 2, true);
                    ctx.fill();
                });
                shockwavesRef.current = shockwavesRef.current.filter(s => s.life > 0);
            } else {
                 shockwavesRef.current = [];
            }

            particlesRef.current.forEach(p => {
                p.update(mouseRef.current, canvas.width, canvas.height, scrollPercentRef.current, isHovering, shockwavesRef.current);
                p.draw(ctx);
            });

            cursorParticlesRef.current = cursorParticlesRef.current.filter(p => p.life > 0);
            cursorParticlesRef.current.forEach(p => {
                p.update();
                p.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleClick);
        };
    }, [isHovering, particleDensity, animationComplexity]);

    return (
        <>
            <canvas ref={canvasRef} className="fixed top-0 left-0" style={{ zIndex: 0 }} />
            <div className="fixed bottom-6 right-6 z-50">
                <div className={`absolute bottom-full right-0 mb-3 w-56 bg-brand-surface/80 backdrop-blur-sm border border-brand-border rounded-lg p-4 space-y-4 transition-all duration-300 origin-bottom-right ${isPanelOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                     <div className="settings-panel">
                        <label className="text-sm font-medium text-brand-text/80 block mb-2">Particle Density</label>
                        <div className="flex justify-between gap-1">
                            {(['low', 'medium', 'high'] as Density[]).map(d => (
                                <button 
                                    key={d}
                                    onClick={() => setParticleDensity(d)}
                                    className={`flex-1 text-xs py-1 rounded transition-colors ${particleDensity === d ? 'bg-brand-accent text-white' : 'bg-brand-border/50 hover:bg-brand-border'}`}
                                >
                                    {d.charAt(0).toUpperCase() + d.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="settings-panel">
                        <label className="text-sm font-medium text-brand-text/80 block mb-2">FX Complexity</label>
                            <div className="flex justify-between gap-1">
                            {(['low', 'high'] as Complexity[]).map(c => (
                                <button 
                                    key={c}
                                    onClick={() => setAnimationComplexity(c)}
                                    className={`flex-1 text-xs py-1 rounded transition-colors ${animationComplexity === c ? 'bg-brand-accent text-white' : 'bg-brand-border/50 hover:bg-brand-border'}`}
                                >
                                    {c.charAt(0).toUpperCase() + c.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <button 
                    onClick={() => setIsPanelOpen(!isPanelOpen)}
                    className="settings-panel p-3 bg-brand-surface/80 backdrop-blur-sm rounded-full border border-brand-border text-brand-text/70 hover:text-white hover:border-brand-accent transition-all duration-300 relative"
                    aria-label="Open animation settings"
                >
                    <CogIcon className={`w-6 h-6 transition-transform duration-500 ${isPanelOpen ? 'rotate-90' : 'rotate-0'}`} />
                </button>
            </div>
        </>
    );
};

export default GenerativeBackground;
