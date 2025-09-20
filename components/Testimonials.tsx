import React, { useRef } from 'react';
import { testimonials } from '../data/content';
import ScramblingHeading from './ScramblingHeading';

const TestimonialCard: React.FC<(typeof testimonials)[0]> = ({ name, title, quote, image, roi }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--x', `${x}px`);
        cardRef.current.style.setProperty('--y', `${y}px`);
    };

    return (
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="interactive-glow bg-brand-surface border border-brand-border rounded-xl p-6 transform hover:scale-105 hover:border-brand-process transition-all duration-300 flex flex-col"
        >
            <p className="text-brand-text flex-grow z-10">"{quote}"</p>
            <div className="mt-6 flex items-center justify-between z-10">
                 <div className="flex items-center">
                    <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <h4 className="font-poppins font-bold">{name}</h4>
                        <p className="text-sm text-brand-text/70">{title}</p>
                    </div>
                </div>
                <div className="font-roboto-mono text-sm text-brand-clarity bg-brand-clarity/10 px-2 py-1 rounded">
                    {roi}
                </div>
            </div>
        </div>
    );
};


const Testimonials: React.FC = () => {
    return (
        <section className="py-20 px-8 lg:px-16">
            <div className="text-center mb-12">
                <ScramblingHeading text="Don't Just Take My Word For It" />
                <p className="text-lg text-brand-text/80 mt-2">Hear from business owners who've experienced the transformation.</p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <TestimonialCard key={i} {...t} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;