import React, { useState } from 'react';
import { milestones, aboutData } from '../data/content';
import ScramblingHeading from './ScramblingHeading';
import { useInteraction } from '../context/InteractionContext';
import { CheckIcon } from '../constants';

const About: React.FC = () => {
    const { setIsHovering } = useInteraction();
    const [pulseOrigin, setPulseOrigin] = useState<string | null>(null);

    return (
        <section className="py-20 px-8 lg:px-16">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <div 
                        className="relative w-32 h-32 mx-auto mb-6 group"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <img 
                            src={aboutData.image} 
                            alt={aboutData.name} 
                            className="w-full h-full rounded-full border-4 border-brand-accent shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_theme(colors.brand.accent)]" 
                        />
                    </div>
                    <ScramblingHeading text={`About ${aboutData.name}`} />
                    <p className="text-lg text-brand-text/80 mt-4 max-w-3xl mx-auto">{aboutData.summary}</p>
                </div>

                <div className="bg-brand-surface border border-brand-border rounded-xl p-8 mb-16">
                    <h3 className="text-center font-poppins text-2xl font-bold mb-6 text-brand-text">How I Can Help You</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {aboutData.servicesList.map((service, index) => (
                            <div key={index} className="flex items-start">
                                <CheckIcon className="w-5 h-5 text-brand-clarity mr-3 mt-1 flex-shrink-0" />
                                <span className="text-brand-text/90">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>

                 <div className="text-center mb-16 p-6 border border-brand-accent/50 rounded-lg animate-pulse-accent">
                    <p className="text-lg text-brand-text/90 font-medium italic">{aboutData.callToAction}</p>
                </div>
                
                <h3 className="text-center font-poppins text-2xl font-bold mb-12 text-brand-text">My Journey to Clarity</h3>
                
                <div className="relative pt-10">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-border rounded-full overflow-hidden">
                         <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(to_right,transparent_0%,#818CF8_50%,transparent_100%)] animate-shimmer" style={{ backgroundSize: '1000px 100%' }}></div>
                    </div>
                    
                    {pulseOrigin && (
                        <>
                            <div key={`${pulseOrigin}-right`} className="absolute top-1/2 h-1 bg-brand-accent animate-pulse-right" style={{ left: pulseOrigin, transformOrigin: 'left', width: `calc(100% - ${pulseOrigin})`, filter: 'drop-shadow(0 0 3px currentColor)' }} />
                            <div key={`${pulseOrigin}-left`} className="absolute top-1/2 h-1 bg-brand-accent animate-pulse-left" style={{ right: `calc(100% - ${pulseOrigin})`, transformOrigin: 'right', width: pulseOrigin, filter: 'drop-shadow(0 0 3px currentColor)' }} />
                        </>
                    )}

                    <div className="flex justify-between items-start">
                        {milestones.map(milestone => (
                            <div 
                                key={milestone.year} 
                                className="group relative" 
                                style={{ position: 'absolute', left: milestone.position, transform: 'translateX(-50%)' }}
                                onMouseEnter={() => setPulseOrigin(milestone.position)}
                                onMouseLeave={() => setPulseOrigin(null)}
                            >
                                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-0.5 bg-brand-accent h-0 group-hover:h-3.5 transition-all duration-300"></div>
                                <div className="w-4 h-4 bg-brand-surface border-2 border-brand-accent rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 group-hover:scale-125 transition-transform" />
                                <div className="text-center absolute -top-10 left-1/2 -translate-x-1/2 font-roboto-mono text-brand-accent">{milestone.year}</div>
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-64 p-4 bg-brand-surface border border-brand-border rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                                    <h4 className="font-poppins font-bold">{milestone.title}</h4>
                                    <p className="text-sm text-brand-text/80">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;