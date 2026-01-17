import React from 'react';
import type { Page } from '../App';
import {
    ChartBarIcon,
    CodeIcon,
    PuzzleIcon,
    DatabaseIcon,
    TerminalIcon,
    SearchIcon,
    BriefcaseIcon,
    LayersIcon,
    ZapIcon,
    TrendingUpIcon,
    ShieldCheckIcon,
    GlobeIcon,
    PencilIcon,
    RocketIcon,
    CogIcon,
    CheckIcon,
    UserIcon
} from '../constants';

export interface Problem {
    title: string;
    description: string;
    icon: React.ElementType;
    targetPage: Page;
}

export const problems: Problem[] = [
    {
        title: "Drowning in Data, Starving for Wisdom",
        description: "You have spreadsheets, CRMs, and logs, but you still can't answer simple questions like \"Which product is causing the most defects?\" or \"Is our sales team actually efficient?\" without spending hours manually collating data.",
        icon: DatabaseIcon,
        targetPage: 'work'
    },
    {
        title: "The Manual Work Treadmill",
        description: "Your best people are stuck doing low-value work—copy-pasting data, formatting reports, and chasing updates—instead of the strategic work you hired them for. You know it's inefficient, but you don't have the time to fix it.",
        icon: PuzzleIcon,
        targetPage: 'services'
    },
    {
        title: "Systems That Don't Talk",
        description: "Your finance tool doesn't talk to your sales tool. Your inventory is in one place, your orders in another. You're paying for five different SaaS subscriptions, but you're still running the business on a fragile web of Excel sheets.",
        icon: TerminalIcon,
        targetPage: 'services'
    }
];

export interface Workflow {
    nodes: { id: string; cx: number; cy: number; label: string; isBottleneck: boolean }[];
    paths: { from: string; to: string; chaoticD: string; clarityD: string }[];
}

export interface Industry {
    name: string;
    chaos: string;
    clarity: string;
    workflow: Workflow;
    myApproach: { title: string; description: string; }[];
}

export const industriesData: Industry[] = [
    {
        name: "Logistics",
        chaos: "Delayed Shipments",
        clarity: "Optimized Routes",
        myApproach: [
            { title: 'Automated Dispatching', description: 'I build systems that automatically assign jobs to the most efficient driver and route, reducing manual work and delays.' },
            { title: 'Real-Time Tracking Dashboards', description: 'I create live dashboards that provide a complete overview of your fleet, enabling proactive problem-solving.' },
            { title: 'Performance Analytics', description: 'By analyzing delivery times and fuel usage, I identify trends to help you cut costs and improve service.' }
        ],
        workflow: {
            nodes: [
                { id: 'l1', cx: 50, cy: 100, label: 'Warehouse', isBottleneck: false },
                { id: 'l2', cx: 150, cy: 50, label: 'Stop A', isBottleneck: false },
                { id: 'l3', cx: 250, cy: 150, label: 'Stop B', isBottleneck: true },
                { id: 'l4', cx: 350, cy: 100, label: 'Stop C', isBottleneck: false },
            ],
            paths: [
                { from: 'l1', to: 'l2', chaoticD: 'M 50 100 C 100 120, 100 30, 150 50', clarityD: 'M 50 100 L 150 50' },
                { from: 'l1', to: 'l3', chaoticD: 'M 50 100 C 100 150, 200 100, 250 150', clarityD: 'M 50 100 L 250 150' }, // Inefficient direct
                { from: 'l2', to: 'l4', chaoticD: 'M 150 50 C 200 20, 300 80, 350 100', clarityD: 'M 150 50 L 350 100' },
                { from: 'l3', to: 'l4', chaoticD: 'M 250 150 C 300 180, 300 80, 350 100', clarityD: 'M 250 150 L 350 100' },
            ]
        }
    },
    {
        name: "Manufacturing",
        chaos: "Production Bottlenecks",
        clarity: "Streamlined Assembly",
        myApproach: [
            { title: 'Production Line Monitoring', description: 'I develop dashboards that track output at each stage of production, instantly highlighting bottlenecks.' },
            { title: 'Inventory Waste Analysis', description: 'By tracking material usage against output, I can pinpoint sources of waste and suggest process improvements.' },
            { title: 'Quality Control Reporting', description: 'I create systems to track defect rates and identify patterns, helping you improve product quality over time.' }
        ],
        workflow: {
            nodes: [
                { id: 'm1', cx: 40, cy: 100, label: 'Parts', isBottleneck: false },
                { id: 'm2', cx: 140, cy: 100, label: 'Assembly', isBottleneck: true },
                { id: 'm3', cx: 260, cy: 100, label: 'QA', isBottleneck: false },
                { id: 'm4', cx: 360, cy: 100, label: 'Packaging', isBottleneck: false },
            ],
            paths: [
                { from: 'm1', to: 'm2', chaoticD: 'M 40 100 L 140 100', clarityD: 'M 40 100 L 140 100' },
                { from: 'm2', to: 'm3', chaoticD: 'M 140 100 C 180 50, 220 150, 260 100', clarityD: 'M 140 100 L 260 100' },
                { from: 'm3', to: 'm4', chaoticD: 'M 260 100 L 360 100', clarityD: 'M 260 100 L 360 100' },
            ]
        }
    },
    {
        name: "E-commerce",
        chaos: "Inventory Errors",
        clarity: "Predictive Stocking",
        myApproach: [
            { title: 'Sales Velocity Tracking', description: 'I analyze historical sales data to forecast demand, helping you avoid stockouts and overstocking.' },
            { title: 'Inventory Management Automation', description: 'I can build automated alerts in Google Sheets that tell you exactly when to reorder specific products.' },
            { title: 'Customer Behavior Analysis', description: 'I help you understand what your customers buy and when, enabling you to create more effective marketing campaigns.' }
        ],
        workflow: {
            nodes: [
                { id: 'e1', cx: 50, cy: 50, label: 'Order', isBottleneck: false },
                { id: 'e2', cx: 200, cy: 50, label: 'Check Stock', isBottleneck: true },
                { id: 'e3', cx: 200, cy: 150, label: 'Re-Order', isBottleneck: false },
                { id: 'e4', cx: 350, cy: 50, label: 'Fulfill', isBottleneck: false },
            ],
            paths: [
                { from: 'e1', to: 'e2', chaoticD: 'M 50 50 L 200 50', clarityD: 'M 50 50 L 200 50' },
                { from: 'e2', to: 'e3', chaoticD: 'M 200 50 L 200 150', clarityD: 'M 200 50 L 200 150' },
                { from: 'e3', to: 'e2', chaoticD: 'M 200 150 C 150 100, 250 100, 200 50', clarityD: 'M 200 150 L 200 50' },
                { from: 'e2', to: 'e4', chaoticD: 'M 200 50 L 350 50', clarityD: 'M 200 50 L 350 50' },
            ]
        }
    },
    {
        name: "Food Delivery",
        chaos: "Late Orders",
        clarity: "Dynamic Dispatching",
        myApproach: [
            { title: 'Order Hotspot Analysis', description: 'I map order data to identify peak times and locations, helping you position drivers more effectively.' },
            { title: 'Prep Time vs. Travel Time', description: 'I analyze data to optimize the dispatching algorithm, ensuring a driver arrives just as the food is ready.' },
            { title: 'Driver Performance Dashboards', description: 'I build tools to track delivery times and customer ratings, helping you manage your team more effectively.' }
        ],
        workflow: {
            nodes: [
                { id: 'f1', cx: 50, cy: 100, label: 'Restaurant', isBottleneck: false },
                { id: 'f2', cx: 200, cy: 50, label: 'Driver A', isBottleneck: false },
                { id: 'f3', cx: 200, cy: 150, label: 'Driver B', isBottleneck: true },
                { id: 'f4', cx: 350, cy: 100, label: 'Customer', isBottleneck: false },
            ],
            paths: [
                { from: 'f1', to: 'f3', chaoticD: 'M 50 100 L 200 150', clarityD: 'M 50 100 L 200 50' },
                { from: 'f3', to: 'f4', chaoticD: 'M 200 150 C 250 180, 300 130, 350 100', clarityD: 'M 200 50 L 350 100' },
            ]
        }
    },
    {
        name: "Field Services",
        chaos: "Scheduling Conflicts",
        clarity: "Automated Work Orders",
        myApproach: [
            { title: 'Skill-Based Scheduling', description: 'I help create systems that match the right technician to the right job based on skills and location.' },
            { title: 'Automated Work Order Generation', description: 'I can automate the creation of work orders from customer requests, reducing administrative overhead.' },
            { title: 'Job Completion Analytics', description: 'By analyzing job durations and travel times, I provide insights to help you schedule more accurately and complete more jobs per day.' }
        ],
        workflow: {
            nodes: [
                { id: 's1', cx: 50, cy: 100, label: 'Request', isBottleneck: false },
                { id: 's2', cx: 175, cy: 100, label: 'Dispatch', isBottleneck: true },
                { id: 's3', cx: 300, cy: 50, label: 'Tech A', isBottleneck: false },
                { id: 's4', cx: 300, cy: 150, label: 'Tech B', isBottleneck: false },
            ],
            paths: [
                { from: 's1', to: 's2', chaoticD: 'M 50 100 L 175 100', clarityD: 'M 50 100 L 175 100' },
                { from: 's2', to: 's3', chaoticD: 'M 175 100 C 225 75, 250 125, 300 50', clarityD: 'M 175 100 L 300 50' },
                { from: 's2', to: 's4', chaoticD: 'M 175 100 C 225 125, 250 75, 300 150', clarityD: 'M 175 100 L 300 150' },
            ]
        }
    },
];

export const toolkitData = {
    dashboards: [
        {
            title: "Live Logistics Dashboard",
            image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/logistics_dashboard.mp4",
            description: "Resolved major production bottlenecks by building a live Looker dashboard for a national shipping company. This dashboard tracks fleet performance, on-time delivery rates, and fuel efficiency, replacing disconnected spreadsheets and giving the operations team a single source of truth to manage daily dispatches.",
            tags: ["Looker", "Logistics", "Real-Time"],
            caseStudyId: "otp-facilities-report"
        },
        {
            title: "Manufacturing Production Overview",
            image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/manufacturing_dashboard.mp4",
            description: "Saved thousands per week in lost productivity by creating a comprehensive Google Sheets dashboard for a manufacturing plant. It uses Google Apps Script to pull data from multiple production line sensors, tracking output, defect rates, and machine downtime. This was instrumental in identifying and resolving a critical bottleneck.",
            tags: ["Google Sheets", "Apps Script", "Manufacturing"],
            caseStudyId: "manufacturing-qc-dashboard"
        },
        {
            title: "E-commerce Sales & Inventory",
            image: "https://storage.googleapis.com/generative-ai-protoast-demos/portfolio/ecommerce_dashboard.mp4",
            description: "Prevented costly stockouts during peak seasons by developing a sales performance dashboard for an e-commerce client. It integrates with their Shopify store to provide insights on best-selling products and customer lifetime value, and includes predictive inventory alerts to ensure optimal stock levels.",
            tags: ["Looker", "E-commerce", "Sales Analytics"],
            caseStudyId: "team-performance-dashboard"
        },
    ],
    process: [
        {
            step: 1,
            icon: React.createElement(SearchIcon, { className: "w-8 h-8" }),
            title: "Discovery & ROI Definition",
            description: "We start by partnering with you to define what success looks like. I'll audit your existing workflows and data points to identify the highest-impact opportunities, ensuring we target a clear, measurable return on investment from day one."
        },
        {
            step: 2,
            icon: React.createElement(PencilIcon, { className: "w-8 h-8" }),
            title: "Blueprint & Strategy",
            description: "Next, I'll design a custom solution blueprint. This includes creating mockups of the proposed dashboard and outlining the automation logic. We'll collaborate closely to ensure the plan aligns perfectly with your business goals and can be managed by your team long-term."
        },
        {
            step: 3,
            icon: React.createElement(CodeIcon, { className: "w-8 h-8" }),
            title: "Development & Automation",
            description: "This is where the vision becomes a functional tool. I'll build the dashboard using tools like Looker or Google Sheets, and write custom Google Apps Script code to automate manual tasks, integrate data sources, and bring the strategic vision to life."
        },
        {
            step: 4,
            icon: React.createElement(RocketIcon, { className: "w-8 h-8" }),
            title: "Deployment & Team Autonomy",
            description: "I don't just hand over a tool; I guarantee your team's long-term success. This final step includes comprehensive training and documentation to ensure everyone is confident and capable of using the new systems to drive data-driven decisions independently."
        }
    ],
    codeProjects: [
        {
            title: "Automated Daily Email Reporter",
            description: "A Google Apps Script that automatically aggregates key metrics from a Google Sheet, formats them into a clean daily summary, and emails the report to stakeholders every morning.",
            code: `function sendDailyReport() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Daily KPIs');
  const data = sheet.getRange('A2:B5').getValues();
  
  let emailBody = '<h2>Daily Performance Summary</h2>';
  emailBody += '<table border="1" cellpadding="5">';
  data.forEach(function(row) {
    emailBody += '<tr><td>' + row[0] + '</td><td><b>' + row[1] + '</b></td></tr>';
  });
  emailBody += '</table>';
  
  const recipient = 'manager@example.com';
  const subject = 'Daily KPI Report for ' + new Date().toLocaleDateString();
  
  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    htmlBody: emailBody
  });
}`
        },
        {
            title: "Data Sync Between Sheets",
            description: "This script syncs data from a 'Master' Google Sheet to several 'Team' sheets, ensuring that team members only see the data relevant to them while the master list stays updated.",
            code: `function syncDataToTeamSheets() {
  const masterSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Master Data');
  const masterData = masterSheet.getDataRange().getValues();
  
  const teamSheets = ['Team A Sheet', 'Team B Sheet'];
  
  teamSheets.forEach(function(sheetName) {
    const teamSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    const teamName = sheetName.split(' ')[0]; // e.g., 'Team A'
    
    // Filter data for the specific team
    const teamData = masterData.filter(function(row) {
      return row[3] === teamName; // Assuming team name is in the 4th column
    });
    
    // Clear the team sheet and write the new data
    teamSheet.clearContents();
    teamSheet.getRange(1, 1, teamData.length, teamData[0].length).setValues(teamData);
  });
}`
        }
    ]
};

export interface ServiceItem {
    title: string;
    description: string;
    value: string;
    price: string;
    idealFor: string;
    bestFor: string;
    keyFeatures: string[];
    deliverables: string[];
    youAreAGreatFit: string[];
}

export interface ServiceCategory {
    category: string;
    description: string;
    icon: React.ReactElement;
    items: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
    {
        category: "BI & Reporting",
        description: "Transforming raw data into executive-level visual reports for real-time visibility.",
        icon: React.createElement(ChartBarIcon),
        items: [
            {
                title: "Executive Dashboard Package",
                description: "See your entire business on one screen. Stop building reports by hand. Get real-time visibility into sales, inventory, and operations - all in one place. Design and build up to three interconnected dashboards to visualize core metrics. Connects 1-3 data sources. Includes one round of revisions.",
                value: "You need a single source of truth to make quick decisions. You're tired of manually pulling data from multiple systems and wasting hours on reporting.",
                price: "$500 - $1,000",
                idealFor: "SMBs who are data-rich but insight-poor, and need a clear, actionable view of their operations without a large investment.",
                bestFor: "The Overwhelmed Ops Manager",
                keyFeatures: ["Up to 3 interconnected Looker Studio dashboards", "Connection to 1-3 core data sources", "Custom branding to match your company's look and feel", "Mobile-responsive design for on-the-go access"],
                deliverables: ["A secure, shareable Looker Studio report accessible via URL", "Clear documentation on data sources and metric definitions", "A 30-minute walkthrough and training session for your team"],
                youAreAGreatFit: [
                    "You're currently building reports by hand in spreadsheets.",
                    "Your key metrics are scattered across 2 or 3 different platforms.",
                    "You need a clear, high-level overview to share with leadership."
                ]
            },
            {
                title: "Multi-Team Analytics System",
                description: "Give every department the data they need without the chaos. Secure, segmented dashboards for sales, operations, and finance - each team sees only what they need. Full strategic design with custom data models, complex filtering, and user access control.",
                value: "You're growing past basic reporting. You need granular, secure data segmentation to manage multiple departments without losing performance.",
                price: "$1,200 - $2,500",
                idealFor: "Growing businesses with multiple teams or departments that need segmented, secure, and high-performance data access.",
                bestFor: "The Data-Driven Director",
                keyFeatures: ["Custom data modeling and blending", "Advanced filtering and user-level security", "Performance optimization for large datasets", "Integration of calculated fields for complex metrics"],
                deliverables: ["A fully scalable Looker Studio environment", "User access control setup and documentation", "A strategic data model diagram", "Advanced training for your power users"],
                youAreAGreatFit: [
                    "You need to provide different data views for sales, operations, and finance teams.",
                    "Your current dashboards are slow because you're working with very large datasets.",
                    "You need to blend data from multiple complex sources like a CRM and a production database."
                ]
            }
        ]
    },
    {
        category: "Automation & Efficiency",
        description: "Designing and deploying custom scripts and streamlined workflows to reduce manual labor.",
        icon: React.createElement(CogIcon),
        items: [
            {
                title: "Hands-Free Reporting",
                description: "Reports that write themselves while you sleep. Stop wasting 5+ hours a week on manual reports. Get daily, weekly, or monthly summaries delivered automatically. Custom automation pulls data, cleans it, and delivers formatted reports on schedule.",
                value: "Your team is spending too much time on repetitive, manual data entry or report generation. You need to free up staff for high-value tasks. This is direct cost savings.",
                price: "$300 - $700",
                idealFor: "Teams bogged down by daily, weekly, or monthly reporting tasks that can be standardized and automated.",
                bestFor: "The Time-Strapped Team Lead",
                keyFeatures: ["Scheduled, automated report generation", "Custom email notifications with key insights or alerts", "Data cleaning and formatting logic", "Error handling and logging"],
                deliverables: ["A fully functional Google Apps Script solution", "Source code and deployment instructions", "A clear guide on how to modify schedules and recipients"],
                youAreAGreatFit: [
                    "Your team spends more than 3 hours a week on a single, repetitive report.",
                    "You rely on a specific person to create a critical report, creating a key-person dependency.",
                    "You need timely alerts when a key metric goes above or below a certain threshold."
                ]
            },
            {
                title: "System Integration Pipeline",
                description: "Make your tools talk to each other automatically. Eliminate manual data transfer between your CRM, inventory, and accounting systems. Zero copy-paste, zero errors. Multi-step automation connects disparate systems and removes manual handover points.",
                value: "Your business processes rely on someone manually copying data between systems, leading to errors, lost orders, or payment delays. You need guaranteed process reliability.",
                price: "$700 - $1,500",
                idealFor: "Businesses where manual data transfer between systems (e.g., CRM to accounting, inventory to e-commerce) is a major bottleneck.",
                bestFor: "The Process Perfectionist",
                keyFeatures: ["Connection of 2+ cloud applications", "Multi-step logic with conditional paths", "Automated data transformation between systems", "Real-time or scheduled workflow triggers"],
                deliverables: ["A deployed n8n workflow", "A visual map of the automated process", "Complete documentation of the workflow logic and connected APIs"],
                youAreAGreatFit: [
                    "An employee's job involves copying and pasting data from one system to another.",
                    "Delays or errors occur when one team hands off information to the next team.",
                    "You want to trigger actions automatically, like sending a customer update when a shipping status changes."
                ]
            }
        ]
    },
    {
        category: "Strategy & Optimization",
        description: "Providing guidance on data strategy, tool selection, and building an internal data culture.",
        icon: React.createElement(RocketIcon),
        items: [
            {
                title: "Operational Clarity Audit",
                description: "Find and fix your biggest bottlenecks in one week. We map your current process, identify what's broken, and give you a clear roadmap to fix it. One-week deep audit with staff interviews, current-state mapping, and streamlined future-state workflow design.",
                value: "Your leadership knows they have operational bottlenecks but cannot define or fix them. You need an external expert to reduce operational friction and errors.",
                price: "$1,000 - $2,000",
                idealFor: "Organizations that feel their growth is being held back by internal inefficiencies but can't pinpoint the exact cause.",
                bestFor: "The Visionary Founder",
                keyFeatures: ["Stakeholder interviews and process observation", "Creation of detailed 'As-Is' and 'To-Be' process maps", "Identification of key friction points and their business impact", "A prioritized, actionable implementation roadmap"],
                deliverables: ["A comprehensive workflow audit report", "Visual process maps (current and proposed)", "A step-by-step implementation plan with recommended tools"],
                youAreAGreatFit: [
                    "You know things are inefficient but can't pinpoint the exact cause.",
                    "You're experiencing growth, and your current processes are starting to break.",
                    "You want to build a scalable foundation before a major expansion or new product launch."
                ]
            },
            {
                title: "Fractional Systems Architect",
                description: "On-demand expertise without full-time cost. 5-10 hours/month of strategic guidance for data governance, tool selection, and system maintenance. Your fractional data head for growing infrastructure without the full-time hire.",
                value: "You need an on-demand expert to manage your growing data infrastructure. You cannot yet afford a full-time senior analyst.",
                price: "$250 - $450/month",
                idealFor: "Businesses that have started their data journey but need ongoing expert guidance to ensure they're building a scalable and secure data infrastructure.",
                bestFor: "The Forward-Thinking CEO",
                keyFeatures: ["Monthly strategy calls and priority setting", "On-demand support for data-related questions", "Proactive maintenance of existing data tools", "Guidance on new tool selection and data governance"],
                deliverables: ["A set number of dedicated expert hours per month", "Monthly progress and recommendations report", "Access to a shared communication channel for on-demand support"],
                youAreAGreatFit: [
                    "You have data systems in place but no one to strategically manage them.",
                    "You're considering new software and need an unbiased expert opinion.",
                    "You want to build an internal data culture but need guidance on where to start."
                ]
            }
        ]
    }
];

export interface ComparisonFeature {
    feature: string;
    standardAnalytics: string | boolean;
    advancedLooker: string | boolean;
    automatedReporting: string | boolean;
    workflowIntegration: string | boolean;
    frictionAudit: string | boolean;
    dataStrategy: string | boolean;
}

export const serviceComparisonData: ComparisonFeature[] = [
    {
        feature: "Core Goal",
        standardAnalytics: "Visualize Data",
        advancedLooker: "Scale Visualizations",
        automatedReporting: "Eliminate Manual Tasks",
        workflowIntegration: "Connect Systems",
        frictionAudit: "Identify Bottlenecks",
        dataStrategy: "Ongoing Guidance"
    },
    {
        feature: "Primary Tool",
        standardAnalytics: "Looker Studio",
        advancedLooker: "Looker Studio",
        automatedReporting: "Google Apps Script",
        workflowIntegration: "n8n / Low-Code",
        frictionAudit: "Process Mapping",
        dataStrategy: "Advisory"
    },
    {
        feature: "Data Sources",
        standardAnalytics: "1-3",
        advancedLooker: "Multiple / Complex",
        automatedReporting: "1-2",
        workflowIntegration: "2+",
        frictionAudit: "N/A",
        dataStrategy: "N/A"
    },
    {
        feature: "Custom Automation",
        standardAnalytics: false,
        advancedLooker: false,
        automatedReporting: true,
        workflowIntegration: true,
        frictionAudit: false,
        dataStrategy: false
    },
    {
        feature: "Strategic Planning",
        standardAnalytics: false,
        advancedLooker: true,
        automatedReporting: false,
        workflowIntegration: false,
        frictionAudit: true,
        dataStrategy: true
    },
    {
        feature: "Typical Duration",
        standardAnalytics: "1-2 Weeks",
        advancedLooker: "2-4 Weeks",
        automatedReporting: "1 Week",
        workflowIntegration: "1-3 Weeks",
        frictionAudit: "1 Week",
        dataStrategy: "Monthly Retainer"
    }
];
