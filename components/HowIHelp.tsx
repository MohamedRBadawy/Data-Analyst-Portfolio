import React from 'react';
import ScramblingHeading from './ScramblingHeading';

const HowIHelp: React.FC = () => {
    return (
        <section className="py-16 px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <ScramblingHeading text="How I Help" className="mb-6" />
                <p className="text-xl text-brand-text-secondary mt-6 mb-8 leading-relaxed">
                    I transform manual workflows into automated systems and scattered data into clear dashboards. 
                    If your team wastes hours on repetitive tasks or makes decisions with incomplete information, I can help.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                    <div className="holographic-panel p-6 rounded-xl">
                        <h3 className="font-poppins text-lg font-extrabold text-brand-accent mb-2">Automate</h3>
                        <p className="text-brand-text-secondary text-sm">Eliminate manual data entry and repetitive reporting tasks.</p>
                    </div>
                    <div className="holographic-panel p-6 rounded-xl">
                        <h3 className="font-poppins text-lg font-extrabold text-brand-accent mb-2">Visualize</h3>
                        <p className="text-brand-text-secondary text-sm">Turn scattered spreadsheets into real-time dashboards.</p>
                    </div>
                    <div className="holographic-panel p-6 rounded-xl">
                        <h3 className="font-poppins text-lg font-extrabold text-brand-accent mb-2">Optimize</h3>
                        <p className="text-brand-text-secondary text-sm">Identify bottlenecks and streamline operations.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowIHelp;

