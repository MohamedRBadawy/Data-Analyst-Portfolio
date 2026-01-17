
import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
    children: React.ReactNode;
    width?: "100%" | "fit-content";
    direction?: "up" | "right" | "left" | "none";
    delay?: number;
    className?: string;
    threshold?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
    children,
    width = "fit-content",
    direction = "up",
    delay = 0,
    className = "",
    threshold = 0.1
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Only trigger once
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: threshold
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    const getDirectionClasses = () => {
        if (!isVisible) {
            switch (direction) {
                case "up": return "translate-y-10 opacity-0";
                case "right": return "-translate-x-10 opacity-0";
                case "left": return "translate-x-10 opacity-0";
                case "none": return "opacity-0 scale-95";
                default: return "translate-y-10 opacity-0";
            }
        }
        return "translate-y-0 translate-x-0 opacity-100 scale-100";
    };

    return (
        <div
            ref={ref}
            style={{ width, transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out will-change-transform ${getDirectionClasses()} ${className}`}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;
