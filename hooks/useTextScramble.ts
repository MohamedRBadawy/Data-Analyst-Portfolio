import { useState, useEffect, useRef } from 'react';

export const useTextScramble = (text: string, duration: number = 1000) => {
    const [scrambledText, setScrambledText] = useState("");
    const ref = useRef<HTMLHeadingElement>(null);
    const chars = '!<>-_\\/[]{}—=+*^?#';

    useEffect(() => {
        let animationFrameId: number;
        let isCancelled = false;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isCancelled) {
                    let frame = 0;
                    const frameRate = 30; // ms per frame
                    const totalFrames = duration / frameRate;

                    const animate = () => {
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
                           animationFrameId = requestAnimationFrame(animate);
                        } else {
                           setScrambledText(text);
                        }
                    };

                    animationFrameId = requestAnimationFrame(animate);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            isCancelled = true;
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, [text, duration]);

    return { scrambledText, ref };
};