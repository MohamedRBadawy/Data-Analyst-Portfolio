
import React, { useState, useEffect, useRef, useCallback } from 'react';
import ScramblingHeading from './ScramblingHeading';
import { useInteraction } from '../context/InteractionContext';

type Pattern = 'automate' | 'centralize' | 'visualize';

const CHAOS_COLOR = { r: 255, g: 0, b: 169 };
const PROCESS_COLOR = { r: 136, g: 146, b: 176 };
const CLARITY_COLOR = { r: 0, g: 245, b: 255 };

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

const CONSTRUCTION_PATTERNS: Record<Pattern, (width: number, height: number, count: number) => { x: number; y: number }[]> = {
    automate: (width, height, count) => {
        const points = [];
        const margin = width * 0.05;
        const top = height * 0.15;
        const bottom = height * 0.85;

        // Define two boxes on either side of the center
        const boxWidth = width * 0.3;
        const leftBox = { x: margin, y: top, w: boxWidth, h: bottom - top };
        const rightBox = { x: width - margin - boxWidth, y: top, w: boxWidth, h: bottom - top };
        
        const addPointsFromBox = (box: {x:number, y:number, w:number, h:number}, numPoints: number) => {
            const perimeter = 2 * (box.w + box.h);
            for(let i = 0; i < numPoints; i++) {
                let p = Math.random() * perimeter;
                if (p < box.w) { // Top
                    points.push({ x: box.x + p, y: box.y });
                } else if (p < box.w + box.h) { // Right
                    points.push({ x: box.x + box.w, y: box.y + (p - box.w) });
                } else if (p < 2 * box.w + box.h) { // Bottom
                    points.push({ x: box.x + box.w - (p - (box.w + box.h)), y: box.y + box.h });
                } else { // Left
                    points.push({ x: box.x, y: box.y + box.h - (p - (2 * box.w + box.h)) });
                }
            }
        };

        addPointsFromBox(leftBox, count / 2);
        addPointsFromBox(rightBox, count / 2);
        return points;
    },
    centralize: (width, height, count) => {
        const points = [];
        const centerX = width / 2;
        const centerY = height / 2;
        const sideLength = Math.min(width, height) * 0.9;
        const halfSide = sideLength / 2;
        const perimeter = sideLength * 4;
        
        for (let i = 0; i < count; i++) {
            let p = Math.random() * perimeter;
            if (p < sideLength) { // Top
                points.push({ x: centerX - halfSide + p, y: centerY - halfSide });
            } else if (p < sideLength * 2) { // Right
                points.push({ x: centerX + halfSide, y: centerY - halfSide + (p - sideLength) });
            } else if (p < sideLength * 3) { // Bottom
                points.push({ x: centerX + halfSide - (p - sideLength * 2), y: centerY + halfSide });
            } else { // Left
                points.push({ x: centerX - halfSide, y: centerY + halfSide - (p - sideLength * 3) });
            }
        }
        return points;
    },
    visualize: (width, height, count) => {
        const points = [];
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) * 0.48;
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            points.push({
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius,
            });
        }
        return points;
    }
};


const PATTERNS: Record<Pattern, (width: number, height: number, particleCount: number) => { x: number; y: number }[]> = {
    automate: (width, height, count) => {
        const points = [];
        const lineCount = 5;
        const particlesPerLine = Math.floor(count / lineCount);
        
        const gapWidth = width * 0.7;
        const gapStart = (width / 2) - (gapWidth / 2);
        const gapEnd = (width / 2) + (gapWidth / 2);
        
        const leftSegmentEnd = gapStart - (width * 0.05);
        const rightSegmentStart = gapEnd + (width * 0.05);
        
        const leftSegmentWidth = leftSegmentEnd - (width * 0.1);
        const rightSegmentWidth = (width * 0.9) - rightSegmentStart;

        const particlesPerSegment = Math.floor(particlesPerLine / 2);

        for (let i = 0; i < lineCount; i++) {
            const y = height * (i + 1) / (lineCount + 1);
            
            for (let j = 0; j < particlesPerSegment; j++) {
                const x = width * 0.1 + (leftSegmentWidth * (j / (particlesPerSegment - 1 || 1)));
                points.push({ x, y });
            }
            
            for (let j = 0; j < particlesPerSegment; j++) {
                const x = rightSegmentStart + (rightSegmentWidth * (j / (particlesPerSegment - 1 || 1)));
                points.push({ x, y });
            }
        }
        return points;
    },
    centralize: (width, height, count) => {
        const points = [];
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) * 0.48;
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
        const centerX = width / 2;
        const centerY = height / 2;
        const outerRadius = Math.min(width, height) * 0.48;
        const innerRadius = outerRadius * 0.6;
        
        const sections = [0.4, 0.35, 0.25]; // Three sections for the donut
        let accumulatedAngle = 0;
        
        sections.forEach(section => {
            const particlesInSection = Math.floor(count * section);
            const sectionAngle = section * Math.PI * 2;
            
            for (let i = 0; i < particlesInSection; i++) {
                const angle = accumulatedAngle + Math.random() * sectionAngle;
                const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
                
                points.push({
                    x: centerX + Math.cos(angle) * radius,
                    y: centerY + Math.sin(angle) * radius,
                });
            }
            accumulatedAngle += sectionAngle;
        });
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
    targetColor: { r: number; g: number; b: number; };
    ease: number;
    symbol: string;
    rotation: number;
    vr: number; // rotational velocity

    constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.originX = this.x;
        this.originY = this.y;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 8 + 12;
        this.color = { ...CHAOS_COLOR };
        this.targetColor = { ...CHAOS_COLOR };
        this.ease = 0.03 + Math.random() * 0.04;
        const symbols = ['+', '○', '×', '△', '□'];
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
        this.rotation = Math.random() * Math.PI * 2;
        this.vr = (Math.random() - 0.5) * 0.02;
    }

    update(wanderBounds: { width: number, height: number }) {
        if (this.targetX !== null && this.targetY !== null) {
            this.x += (this.targetX - this.x) * this.ease;
            this.y += (this.targetY - this.y) * this.ease;
            this.rotation += (0 - this.rotation) * this.ease; // Ease rotation to 0
        } else {
            // Wander within specified bounds
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > wanderBounds.width) this.vx *= -1;
            if (this.y < 0 || this.y > wanderBounds.height) this.vy *= -1;
            this.rotation += this.vr;
        }
        // Transition color
        this.color.r += (this.targetColor.r - this.color.r) * this.ease;
        this.color.g += (this.targetColor.g - this.color.g) * this.ease;
        this.color.b += (this.targetColor.b - this.color.b) * this.ease;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
        ctx.font = `${this.size}px 'Roboto Mono'`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.symbol, 0, 0);
        ctx.restore();
    }

    setTarget(x: number, y: number, color: {r:number, g:number, b:number}) {
        this.targetX = x;
        this.targetY = y;
        this.targetColor = color;
    }

    releaseTarget() {
        this.targetX = null;
        this.targetY = null;
        this.targetColor = CHAOS_COLOR;
    }
}


const ClaritySandbox: React.FC = () => {
    const { setIsHovering } = useInteraction();
    const [activePattern, setActivePattern] = useState<Pattern | null>(null);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationFrameId = useRef<number | null>(null);
    const activePatternRef = useRef<Pattern | null>(null);

    const initCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;
        
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;

        const chaosZone = container.querySelector('.chaos-zone') as HTMLElement;
        if (!chaosZone) return;

        const particleCount = window.innerWidth < 768 ? 150 : 300;
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
        activePatternRef.current = pattern;
        setIsTextVisible(false);

        if (activePattern === pattern) {
            setActivePattern(null);
            activePatternRef.current = null;
            particlesRef.current.forEach(particle => particle.releaseTarget());
            return;
        }

        setActivePattern(pattern);
        const container = containerRef.current;
        const targetZone = container?.querySelector('.chaos-zone') as HTMLElement;
        if (!targetZone) return;

        // Stage 1: Move to construction lines
        const constructionPoints = CONSTRUCTION_PATTERNS[pattern](targetZone.offsetWidth, targetZone.offsetHeight, particlesRef.current.length);
        const shuffledParticles = [...particlesRef.current].sort(() => 0.5 - Math.random());
        
        shuffledParticles.forEach((particle, index) => {
            if (constructionPoints[index]) {
                const targetX = constructionPoints[index].x + targetZone.offsetLeft;
                const targetY = constructionPoints[index].y + targetZone.offsetTop;
                particle.setTarget(targetX, targetY, PROCESS_COLOR);
            } else {
                 particle.setTarget(-100, -100, PROCESS_COLOR);
            }
        });

        // Stage 2: Move to final pattern and reveal text
        setTimeout(() => {
            if (activePatternRef.current !== pattern) return; // Abort if another button was clicked

            const finalPoints = PATTERNS[pattern](targetZone.offsetWidth, targetZone.offsetHeight, particlesRef.current.length);
            
            shuffledParticles.forEach((particle, index) => {
                if (finalPoints[index]) {
                    const targetX = finalPoints[index].x + targetZone.offsetLeft;
                    const targetY = finalPoints[index].y + targetZone.offsetTop;
                    particle.setTarget(targetX, targetY, CLARITY_COLOR);
                } else {
                    particle.setTarget(-100, -100, CLARITY_COLOR);
                }
            });
            
            // Make text visible as the final animation starts
            setIsTextVisible(true);

        }, 1200); // Duration of construction phase
    };

    return (
        <section className="py-16 lg:py-20">
            <div className="text-center mb-16">
                <ScramblingHeading text="The Clarity Sandbox" />
                <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl mx-auto">This isn't just theory. Click a filter to actively transform chaotic data into a clear, structured pattern.</p>
            </div>
            <div ref={containerRef} className="relative max-w-7xl mx-auto h-[600px] md:h-[500px] flex flex-col md:flex-row gap-8 holographic-panel p-4 rounded-xl">
                <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-xl z-0" />
                <div className="chaos-zone w-full md:w-1/3 h-1/3 md:h-full rounded-lg border border-brand-chaos/50 z-10">
                    {/* This div is a visual container for the initial particle positions */}
                </div>
                <div className="w-full md:w-px h-px md:h-full bg-brand-border z-10" />
                <div className="clarity-zone flex-grow h-2/3 md:h-full relative flex flex-col z-10">
                    <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                        {(['automate', 'centralize', 'visualize'] as Pattern[]).map(p => (
                            <button
                                key={p}
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                onClick={() => handleButtonClick(p)}
                                className={`font-poppins font-bold py-2 px-6 rounded-lg border-2 transition-all duration-300 whitespace-nowrap ${activePattern === p ? 'bg-brand-accent text-brand-bg border-brand-accent' : 'bg-transparent border-brand-border text-brand-text-secondary hover:border-brand-accent hover:text-brand-text-primary'}`}
                            >
                                {p.charAt(0).toUpperCase() + p.slice(1)}
                            </button>
                        ))}
                    </div>
                    <div className="flex-grow flex items-center justify-center text-center p-4 relative z-20">
                        <div className={`transition-opacity duration-500 max-w-md ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}>
                            {activePattern && (
                                <>
                                    <h3 className="font-poppins text-2xl font-bold text-brand-accent mb-2">
                                        {PATTERN_DESCRIPTIONS[activePattern].title}
                                    </h3>
                                    <p className="text-brand-text-secondary">
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
