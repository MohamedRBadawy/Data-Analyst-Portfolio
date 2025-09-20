import { useState, useEffect, useRef } from 'react';

export const useMatrixCountUp = (end: number, duration: number = 1000) => {
    const [val, setVal] = useState("0");
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const finalStr = end.toString();
                    const scrambleDuration = 50; // ms per tick
                    const totalTicks = duration / scrambleDuration;
                    let currentTick = 0;

                    const intervalId = setInterval(() => {
                        currentTick++;
                        const newStr = finalStr
                            .split('')
                            .map((char, index) => {
                                // Stagger the reveal of each digit
                                const requiredTicks = Math.floor(totalTicks * (index + 1) / finalStr.length);
                                if (currentTick > requiredTicks) {
                                    return char;
                                }
                                return Math.floor(Math.random() * 10).toString();
                            })
                            .join('');
                        
                        setVal(newStr);

                        if (currentTick >= totalTicks) {
                            setVal(finalStr);
                            clearInterval(intervalId);
                        }
                    }, scrambleDuration);
                    
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }
        
        return () => observer.disconnect();

    }, [end, duration]);

    return { val, ref };
};
