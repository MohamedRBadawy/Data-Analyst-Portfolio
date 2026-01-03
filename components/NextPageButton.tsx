import React from 'react';
import { useInteraction } from '../context/InteractionContext';
import { Page } from '../App';
import { RightArrowIcon } from '../constants';

interface NextPageButtonProps {
    navigateTo: (page: Page) => void;
    nextPage: Page;
    label: string;
}

const NextPageButton: React.FC<NextPageButtonProps> = ({ navigateTo, nextPage, label }) => {
    const { setIsHovering } = useInteraction();

    return (
        <div className="text-center py-16 mt-16 border-t border-brand-border">
            <button
                onClick={() => navigateTo(nextPage)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="inline-flex items-center px-8 py-4 bg-brand-bg/60 backdrop-blur-xl border border-brand-accent/20 rounded-full text-[10px] sm:text-xs font-roboto-mono font-bold uppercase tracking-[0.2em] text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-accent/10 hover:border-brand-accent/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] group"
            >
                <span>Next: {label}</span>
                <RightArrowIcon className="w-5 h-5 ml-4 transition-transform duration-300 group-hover:translate-x-2" />
            </button>
        </div>
    );
};

export default NextPageButton;
