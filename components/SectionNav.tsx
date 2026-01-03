import React from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

interface SectionNavProps {
    sectionIds: string[];
}

const SectionNav: React.FC<SectionNavProps> = ({ sectionIds }) => {
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
        <nav className="sticky top-0 z-40 w-full py-4 pointer-events-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center sm:justify-start">
                    <div
                        className="pointer-events-auto flex items-center gap-1 p-1 bg-brand-bg/60 backdrop-blur-xl border border-brand-accent/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] section-nav-scroll overflow-x-auto no-scrollbar"
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
                                        relative flex-shrink-0 px-5 py-2 rounded-full text-[10px] sm:text-xs font-roboto-mono font-bold uppercase tracking-[0.15em] transition-all duration-300 whitespace-nowrap
                                        ${isActive
                                            ? 'bg-brand-accent text-brand-bg shadow-[0_0_15px_rgba(0,245,255,0.4)]'
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

