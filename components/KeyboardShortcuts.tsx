import React from 'react';
import { XIcon } from '../constants';

interface KeyboardShortcutsProps {
    isOpen: boolean;
    onClose: () => void;
}

const KeyboardShortcuts: React.FC<KeyboardShortcutsProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const shortcuts = [
        { key: '?', description: 'Open this help dialog' },
        { key: '1', description: 'Navigate to Home' },
        { key: '2', description: 'Navigate to Work' },
        { key: '3', description: 'Navigate to About' },
        { key: '4', description: 'Navigate to Services' },
        { key: '5', description: 'Navigate to Process' },
        { key: '6', description: 'Navigate to Contact' },
        { key: 'Esc', description: 'Close dialogs' },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-brand-surface border border-brand-border rounded-xl max-w-md w-full shadow-2xl animate-reveal-in">
                <div className="flex items-center justify-between p-6 border-b border-brand-border/50">
                    <h2 className="text-xl font-poppins font-bold text-brand-text-primary">Keyboard Shortcuts</h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-brand-border/20 rounded-lg transition-colors"
                        aria-label="Close shortcuts"
                    >
                        <XIcon className="w-5 h-5 text-brand-text-secondary" />
                    </button>
                </div>
                
                <div className="p-6 space-y-4">
                    {shortcuts.map((shortcut, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                            <span className="text-brand-text-secondary">{shortcut.description}</span>
                            <kbd className="px-3 py-1 bg-brand-bg rounded border border-brand-border text-brand-accent font-roboto-mono font-bold text-sm">
                                {shortcut.key}
                            </kbd>
                        </div>
                    ))}
                </div>

                <div className="px-6 pb-6 text-xs text-brand-text-secondary/70">
                    <p>Designed for power users who prefer keyboard navigation. These shortcuts work globally across the portfolio.</p>
                </div>
            </div>
        </div>
    );
};

export default KeyboardShortcuts;
