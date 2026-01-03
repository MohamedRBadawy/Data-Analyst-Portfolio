import React from 'react';

interface ProgressBarProps {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-1.5 bg-brand-border/30 z-50">
            <div
                className="h-full bg-brand-accent transition-all duration-500 ease-in-out"
                style={{
                    width: `${progress}%`,
                    boxShadow: `0 0 10px var(--brand-accent)`,
                }}
            />
        </div>
    );
};

export default ProgressBar;
