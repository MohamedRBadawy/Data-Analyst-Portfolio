import React from 'react';
import { DownloadIcon } from '../constants';
import ScramblingHeading from './ScramblingHeading';

const Resources: React.FC = () => {
    return (
        <section className="py-20 px-8 lg:px-16">
            <div className="text-center mb-12">
                <ScramblingHeading text="My Resource Hub" />
                <p className="text-lg text-brand-text/80 mt-2">I build tools and templates to help you get started. Here's a practical guide to jumpstart your own journey to clarity.</p>
            </div>
            <div className="max-w-2xl mx-auto bg-brand-surface border border-brand-border rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="text-brand-accent bg-brand-accent/10 p-4 rounded-lg">
                    <DownloadIcon size={48} />
                </div>
                <div className="flex-grow text-center md:text-left">
                    <h3 className="font-poppins text-2xl font-bold">Workflow Optimization Checklist</h3>
                    <p className="text-brand-text/80 mt-1">A practical, step-by-step guide to identify and eliminate bottlenecks in your current processes.</p>
                </div>
                <a 
                    href="#" 
                    download 
                    className="bg-brand-cta text-white font-bold font-poppins py-3 px-6 rounded-lg hover:bg-opacity-90 transform transition-all hover:scale-105 whitespace-nowrap hover:animate-pulse-cta"
                >
                    Download Now
                </a>
            </div>
        </section>
    );
};

export default Resources;