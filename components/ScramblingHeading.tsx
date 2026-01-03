import React from 'react';
import { useTextScramble } from '../hooks/useTextScramble';

interface ScramblingHeadingProps {
    text: string;
    className?: string;
    duration?: number;
}

const ScramblingHeading: React.FC<ScramblingHeadingProps> = ({ text, className, duration = 400 }) => {
    const { scrambledText, ref } = useTextScramble(text, duration, true); // Auto-start enabled
    const defaultClasses = "font-poppins text-h2 font-bold text-brand-accent text-glow-accent";

    return (
        <h2
            ref={ref}
            className={className || defaultClasses}
        >
            {scrambledText || text}
        </h2>
    );
};

export default ScramblingHeading;
