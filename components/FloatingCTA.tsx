import React from 'react';
import { MailIcon } from '../constants';
import { useInteraction } from '../context/InteractionContext';

interface FloatingCTAProps {
    onClick: () => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ onClick }) => {
    const { setIsHovering } = useInteraction();
    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="fixed bottom-8 right-8 z-40 px-6 py-3 bg-brand-cta rounded-full flex items-center gap-2 shadow-lg transform transition-transform duration-300 hover:scale-102 animate-pulse-cta"
            aria-label="Book free clarity audit"
        >
            <MailIcon className="w-5 h-5 text-brand-bg" />
            <span className="text-brand-bg font-poppins font-bold text-sm">Book Audit</span>
        </button>
    );
};

export default FloatingCTA;
