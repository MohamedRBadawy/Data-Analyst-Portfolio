import React from 'react';
import { trustedBy } from '../data/content';

const TrustedBy: React.FC = () => {
    return (
        <section className="py-8 lg:py-10 border-b border-brand-border/30">
            <div className="max-w-7xl mx-auto text-center px-4">
                <h3 className="font-roboto-mono text-xs text-brand-text-secondary uppercase tracking-[0.4em] mb-4">
                    Trusted to fix critical operations for
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-x-16 sm:gap-x-32 gap-y-6">
                    <div className="text-center group">
                        <div className="font-poppins font-bold text-2xl text-brand-text-primary hover:text-brand-text-secondary transition-colors duration-300">K Line Europe</div>
                        <div className="text-xs text-brand-text-secondary mt-1 font-roboto-mono">Fortune 500 Logistics</div>
                    </div>
                    <div className="text-center group">
                        <div className="font-poppins font-bold text-2xl text-brand-text-primary hover:text-brand-text-secondary transition-colors duration-300">Expack Shipping</div>
                        <div className="text-sm text-brand-text-primary/80 font-medium mt-1 font-sans">International Freight</div>
                    </div>
                    <div className="text-center group">
                        <div className="font-poppins font-bold text-2xl text-brand-text-primary hover:text-brand-text-secondary transition-colors duration-300">Sandton Taxi Cabs</div>
                        <div className="text-xs text-brand-text-secondary mt-1 font-roboto-mono">Regional Transport Fleet</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;

