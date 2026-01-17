import React, { useRef } from 'react';
import { testimonials, caseStudies, CaseStudy } from '../data/content';
import ScramblingHeading from './ScramblingHeading';
import { useInteraction } from '../context/InteractionContext';

interface Testimonial {
    name: string;
    title: string;
    quote: string;
    image: string;
    roi: string;
    caseStudyId?: string;
}

interface TestimonialCardProps extends Testimonial {
    onViewDetails: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, title, quote, image, roi, caseStudyId, onViewDetails }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { setIsHovering } = useInteraction();

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--x', `${x}px`);
        cardRef.current.style.setProperty('--y', `${y}px`);
    };

    const isClickable = !!caseStudyId;

    // Determine if image is initials (short string) or URL
    const isInitials = image && image.length <= 2;

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onClick={isClickable ? onViewDetails : undefined}
            onMouseEnter={isClickable ? () => setIsHovering(true) : undefined}
            onMouseLeave={isClickable ? () => setIsHovering(false) : undefined}
            className={`interactive-glow holographic-panel rounded-lg p-8 flex flex-col border border-brand-border/30 smooth-transition shadow-md hover:shadow-[0_20px_40px_rgba(3,105,161,0.25)] group relative overflow-hidden ${isClickable ? 'cursor-pointer hover:-translate-y-2 card-hover' : ''}`}
        >
            <p className="text-brand-text-primary flex-grow z-10 text-base leading-relaxed">"{quote}"</p>
            {caseStudyId && (
                <div className="z-10 mt-4 text-left font-sans font-bold text-xs text-brand-text-primary self-start uppercase tracking-wide group-hover:underline">
                    Read the Full Case Study &rarr;
                </div>
            )}
            <div className="mt-6 flex items-center justify-between z-10 border-t border-brand-border/50 pt-6">
                <div className="flex items-center">
                    {isInitials ? (
                        <div className="w-12 h-12 rounded-full mr-4 border-2 border-brand-border flex items-center justify-center bg-brand-border text-brand-text-primary font-bold text-xs">
                            {image}
                        </div>
                    ) : (
                        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4 border-2 border-brand-border" />
                    )}
                    <div>
                        <h4 className="font-sans font-bold text-sm text-brand-text-primary">{name}</h4>
                        <p className="text-xs text-brand-text-secondary">{title}</p>
                    </div>
                </div>
                <div className="font-mono text-xs text-brand-clarity bg-brand-clarity/10 px-3 py-1.5 rounded-md">
                    {roi}
                </div>
            </div>
        </div>
    );
};

interface TestimonialsProps {
    showProjectDetailPage: (study: CaseStudy) => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ showProjectDetailPage }) => {

    const handleViewDetails = (caseStudyId: string | undefined) => {
        if (!caseStudyId) return;
        const project = caseStudies.find(cs => cs.id === caseStudyId);
        if (project) {
            showProjectDetailPage(project);
        }
    };

    return (
        <section className="py-[var(--space-3xl)] px-[var(--space-lg)]">
            <div className="content-container">
                <div className="text-center mb-16">
                    <ScramblingHeading text="Don't Just Take My Word For It" />
                    <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl mx-auto">See how my work has translated into real, measurable results for my clients and partners.</p>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-xl)]">
                    {testimonials.map((t, i) => (
                        <TestimonialCard
                            key={i}
                            {...t}
                            onViewDetails={() => handleViewDetails(t.caseStudyId)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
