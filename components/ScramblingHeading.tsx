import React from 'react';
import { useTextScramble } from '../hooks/useTextScramble';

interface ScramblingHeadingProps {
    text: string;
    className?: string;
    textClasses?: string;
    duration?: number;
}

const ScramblingHeading: React.FC<ScramblingHeadingProps> = ({
    text,
    className,
    textClasses = "text-4xl md:text-6xl lg:text-7xl",
    duration = 1200
}) => {
    const { scrambledText, ref } = useTextScramble(text, duration, true); // Auto-start enabled

    return (
        <h2 className={`font-sans font-extrabold text-center ${className || ''} ${textClasses}`}>
            <span className="text-brand-text-primary tracking-tight transition-colors duration-500">
                {scrambledText || text}
            </span>
        </h2>
    );
};

export default ScramblingHeading;
