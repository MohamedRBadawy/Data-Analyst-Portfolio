
export interface BlogPost {
    title: string;
    excerpt: string;
    image: string;
    date: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        title: "Behind the Blueprint: From Messy Sheet to Manufacturing Dashboard",
        excerpt: "A visual transformation story. See the 'before' - a chaotic, multi-tab spreadsheet - and the 'after' - a clean, intuitive Looker dashboard that saved a client thousands in lost productivity by pinpointing a critical production bottleneck.",
        image: "https://picsum.photos/seed/blog5/1200/800",
        date: "November 02, 2023",
        tags: ["Data Visualization", "Looker", "Manufacturing", "Case Study"]
    },
    {
        title: "From Chaos to Clarity, Part 1: Automating the Noise",
        excerpt: "The chaos of manual reporting costs more than just time. This article breaks down the first step to clarity: automating repetitive data tasks with Google Apps Script to eliminate errors and reclaim focus.",
        image: "https://picsum.photos/seed/blog1/1200/800",
        date: "October 15, 2023",
        tags: ["Automation", "Google Apps Script", "Productivity", "From Chaos to Clarity"]
    },
    {
        title: "From Chaos to Clarity, Part 2: Architecting Your Data Blueprint",
        excerpt: "With automation handling the noise, it's time to build. This post covers the principles of designing a centralized Looker dashboard - your single source of truth - from scattered data sources.",
        image: "https://picsum.photos/seed/blog2/1200/800",
        date: "September 28, 2023",
        tags: ["BI Dashboards", "Looker", "Data Strategy", "From Chaos to Clarity"]
    },
    {
        title: "From Chaos to Clarity, Part 3: The Power of a Clear Narrative",
        excerpt: "Data is useless without a story. Learn how to transform your new, centralized data into compelling visual narratives that drive executive decisions and align your entire team.",
        image: "https://picsum.photos/seed/blog3/1200/800",
        date: "August 05, 2023",
        tags: ["Data Visualization", "KPIs", "Reporting", "From Chaos to Clarity"]
    },
];
