import React, { useRef } from 'react';
import Blog from '../components/Blog';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const BlogPage: React.FC = () => {
    const blogRef = useRef<HTMLDivElement>(null);
    const isBlogVisible = useIntersectionObserver(blogRef);

    return (
        <div className="pt-20">
            <div ref={blogRef} className={isBlogVisible ? 'animate-fade-in-scale-up' : 'opacity-0'}>
                <Blog />
            </div>
        </div>
    );
};

export default BlogPage;