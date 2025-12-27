import { useState, useEffect, RefObject } from 'react';

export const useIntersectionObserver = (
    ref: RefObject<HTMLElement>,
    options: IntersectionObserverInit = { threshold: 0.1 }
): boolean => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                observer.unobserve(element); // Fire once
            }
        }, options);

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [ref, options]);

    return isIntersecting;
};
