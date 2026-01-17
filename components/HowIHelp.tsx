import React from 'react';
import ScramblingHeading from './ScramblingHeading';

const HowIHelp: React.FC = () => {
    return (
        <section className="py-6 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-1">
                    <ScramblingHeading text="How I Help" className="mb-0" />
                </div>
                <p className="text-lg sm:text-2xl text-brand-text-secondary mt-2 mb-8 leading-relaxed max-w-4xl mx-auto">
                    I transform manual workflows into automated systems and scattered data into clear dashboards.
                    If your team wastes hours on repetitive tasks or makes decisions with incomplete information, I can help.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="holographic-panel p-5 rounded-xl">
                        <h3 className="font-poppins text-xl font-extrabold text-brand-accent mb-2">Automate</h3>
                        <p className="text-brand-text-secondary text-base leading-relaxed">Eliminate manual data entry and repetitive reporting tasks.</p>
                    </div>
                    <div className="holographic-panel p-5 rounded-xl">
                        <h3 className="font-poppins text-xl font-extrabold text-brand-accent mb-2">Visualize</h3>
                        <p className="text-brand-text-secondary text-base leading-relaxed">Turn scattered spreadsheets into real-time dashboards.</p>
                    </div>
                    <div className="holographic-panel p-5 rounded-xl">
                        <h3 className="font-poppins text-xl font-extrabold text-brand-accent mb-2">Optimize</h3>
                        <p className="text-brand-text-secondary text-base leading-relaxed">Identify bottlenecks and streamline operations.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowIHelp;

