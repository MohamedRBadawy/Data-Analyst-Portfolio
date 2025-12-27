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

    return (
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onClick={isClickable ? onViewDetails : undefined}
            onMouseEnter={isClickable ? () => setIsHovering(true) : undefined}
            onMouseLeave={isClickable ? () => setIsHovering(false) : undefined}
            className={`interactive-glow holographic-panel rounded-xl p-8 flex flex-col ${isClickable ? 'cursor-pointer' : ''}`}
        >
            <p className="text-brand-text-primary flex-grow z-10 text-lg leading-relaxed">"{quote}"</p>
            {caseStudyId && (
                <div className="z-10 mt-4 text-left font-poppins font-bold text-sm text-brand-accent self-start">
                    Read the Full Case Study &rarr;
                </div>
            )}
            <div className="mt-6 flex items-center justify-between z-10 border-t border-brand-border/50 pt-6">
                 <div className="flex items-center">
                    <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4 border-2 border-brand-accent" />
                    <div>
                        <h4 className="font-poppins font-bold text-brand-text-primary">{name}</h4>
                        <p className="text-sm text-brand-text-secondary">{title}</p>
                    </div>
                </div>
                <div className="font-roboto-mono text-sm text-brand-clarity bg-brand-clarity/10 px-3 py-1 rounded-md">
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
        <section className="py-16 lg:py-20">
            <div className="text-center mb-16">
                <ScramblingHeading text="Don't Just Take My Word For It" />
                <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl mx-auto">See how my work has translated into real, measurable results for my clients and partners.</p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <TestimonialCard 
                        key={i} 
                        {...t} 
                        onViewDetails={() => handleViewDetails(t.caseStudyId)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;