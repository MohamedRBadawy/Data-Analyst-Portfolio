import React from 'react';

interface AuditCTAProps {
    variant?: 'primary' | 'secondary' | 'minimal';
    showSubtext?: boolean;
    customText?: string;
}

const AuditCTA: React.FC<AuditCTAProps> = ({
    variant = 'primary',
    showSubtext = true,
    customText
}) => {
    const handleClick = () => {
        // Updated to use a placeholder link, user will update this
        window.open('https://cal.com/mohamedbadawy/clarity-audit', '_blank');
    };

    if (variant === 'minimal') {
        return (
            <button
                onClick={handleClick}
                className="btn btn-tertiary"
            >
                {customText || 'Book Free Audit →'}
            </button>
        );
    }

    if (variant === 'secondary') {
        return (
            <div className="text-center">
                <button
                    onClick={handleClick}
                    className="btn btn-secondary"
                >
                    {customText || 'Book Your Free Clarity Audit'}
                </button>
                {showSubtext && (
                    <p className="text-sm text-brand-text-secondary mt-3 italic">
                        If I can't find $10k in savings, we stop there.
                    </p>
                )}
            </div>
        );
    }

    return (
        <div className="text-center">
            <button
                onClick={handleClick}
                className="btn btn-primary animate-pulse-cta"
            >
                {customText || 'Book Your Free Clarity Audit'}
            </button>
            {showSubtext && (
                <div className="mt-4 space-y-2">
                    <p className="text-brand-text-secondary">
                        See exactly what's broken, what it's costing you, and what to fix first
                    </p>
                    <p className="text-sm text-brand-accent italic font-medium">
                        "If I can't identify at least $10K in savings in 30 minutes, we stop there."
                    </p>
                </div>
            )}
        </div>
    );
};

export default AuditCTA;
