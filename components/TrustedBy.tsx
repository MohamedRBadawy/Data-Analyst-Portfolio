import React from 'react';
import { trustedBy } from '../data/content';

const TrustedBy: React.FC = () => {
    return (
        <section className="py-12 lg:py-16 border-b border-brand-border/30">
            <div className="max-w-6xl mx-auto text-center px-4">
                <h3 className="font-roboto-mono text-sm text-brand-text-secondary uppercase tracking-widest mb-10">
                    Trusted to fix critical operations for
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-20 gap-y-10">
                    <div className="text-center group">
                        <div className="font-poppins font-bold text-2xl text-brand-text-primary hover:text-brand-accent transition-colors duration-300">K Line Europe</div>
                        <div className="text-xs text-brand-text-secondary mt-1 font-roboto-mono">Fortune 500 Logistics</div>
                    </div>
                    <div className="text-center group">
                        <div className="font-poppins font-bold text-2xl text-brand-text-primary hover:text-brand-accent transition-colors duration-300">Expack Shipping</div>
                        <div className="text-xs text-brand-text-secondary mt-1 font-roboto-mono">International Freight</div>
                    </div>
                    <div className="text-center group">
                        <div className="font-poppins font-bold text-2xl text-brand-text-primary hover:text-brand-accent transition-colors duration-300">Sandton Taxi Cabs</div>
                        <div className="text-xs text-brand-text-secondary mt-1 font-roboto-mono">Regional Transport Fleet</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
