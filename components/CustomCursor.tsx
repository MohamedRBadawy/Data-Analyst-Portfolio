import React, { useEffect, useRef } from 'react';
import { useInteraction } from '../context/InteractionContext';

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const { isHovering } = useInteraction();

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const handleMouseMove = (e: MouseEvent) => {
            // Using requestAnimationFrame for performance
            requestAnimationFrame(() => {
                if (cursor) {
                    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="hidden lg:block fixed top-0 left-0 pointer-events-none z-[200]"
            style={{ transform: 'translate3d(-100px, -100px, 0)' }} // Start off-screen
        >
            <div 
                className={`absolute w-6 h-6 rounded-full border-2 transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 ${isHovering ? 'scale-150 border-brand-cta bg-brand-cta/20' : 'scale-100 border-brand-accent'}`}
            />
        </div>
    );
};

export default CustomCursor;
