import { useState, useEffect } from 'react';

interface Section {
    id: string;
    title: string;
    offset: number;
}

export const useScrollSpy = (sectionIds: string[], offset: number = 140) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [sections, setSections] = useState<Section[]>([]);

    useEffect(() => {
        const elements = sectionIds
            .map(id => ({
                id,
                element: document.getElementById(id),
            }))
            .filter(({ element }) => element !== null)
            .map(({ id, element }) => ({
                id,
                title: element?.getAttribute('data-title') || element?.querySelector('h2')?.textContent || id,
                offset: (element as HTMLElement).offsetTop,
            }));

        setSections(elements);
    }, [sectionIds]);

    useEffect(() => {
        if (sections.length === 0) return;

        const handleScroll = () => {
            const scrollY = window.scrollY + offset;

            let active: string | null = null;
            for (let i = sections.length - 1; i >= 0; i--) {
                if (scrollY >= sections[i].offset) {
                    active = sections[i].id;
                    break;
                }
            }

            setActiveSection(active);
        };

        const handleResize = () => {
            const elements = sections.map(s => {
                const element = document.getElementById(s.id);
                return {
                    ...s,
                    offset: element ? element.offsetTop : s.offset,
                };
            });
            setSections(elements);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize, { passive: true });

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [sections, offset]);

    return { activeSection, sections };
};
