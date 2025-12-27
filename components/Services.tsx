import React, { useState } from 'react';
import { servicesData, ServiceItem } from '../data/content';
import ScramblingHeading from './ScramblingHeading';
import { CheckIcon, UserIcon } from '../constants';
import { useInteraction } from '../context/InteractionContext';
import ServiceComparisonTable from './ServiceComparisonTable';

interface ServicesProps {
    onViewDetails: (service: ServiceItem) => void;
}

const Services: React.FC<ServicesProps> = ({ onViewDetails }) => {
    const { setIsHovering } = useInteraction();
    const [activeCategory, setActiveCategory] = useState<string>(servicesData[0].category);

    const currentService = servicesData.find(s => s.category === activeCategory);

    return (
        <section className="py-16 lg:py-20">
            <div className="text-center mb-16">
                <ScramblingHeading text="My Services" />
                <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl mx-auto">
                    I offer a focused suite of services designed to deliver measurable business outcomes, from clarifying data to automating entire workflows.
                </p>
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Tab Navigation */}
                <div className="flex flex-col md:flex-row justify-center border-b border-brand-border mb-12">
                    {servicesData.map(service => (
                        <button
                            key={service.category}
                            onClick={() => setActiveCategory(service.category)}
                            className={`px-6 py-4 font-poppins font-bold text-lg capitalize transition-colors duration-300 relative w-full md:w-auto text-center ${activeCategory === service.category ? 'text-brand-accent' : 'text-brand-text-secondary hover:text-white'}`}
                        >
                            <div className="flex items-center justify-center">
                                <span className="mr-3">{service.icon}</span>
                                {service.category}
                            </div>
                            {activeCategory === service.category && <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-accent animate-pulse-right" style={{ transformOrigin: 'left' }} />}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px] animate-construct-in">
                    {currentService && (
                        <div>
                            <p className="text-center text-brand-text-secondary text-lg mb-12">{currentService.description}</p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {currentService.items.map((item) => (
                                    <div
                                        key={item.title}
                                        onClick={() => onViewDetails(item)}
                                        onMouseEnter={() => setIsHovering(true)}
                                        onMouseLeave={() => setIsHovering(false)}
                                        className="holographic-panel rounded-xl p-8 flex flex-col cursor-pointer"
                                    >
                                        <h3 className="font-poppins text-h4 text-brand-accent mb-2">{item.title}</h3>
                                        <div className="flex items-center text-brand-text-secondary text-sm mb-4">
                                            <UserIcon className="w-4 h-4 mr-2" />
                                            <span>Best for: {item.bestFor}</span>
                                        </div>
                                        <p className="text-sm text-brand-text-secondary flex-grow mb-6 text-base leading-relaxed">{item.description}</p>
                                        <div className="mt-auto pt-6 border-t border-brand-border/50">
                                            <p className="text-sm text-white mb-2 font-bold uppercase tracking-wide">Why You Need This:</p>
                                            <div className="flex items-start mb-6 align-top">
                                                <CheckIcon className="w-5 h-5 text-brand-clarity mr-3 mt-0.5 flex-shrink-0" />
                                                <p className="text-brand-clarity font-medium text-base">{item.value}</p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <p className="font-roboto-mono text-xl text-brand-cta bg-brand-surface border border-brand-cta/30 px-4 py-2 rounded-md inline-block shadow-[0_0_10px_rgba(255,199,0,0.1)]">
                                                    {item.price}
                                                </p>
                                                <div className="font-poppins font-bold text-sm text-brand-accent group-hover:translate-x-1 transition-transform">
                                                    View Details &rarr;
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Comparison Table */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <ScramblingHeading text="Quickly Compare Services" className="font-poppins text-h3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-clarity bg-[length:200%_auto] animate-gradient-pan" />
                        <p className="text-brand-text-secondary mt-2">Find the right solution for your current business needs.</p>
                    </div>
                    <ServiceComparisonTable />
                </div>
            </div>
        </section>
    );
};

export default Services;