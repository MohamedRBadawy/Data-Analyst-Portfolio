import React from 'react';
import { useTextScramble } from '../hooks/useTextScramble';

interface ScramblingHeadingProps {
    text: string;
    className?: string;
    duration?: number;
}

const ScramblingHeading: React.FC<ScramblingHeadingProps> = ({ text, className, duration = 400 }) => {
    const { scrambledText, ref } = useTextScramble(text, duration, true); // Auto-start enabled
    const defaultClasses = "font-sans text-3xl sm:text-4xl font-bold text-brand-text-primary text-glow-accent";

    return (
        <h2 className={`font-sans font-bold text-center mb-8 ${className}`}>
            <span className="text-3xl md:text-5xl lg:text-6xl text-brand-text-primary tracking-tight">
                {scrambledText || text}
            </span>
        </h2>
    );
};

export default ScramblingHeading;
