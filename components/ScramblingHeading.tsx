import React from 'react';
import { useTextScramble } from '../hooks/useTextScramble';

interface ScramblingHeadingProps {
    text: string;
    className?: string;
}

const ScramblingHeading: React.FC<ScramblingHeadingProps> = ({ text, className }) => {
    const { scrambledText, ref } = useTextScramble(text);
    const defaultClasses = "font-poppins text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-clarity bg-[length:200%_auto] animate-gradient-pan";
    
    return (
        <h2 ref={ref} className={className || defaultClasses}>
            {scrambledText || '\u00A0'}
        </h2>
    );
};

export default ScramblingHeading;