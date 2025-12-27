import React from 'react';
import { DownloadIcon } from '../constants';
import ScramblingHeading from './ScramblingHeading';
import { useInteraction } from '../context/InteractionContext';

const Resources: React.FC = () => {
    const { setIsHovering } = useInteraction();

    return (
        <section className="py-16 lg:py-20">
            <div className="text-center mb-16">
                <ScramblingHeading text="My Resource Hub" />
                <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl mx-auto">I build tools and templates to help you get started. Here's a practical guide to jumpstart your own journey to clarity.</p>
            </div>
            <div className="max-w-3xl mx-auto holographic-panel rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="text-brand-accent bg-brand-accent/10 p-4 rounded-lg">
                    <DownloadIcon size={48} />
                </div>
                <div className="flex-grow text-center md:text-left">
                    <h3 className="font-poppins text-h3 text-glow-accent">Workflow Optimization Checklist</h3>
                    <p className="text-brand-text-secondary mt-1">A practical, step-by-step guide to identify and eliminate bottlenecks in your current processes.</p>
                </div>
                <a 
                    href="#" 
                    download 
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="btn btn-primary !py-3 !px-6 animate-pulse-cta whitespace-nowrap"
                >
                    Download Now
                </a>
            </div>
        </section>
    );
};

export default Resources;