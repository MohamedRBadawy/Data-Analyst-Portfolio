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
                className="btn btn-secondary group inline-flex items-center"
            >
                <span>Next: {label}</span>
                <RightArrowIcon className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
        </div>
    );
};

export default NextPageButton;