import React from 'react';

interface TestimonialProps {
    quote: string;
    name: string;
    role: string;
    company: string;
    result?: string;
    variant?: 'default' | 'compact' | 'hero';
}

const Testimonial: React.FC<TestimonialProps> = ({
    quote,
    name,
    role,
    company,
    result,
    variant = 'default'
}) => {
    if (variant === 'hero') {
        return (
            <div className="holographic-panel rounded-lg p-6 max-w-2xl mx-auto border border-brand-accent/40 shadow-md">
                <div className="flex items-start gap-4">
                    <svg className="w-8 h-8 text-brand-accent flex-shrink-0 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <div>
                        <p className="text-brand-text-primary italic mb-4 leading-relaxed text-sm">
                            "{quote}"
                        </p>
                        {result && (
                            <p className="text-brand-accent font-semibold mb-3 text-sm">
                                {result}
                            </p>
                        )}
                        <div className="text-xs">
                            <p className="text-brand-text-primary font-semibold">{name}</p>
                            <p className="text-brand-text-secondary">{role}, {company}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (variant === 'compact') {
        return (
            <div className="holographic-panel rounded-lg p-4 border border-brand-border shadow-sm">
                <p className="text-brand-text-secondary text-xs italic mb-3">
                    "{quote}"
                </p>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-brand-text-primary font-semibold text-xs">{name}</p>
                        <p className="text-brand-text-secondary text-xs">{role}, {company}</p>
                    </div>
                    {result && (
                        <p className="text-brand-accent font-bold text-xs">{result}</p>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="holographic-panel rounded-lg p-7 border border-brand-border shadow-md">
            <div className="flex items-start gap-4 mb-6">
                <svg className="w-10 h-10 text-brand-accent flex-shrink-0 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-brand-text-primary italic leading-relaxed text-sm">
                    "{quote}"
                </p>
            </div>

            {result && (
                <div className="bg-brand-accent/10 rounded-lg p-4 mb-6">
                    <p className="text-brand-accent font-bold text-center text-sm">
                        {result}
                    </p>
                </div>
            )}

            <div className="border-t border-brand-border pt-4">
                <p className="text-brand-text-primary font-bold text-base">{name}</p>
                <p className="text-brand-text-secondary text-sm">{role}</p>
                <p className="text-brand-accent font-mono text-xs mt-1">{company}</p>
            </div>
        </div>
    );
};

export default Testimonial;

