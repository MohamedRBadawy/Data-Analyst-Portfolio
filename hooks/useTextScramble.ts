
import { useState, useEffect, useRef } from 'react';

export const useTextScramble = (text: string, duration: number = 1000, autoStart: boolean = true) => {
    const [scrambledText, setScrambledText] = useState(text);
    const [isAnimating, setIsAnimating] = useState(false);
    const ref = useRef<any>(null);
    const chars = '⌀∆∫±Σ/\\<>-*_[]{}—=+^?#';

    // Store cancellation ref to prevent memory leaks across re-renders
    const animationRef = useRef<number>();

    const animate = () => {
        if (isAnimating) return; // Prevent double trigger

        // Accessibility Check
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setScrambledText(text);
            return;
        }

        setIsAnimating(true);

        let frame = 0;
        const frameRate = 30; // ms per frame
        const totalFrames = duration / frameRate;

        const run = () => {
            frame++;
            const progress = frame / totalFrames;

            const newText = text
                .split('')
                .map((char, i) => {
                    if (char === ' ') return ' ';
                    const revealProgress = i / text.length;
                    if (progress > revealProgress) {
                        return text[i];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join('');

            setScrambledText(newText);

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(run);
            } else {
                setScrambledText(text);
                setIsAnimating(false);
            }
        };
        run();
    };

    useEffect(() => {
        if (!autoStart) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isAnimating) {
                    animate();
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        } else {
            animate();
        }

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            observer.disconnect();
        };
    }, [text, duration, autoStart]); // Dependencies for effect

    const replay = () => {
        animate();
    };

    return { scrambledText, ref, replay };
};
