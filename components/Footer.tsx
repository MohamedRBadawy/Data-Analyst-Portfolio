import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-12 px-8 lg:px-16 text-center border-t border-brand-border">
            <div className="flex justify-center items-center mb-4 overflow-hidden h-8 group cursor-default">
                <svg width="200" height="20" viewBox="0 0 200 20">
                    <style>{`
                        @keyframes chaos-path {
                            0%, 100% { d: path("M 0 10 C 50 20, 50 0, 100 10 S 150 20, 200 10"); }
                            50% { d: path("M 0 10 C 50 0, 50 20, 100 10 S 150 0, 200 10"); }
                        }
                    `}</style>
                    <path d="M 0 10 C 50 20, 50 0, 100 10 S 150 20, 200 10" stroke="var(--brand-chaos)" fill="none" strokeWidth="2" strokeDasharray="4 4" className="opacity-30 group-hover:opacity-100 transition-opacity duration-700" />
                    <path d="M 0 10 C 50 10, 50 10, 100 10 S 150 10, 200 10" stroke="var(--brand-clarity)" fill="none" strokeWidth="2" strokeDasharray="200" strokeDashoffset="200">
                        <animate attributeName="stroke-dashoffset" from="200" to="0" dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 1" keySplines="0.4, 0, 0.2, 1" />
                    </path>
                </svg>
            </div>
            <p className="text-base text-brand-text-secondary">From chaos to clarity - ready for your workflow?</p>
            <p className="text-sm text-brand-text-secondary/70 mt-4">© {new Date().getFullYear()} Clarity Dash. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
