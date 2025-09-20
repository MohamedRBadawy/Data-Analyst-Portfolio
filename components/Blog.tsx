import React, { useState, useMemo } from 'react';
import { blogPosts } from '../data/content';
import ScramblingHeading from './ScramblingHeading';

const allTags = Array.from(new Set(blogPosts.flatMap(p => p.tags)));

const Blog: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredPosts = useMemo(() => {
        return blogPosts
            .filter(post => {
                const searchMatch = searchTerm === '' ||
                    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
                const tagMatch = selectedTag === null || post.tags.includes(selectedTag);
                return searchMatch && tagMatch;
            });
    }, [searchTerm, selectedTag]);

    return (
        <section className="py-20 px-8 lg:px-16">
            <div className="text-center mb-12">
                <ScramblingHeading text="Insights & Articles" />
                <p className="text-lg text-brand-text/80 mt-2">Here's how I think about solving complex data problems. I share my thoughts on strategy, automation, and finding business clarity.</p>
            </div>
            
            <div className="max-w-6xl mx-auto mb-8">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-1/2 p-3 bg-brand-surface border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    />
                </div>
                 <div className="flex flex-wrap gap-2">
                    <button 
                        onClick={() => setSelectedTag(null)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedTag === null ? 'bg-brand-accent text-white' : 'bg-brand-surface hover:bg-brand-border'}`}
                    >
                        All
                    </button>
                    {allTags.map(tag => (
                        <button 
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedTag === tag ? 'bg-brand-accent text-white' : 'bg-brand-surface hover:bg-brand-border'}`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.length > 0 ? filteredPosts.map(post => (
                    <a href="#" key={post.title} className="group bg-brand-surface border border-brand-border rounded-xl overflow-hidden flex flex-col hover:border-brand-accent transition-colors">
                        <img src={post.image} alt="" className="w-full h-48 object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <p className="text-sm text-brand-text/70 font-roboto-mono mb-2">{post.date}</p>
                            <h3 className="font-poppins text-xl font-bold mb-2 group-hover:text-brand-accent transition-colors">{post.title}</h3>
                            <p className="text-brand-text/80 mb-4 flex-grow">{post.excerpt}</p>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-brand-border text-xs rounded-full font-medium">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </a>
                )) : (
                    <div className="md:col-span-2 text-center py-12 bg-brand-surface rounded-lg">
                        <p className="text-lg text-brand-text/80">No articles found. Try a different search or filter.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;