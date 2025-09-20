import React, { useRef } from 'react';
import Resources from '../components/Resources';
import Toolkit from '../components/Toolkit';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ResourcesPage: React.FC = () => {
    const resourcesRef = useRef<HTMLDivElement>(null);
    const toolkitRef = useRef<HTMLDivElement>(null);

    const isResourcesVisible = useIntersectionObserver(resourcesRef);
    const isToolkitVisible = useIntersectionObserver(toolkitRef);

    return (
        <div className="pt-20">
            <div ref={toolkitRef} className={isToolkitVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                <Toolkit />
            </div>
            <div ref={resourcesRef} className={isResourcesVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                <Resources />
            </div>
        </div>
    );
};

export default ResourcesPage;