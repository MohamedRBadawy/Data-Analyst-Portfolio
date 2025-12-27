import React from 'react';
import { useTextScramble } from '../hooks/useTextScramble';

interface ScramblingHeadingProps {
    text: string;
    className?: string;
}

const ScramblingHeading: React.FC<ScramblingHeadingProps> = ({ text, className }) => {
    const { scrambledText, ref, replay } = useTextScramble(text, 400, false); // Auto-start false, fast duration
    const defaultClasses = "font-poppins text-h2 font-bold text-brand-accent text-glow-accent";

    return (
        <h2
            ref={ref}
            className={className || defaultClasses}
            onMouseEnter={replay}
        >
            {scrambledText || text}
        </h2>
    );
};

export default ScramblingHeading;