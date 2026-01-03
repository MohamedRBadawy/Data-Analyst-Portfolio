import React, { useEffect, useRef } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const lastActiveElement = useRef<Element | null>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            lastActiveElement.current = document.activeElement;
            document.addEventListener('keydown', handleKeyDown);
            modalRef.current?.focus();
        } else {
            document.removeEventListener('keydown', handleKeyDown);
            (lastActiveElement.current as HTMLElement)?.focus();
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-brand-bg/80 backdrop-blur-sm flex items-center justify-center z-[100] animate-fade-in-slow"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                ref={modalRef}
                className="holographic-panel rounded-xl p-[var(--space-lg)] max-w-4xl w-full mx-4 relative"
                onClick={(e) => e.stopPropagation()}
                tabIndex={-1}
            >
                <h2 id="modal-title" className="font-poppins text-h3 text-brand-accent mb-6">{title}</h2>
                <div>{children}</div>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-brand-text-secondary hover:text-white transition-colors"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Modal;
