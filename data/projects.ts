
export interface Project {
    title: string;
    image: string;
    description: string;
    tags: string[];
    url?: string;
    roi?: string; // NEW: High-impact metric
    caseStudyId?: string; // Link to corresponding case study
}

export const projectsData: Project[] = [
    {
        title: "Automated Deals Reporting System",
        image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/automation_flow.mp4",
        description: "A multi-stage automation that reduced 128 hours of weekly manual pricing calculations to minutes, ensuring 100% accuracy.",
        tags: ["Google Apps Script", "Automation", "CRM Integration"],
        url: "#",
        roi: "Saved 128 Hours/Week",
        caseStudyId: "automated-deals-reporting"
    },
    {
        title: "Manufacturing QC Dashboard",
        image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/manufacturing_dashboard.mp4",
        description: "A Looker dashboard that provided real-time visibility into defect rates, helping reduce them by 41% and cutting remake costs.",
        tags: ["Looker", "Manufacturing", "Quality Control"],
        url: "#",
        roi: "Reduced Defects by 41%",
        caseStudyId: "manufacturing-qc-dashboard"
    },
    {
        title: "Team Performance & SLA Dashboard",
        image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/team_performance_dashboard.mp4",
        description: "A real-time Looker dashboard tracking Rework and Utilization, which led to a 10% reduction in team rework and balanced workloads.",
        tags: ["Looker", "Performance Metrics", "BI Dashboard"],
        url: "#",
        roi: "10% Reduction in Rework",
        caseStudyId: "team-performance-dashboard"
    },
    {
        title: "Global On-Time Performance Dashboard",
        image: "/artifacts/kline/ots-kpi-overview.jpg",
        description: "A multi-facility Looker dashboard that stabilized global On-Time Performance, preventing contract breaches with major clients.",
        tags: ["Looker", "Logistics", "SLA Tracking"],
        url: "#",
        caseStudyId: "otp-facilities-report"
    },
    {
        title: "Logistics Automation Pipeline",
        image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/automation_flow.mp4",
        description: "A one-click Google Apps Script pipeline that replaced a multi-day scheduling process with a sub-second, zero-error automation.",
        tags: ["Google Apps Script", "Logistics", "Automation"],
        url: "#",
        caseStudyId: "logistics-automation-pipeline"
    },
    {
        title: "Financial Data Integration Pipeline",
        image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/financial_data_pipe.mp4",
        description: "Automated Google Apps Script pipelines that consolidate sales data from multiple sources, ensuring 100% financial accuracy.",
        tags: ["Google Apps Script", "Finance", "Data Integration"],
        url: "#",
        caseStudyId: "financial-data-integration"
    },
    {
        title: "Automated Dispatch System",
        image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/dispatch_system.mp4",
        description: "A custom dispatch system built with Google Sheets & Apps Script that reduced documentation errors by 75% and boosted on-time delivery by 20%.",
        tags: ["Google Sheets", "Apps Script", "Logistics"],
        url: "#",
        caseStudyId: "dispatch-automation-expack"
    },
    {
        title: "Client Intake Automation Form",
        image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/automation_flow.mp4",
        description: "An automated workflow using Google Forms and Apps Script to streamline the client onboarding process, from data collection to project setup.",
        tags: ["Automation", "Process Optimization", "Apps Script"],
        url: "#",
        caseStudyId: "client-intake-automation"
    }
];
