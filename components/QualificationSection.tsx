import React from 'react';
import { CheckIcon } from '../constants';

const QualificationSection: React.FC = () => {
    return (
        <section className="py-20 px-6 lg:px-12 relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-h2 font-poppins text-brand-text-primary mb-4 text-center">
                    Is This For You?
                </h2>
                <p className="text-brand-text-secondary text-center mb-16 max-w-2xl mx-auto">
                    I work with specific types of businesses. Here's how to know if we're a good fit.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* This IS For You */}
                    <div className="holographic-panel rounded-xl p-8 border-brand-accent">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
                                <CheckIcon className="w-6 h-6 text-brand-accent" />
                            </div>
                            <h3 className="text-h3 font-poppins text-brand-accent">This Is For You If...</h3>
                        </div>
                        
                        <ul className="space-y-4">
                            {[
                                "You're an SMB owner or operations manager (5-50 employees)",
                                "Your team wastes hours on manual reporting and data entry",
                                "Critical business data lives in disconnected spreadsheets",
                                "You need clear metrics but can't afford a full-time analyst",
                                "You're ready to invest in systems, not just more people"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-1" />
                                    <span className="text-brand-text-primary">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* This is NOT For You */}
                    <div className="holographic-panel rounded-xl p-8 border-brand-chaos">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-brand-chaos/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-brand-chaos" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <h3 className="text-h3 font-poppins text-brand-chaos">This Is NOT For You If...</h3>
                        </div>
                        
                        <ul className="space-y-4">
                            {[
                                "You need a full-stack developer or IT support",
                                "You want someone to \"just build what I say\" without strategy",
                                "You're looking for the cheapest option",
                                "Your team isn't ready to change how they work",
                                "You need enterprise-scale solutions or custom software products"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-brand-chaos flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span className="text-brand-text-primary">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-brand-text-secondary italic">
                        Not sure? Book a free 30-minute audit and I'll tell you honestly if I can help.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default QualificationSection;
