
import React from 'react';
import { LinkedInIcon, WhatsAppIcon, FreelancerIcon, UpworkIcon } from '../constants';
import ScramblingHeading from './ScramblingHeading';
import { useInteraction } from '../context/InteractionContext';

const Contact: React.FC = () => {
    const { setIsHovering } = useInteraction();

    const socialLinks = [
        { href: "https://www.linkedin.com/in/mohamedrbadawy/", icon: <LinkedInIcon />, text: "Connect on LinkedIn" },
        { href: "https://www.freelancer.com/u/MohamedRBadawy", icon: <FreelancerIcon />, text: "Hire on Freelancer" },
        { href: "https://www.upwork.com/freelancers/~01c371496efa85b1be", icon: <UpworkIcon />, text: "Hire on Upwork" },
        { href: "https://wa.me/+201007211284", icon: <WhatsAppIcon />, text: "Message on WhatsApp" }
    ];

    return (
        <section className="py-[var(--space-3xl)] px-[var(--space-lg)]">
            <div className="content-container">
                <div className="text-center mb-12">
                    <ScramblingHeading text="Let's Optimize Your Workflow Together" />
                    <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl mx-auto">
                        Ready to turn chaos into clarity? The first step is a conversation. Book a complimentary audit, and let's build your blueprint for success.
                    </p>
                    <p className="font-roboto-mono text-brand-accent mt-6">I'll respond within 24 business hours.</p>
                </div>
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <a
                        href="https://calendly.com/mohamed-raouf-badawy88/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="inline-block btn btn-primary animate-pulse-cta"
                    >
                        Book a Free 30-Min Audit
                    </a>
                </div>

                <p className="text-center text-brand-text-secondary mb-8">Or, connect with me on these platforms:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {socialLinks.map(link => (
                        <a
                            key={link.text}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="holographic-panel group w-full flex items-center justify-center p-4 rounded-lg font-poppins font-bold text-brand-text-primary transition-all"
                        >
                            <span className="group-hover:text-brand-accent transition-colors duration-300">{link.icon}</span>
                            <span className="ml-3">{link.text}</span>
                        </a>
                    ))}
                </div>
                <div className="text-center w-full pt-10 mt-10 border-t border-brand-border/30">
                    <p className="text-brand-text-secondary mb-3">Or email me directly at:</p>
                    <a
                        href="mailto:mohamed.raouf.badawy88@gmail.com"
                        className="font-roboto-mono text-brand-accent hover:text-white transition-colors text-base sm:text-lg break-all inline-block border-b border-brand-accent/30 hover:border-brand-accent pb-1"
                    >
                        mohamed.raouf.badawy88@gmail.com
                    </a>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Contact;
