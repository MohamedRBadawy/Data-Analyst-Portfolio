
import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '../../constants';

interface CollapsibleSectionProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
    id?: string;
    variant?: 'default' | 'gaps';
    dataTitle?: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, isOpen, onToggle, children, id, variant = 'default', dataTitle }) => {
    return (
        <section id={id} data-title={dataTitle} className={`rounded-lg border transition-all duration-300 ${isOpen ? 'bg-brand-bg/50 border-brand-border' : 'bg-transparent border-transparent'}`}>
            <button
                onClick={onToggle}
                className={`w-full flex items-center justify-between p-6 text-left group ${isOpen ? 'border-b border-brand-border/50' : 'holographic-panel border border-brand-border/50 rounded-lg'}`}
            >
                <div>
                    <h3 className={`font-poppins text-xl font-bold ${variant === 'gaps' ? 'text-brand-text-secondary' : 'text-brand-text-primary group-hover:text-brand-accent'} transition-colors`}>
                        {variant === 'gaps' && <span className="mr-2">⚠️</span>}
                        {title}
                    </h3>
                    {!isOpen && variant !== 'gaps' && (
                        <p className="text-sm text-brand-text-secondary mt-1">Click to expand technical implementation details</p>
                    )}
                </div>
                <div className={`p-2 rounded-full ${isOpen ? 'bg-brand-surface' : 'bg-brand-bg group-hover:bg-brand-surface'} transition-colors`}>
                    {isOpen ? (
                        <ChevronUpIcon className="w-5 h-5 text-brand-text-secondary" />
                    ) : (
                        <ChevronDownIcon className="w-5 h-5 text-brand-text-secondary" />
                    )}
                </div>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 sm:p-8">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default CollapsibleSection;
