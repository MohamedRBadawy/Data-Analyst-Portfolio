
import React, { useRef, useEffect } from 'react';
import { useInteraction } from '../context/InteractionContext';

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
    blue: hexToRgb('#0369A1'),
    purple: hexToRgb('#818CF8'),
    green: hexToRgb('#34D399'),
};

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

    update(mouse: { x: number; y: number; radius: number }, width: number, height: number, scrollPercent: number, isHovering: boolean) {
        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1; // prevent division by zero

        // Spotlight effect for alpha
        const proximity = Math.max(0, 1 - distance / mouse.radius);
        this.alpha = lerp(0.1, 0.3, proximity);

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

        // Scroll-based behavior
        if (scrollPercent < 0.3) { // Chaos
            this.vx += (Math.random() - 0.5) * 0.1;
            this.vy += (Math.random() - 0.5) * 0.1;
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

const GenerativeBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0, radius: 150 });
    const scrollPercentRef = useRef(0);
    const { isHovering } = useInteraction();
    const requestRef = useRef<number>(0);

    useEffect(() => {
        // Accessibility Check
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Optimization: Reduce density on mobile
            const isMobile = canvas.width < 768;
            const baseDensity = 40000;
            const particleDensityValue = isMobile ? baseDensity * 2 : baseDensity;
            const particleCount = Math.floor((canvas.width * canvas.height) / particleDensityValue);

            particlesRef.current = [];
            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push(new Particle(canvas.width, canvas.height));
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const scrollableHeight = scrollHeight - clientHeight;
            scrollPercentRef.current = scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;
        };

        resizeCanvas();
        handleScroll();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('scroll', handleScroll, { passive: true });

        const animate = () => {
            // Optimization: Stop animation if tab is hidden
            if (document.hidden) {
                requestRef.current = requestAnimationFrame(animate);
                return;
            }

            ctx.fillStyle = '#111827';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const targetRadius = isHovering ? 250 : 150;
            mouseRef.current.radius = lerp(mouseRef.current.radius, targetRadius, 0.1);

            particlesRef.current.forEach(p => {
                p.update(mouseRef.current, canvas.width, canvas.height, scrollPercentRef.current, isHovering);
                p.draw(ctx);
            });

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(requestRef.current);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('scroll', handleScroll);
        };
    }, [isHovering]);

    return (
        <canvas ref={canvasRef} className="fixed top-0 left-0" style={{ zIndex: 0 }} />
    );
};

export default GenerativeBackground;

