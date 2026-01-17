import React from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

interface SectionNavProps {
    sectionIds: string[];
    className?: string;
}

const SectionNav: React.FC<SectionNavProps> = ({ sectionIds, className = "py-4" }) => {
    const { activeSection, sections } = useScrollSpy(sectionIds, 160);

    const handleSectionClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 180;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    if (sections.length < 2) return null;

    return (
        // GLOBAL Page-Level Navigation
        <nav className={`sticky top-0 z-40 w-full ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <div
                        className="pointer-events-auto flex items-center gap-1 p-1 bg-brand-bg/60 backdrop-blur-xl border border-brand-accent/20 rounded-full shadow-md section-nav-scroll overflow-x-auto no-scrollbar"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        } as React.CSSProperties}
                    >
                        {sections.map(section => {
                            const isActive = activeSection === section.id;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => handleSectionClick(section.id)}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`
                                        relative flex-shrink-0 px-5 py-2 rounded-md text-xs font-mono font-bold uppercase tracking-[0.12em] transition-all duration-300 whitespace-nowrap
                                        ${isActive
                                            ? 'nav-item-active'
                                            : 'text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-accent/10'
                                        }
                                    `}
                                >
                                    {section.title}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SectionNav;
