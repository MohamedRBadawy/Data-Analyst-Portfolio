import React, { useRef } from 'react';
import Contact from '../components/Contact';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ContactPage: React.FC = () => {
    const contactRef = useRef<HTMLDivElement>(null);
    const isContactVisible = useIntersectionObserver(contactRef);

    return (
        <div className="pt-20">
            <div ref={contactRef} className={isContactVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                <Contact />
            </div>
        </div>
    );
};

export default ContactPage;