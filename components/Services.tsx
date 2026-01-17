import React, { useState } from 'react';
import { servicesData, ServiceItem } from '../data/content';
import ScramblingHeading from './ScramblingHeading';
import { CheckIcon, UserIcon } from '../constants';
import { useInteraction } from '../context/InteractionContext';
import ServiceComparisonTable from './ServiceComparisonTable';
import RevealOnScroll from './RevealOnScroll';

interface ServicesProps {
    onViewDetails: (service: ServiceItem) => void;
}

const Services: React.FC<ServicesProps> = ({ onViewDetails }) => {
    const { setIsHovering } = useInteraction();
    const [activeCategory, setActiveCategory] = useState<string>(servicesData[0].category);

    const currentService = servicesData.find(s => s.category === activeCategory);

    return (
        <section className="py-[var(--space-3xl)] px-[var(--space-lg)]">
            <div className="content-container">
                <div className="text-center mb-16">
                    <ScramblingHeading text="My Services" />
                    <p className="text-2xl text-brand-text-primary/80 font-medium mt-6 max-w-4xl mx-auto leading-relaxed">
                        I offer a focused suite of services designed to deliver measurable business outcomes, from clarifying data to automating entire workflows.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Tab Navigation */}
                    <RevealOnScroll direction="up" delay={200}>
                        <div className="flex flex-col md:flex-row justify-center border-b border-brand-border mb-12">
                            {servicesData.map(service => (
                                <button
                                    key={service.category}
                                    onClick={() => setActiveCategory(service.category)}
                                    className={`px-8 py-5 font-sans font-bold text-lg capitalize transition-colors duration-300 relative w-full md:w-auto text-center ${activeCategory === service.category ? 'text-brand-accent' : 'text-brand-text-secondary hover:text-brand-text-primary'}`}
                                >
                                    <div className="flex items-center justify-center">
                                        <span className="mr-3">{service.icon}</span>
                                        {service.category}
                                    </div>
                                    {activeCategory === service.category && (
                                        <div
                                            className="absolute bottom-0 left-0 w-full h-1 bg-brand-accent transition-all duration-300"
                                            style={{ transformOrigin: 'left' }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </RevealOnScroll>

                    {/* Tab Content */}
                    <div className="min-h-[400px] animate-construct-in">
                        {currentService && (
                            <div>
                                <p className="text-center text-brand-text-primary/80 font-medium text-xl mb-12 leading-relaxed max-w-4xl mx-auto">{currentService.description}</p>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-xl)]">
                                    {currentService.items.map((item, index) => (
                                        <RevealOnScroll key={item.title} direction="up" delay={index * 100} className="h-full">
                                            <div
                                                onClick={() => onViewDetails(item)}
                                                onMouseEnter={() => setIsHovering(true)}
                                                onMouseLeave={() => setIsHovering(false)}
                                                className="holographic-panel rounded-lg p-7 flex flex-col cursor-pointer border border-brand-border/50 smooth-transition shadow-md hover:shadow-xl hover:-translate-y-2 h-full card-hover group relative overflow-hidden"
                                            >
                                                <h3 className="font-sans text-2xl font-bold text-brand-text-primary mb-4">{item.title}</h3>
                                                <div className="flex items-center text-brand-text-primary/80 font-medium text-base mb-6">
                                                    <UserIcon className="w-5 h-5 mr-2" />
                                                    <span>Best for: {item.bestFor}</span>
                                                </div>
                                                <p className="text-brand-text-primary/80 font-medium flex-grow mb-8 text-lg leading-relaxed">{item.description}</p>
                                                <div className="mt-auto pt-8 border-t border-brand-border/50">
                                                    <p className="text-sm text-ops-text-primary mb-3 font-bold uppercase tracking-wide">Why You Need This:</p>
                                                    <div className="flex items-start mb-8 align-top">
                                                        <CheckIcon className="w-6 h-6 text-brand-clarity mr-3 mt-0.5 flex-shrink-0" />
                                                        <p className="text-brand-clarity font-medium text-lg">{item.value}</p>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <p className="font-mono text-xl text-brand-cta bg-brand-surface border border-brand-cta/30 px-5 py-2.5 rounded-md inline-block shadow-lg shadow-brand-cta/20">
                                                            {item.price}
                                                        </p>
                                                        <div className="font-poppins font-bold text-base text-brand-accent group-hover:translate-x-1 transition-transform">
                                                            View Details &rarr;
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </RevealOnScroll>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Comparison Table */}
                    <RevealOnScroll direction="up" delay={400} width="100%" className="mt-20">
                        <div className="text-center mb-12">
                            <ScramblingHeading text="Quickly Compare Services" className="font-poppins text-h3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-clarity bg-[length:200%_auto] animate-gradient-pan" />
                            <p className="text-brand-text-secondary mt-2">Find the right solution for your current business needs.</p>
                        </div>
                        <ServiceComparisonTable />
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default Services;
