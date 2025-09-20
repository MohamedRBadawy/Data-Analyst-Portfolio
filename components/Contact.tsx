import React from 'react';
import { LinkedInIcon, WhatsAppIcon, FreelancerIcon, UpworkIcon } from '../constants';
import ScramblingHeading from './ScramblingHeading';

const Contact: React.FC = () => {
    return (
        <section className="py-20 px-8 lg:px-16">
            <div className="text-center mb-12">
                <ScramblingHeading text="Let's Optimize Your Workflow Together" />
                <p className="text-lg text-brand-text/80 mt-2">Ready to turn chaos into clarity? Get in touch through any of these platforms.</p>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <a href="https://www.linkedin.com/in/mohamedrbadawy/" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center p-4 bg-brand-process text-white rounded-lg font-poppins font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 hover:animate-pulse-process">
                        <LinkedInIcon />
                        <span className="ml-3">Connect on LinkedIn</span>
                    </a>
                     <a href="https://www.freelancer.com/u/MohamedRBadawy" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center p-4 bg-brand-accent text-white rounded-lg font-poppins font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 hover:animate-pulse-accent">
                        <FreelancerIcon />
                        <span className="ml-3">Hire on Freelancer</span>
                    </a>
                    <a href="https://www.upwork.com/freelancers/~01c371496efa85b1be" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center p-4 bg-brand-clarity text-brand-bg rounded-lg font-poppins font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 hover:animate-pulse-clarity">
                        <UpworkIcon />
                        <span className="ml-3">Hire on Upwork</span>
                    </a>
                    <a href="https://wa.me/+201007211284" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center p-4 bg-brand-clarity text-brand-bg rounded-lg font-poppins font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 hover:animate-pulse-clarity">
                        <WhatsAppIcon />
                        <span className="ml-3">Message on WhatsApp</span>
                    </a>
                </div>
                <div className="text-center w-full pt-8 mt-8 border-t border-brand-border">
                    <p className="text-brand-text/70">Or email me directly at:</p>
                    <a href="mailto:mohamed.raouf.badawy88@gmail.com" className="font-roboto-mono text-brand-accent hover:underline break-all">
                        mohamed.raouf.badawy88@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;