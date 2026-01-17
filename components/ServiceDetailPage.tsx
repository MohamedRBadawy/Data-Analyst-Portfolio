import React from 'react';
import { ServiceItem } from '../data/content';
import { useInteraction } from '../context/InteractionContext';
import ScramblingHeading from './ScramblingHeading';
import { CheckIcon, UserIcon, ClipboardListIcon, MailIcon, LightBulbIcon } from '../constants';

interface ServiceDetailPageProps {
    service: ServiceItem;
    onBack: () => void;
    navigateToContact: () => void;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onBack, navigateToContact }) => {
    const { setIsHovering } = useInteraction();

    return (
        <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-8 lg:px-16 animate-reveal-in">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={onBack}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="inline-flex items-center px-4 py-2 bg-brand-bg/60 backdrop-blur-xl border border-brand-accent/20 rounded-full text-xs sm:text-sm font-roboto-mono font-bold uppercase tracking-[0.12em] text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-accent/10 hover:border-brand-accent/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] mb-8 group"
                >
                    <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">&larr;</span>
                    Back to Services
                </button>

                <header className="text-center my-12">
                    <ScramblingHeading text={service.title} />
                    <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl mx-auto">{service.description}</p>
                </header>

                <article className="space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-xl)]">
                        {/* Key Features */}
                        <div className="holographic-panel p-8 rounded-lg">
                            <div className="flex items-center mb-4">
                                <CheckIcon className="w-6 h-6 text-brand-clarity mr-3" />
                                <h3 className="font-poppins font-bold text-xl">Key Features</h3>
                            </div>
                            <ul className="space-y-3">
                                {service.keyFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start text-brand-text-primary">
                                        <span className="text-brand-accent mr-3 mt-1.5 text-xs">◆</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Deliverables */}
                        <div className="holographic-panel p-8 rounded-lg">
                            <div className="flex items-center mb-4">
                                <ClipboardListIcon className="w-6 h-6 text-brand-clarity mr-3" />
                                <h3 className="font-poppins font-bold text-xl">What You Get</h3>
                            </div>
                            <ul className="space-y-3">
                                {service.deliverables.map((item, index) => (
                                    <li key={index} className="flex items-start text-brand-text-primary">
                                        <span className="text-brand-accent mr-3 mt-1.5 text-xs">◆</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* You're a great fit if... */}
                    <div className="holographic-panel p-8 rounded-lg">
                        <div className="flex items-center mb-4">
                            <LightBulbIcon className="w-6 h-6 text-brand-clarity mr-3" />
                            <h3 className="font-poppins font-bold text-xl">This Service Is For You If...</h3>
                        </div>
                        <ul className="space-y-3">
                            {service.youAreAGreatFit.map((point, index) => (
                                <li key={index} className="flex items-start text-brand-text-primary">
                                    <span className="text-brand-accent mr-3 mt-1.5 text-xs">◆</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ideal For & Pricing */}
                    <div className="holographic-panel p-8 rounded-lg">
                        <div className="flex flex-col md:flex-row md:items-center gap-[var(--space-xl)]">
                            <div className="flex-grow">
                                <div className="flex items-center mb-3">
                                    <UserIcon className="w-6 h-6 text-brand-process mr-3" />
                                    <h3 className="font-poppins font-bold text-xl text-brand-text-secondary">Ideal For...</h3>
                                </div>
                                <p className="text-brand-text-primary">{service.idealFor}</p>
                            </div>
                            <div className="text-center flex-shrink-0">
                                <p className="font-roboto-mono text-sm text-brand-text-secondary mb-1">Value-Based Price</p>
                                <p className="font-roboto-mono text-3xl text-brand-cta bg-brand-cta/10 px-4 py-2 rounded-lg inline-block">
                                    {service.price}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center pt-8 border-t border-brand-border">
                        <h3 className="font-poppins text-2xl font-bold mb-4 text-glow-accent">Ready to Optimize This Workflow?</h3>
                        <p className="text-brand-text-secondary mb-6 max-w-2xl mx-auto">Let's discuss how this service can be tailored to your specific business needs.</p>
                        <button
                            onClick={navigateToContact}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            className="inline-flex items-center btn btn-primary"
                        >
                            <MailIcon className="w-6 h-6 mr-3" />
                            Let's Talk
                        </button>
                    </div>

                </article>
            </div>
        </div>
    );
};

export default ServiceDetailPage;
