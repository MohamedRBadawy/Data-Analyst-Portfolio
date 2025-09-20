import React from "react";
import { SearchIcon, PencilIcon, CodeIcon, RocketIcon, CheckIcon } from "../constants";

export const aboutData = {
    name: "Mohamed Badawy",
    image: "https://image2url.com/images/1758221769743-5b66317f-6fb7-422d-bba8-5f3c33293e3a.png",
    summary: "I'm a data analyst who loves turning messy spreadsheets and manual workflows into simple, automated systems that make sense. My goal is always the same: to save teams time, reduce frustration, and provide them with the tools they need to make smarter, faster decisions. With a strong foundation in logistics and manufacturing, I know firsthand how painful inefficient processes can be. That’s why I specialize in building BI dashboards, automating Google Sheets with Apps Script, and designing workflow solutions that help teams work smoothly and focus on what matters.",
    servicesList: [
        "BI dashboards (Google Sheets, Looker Studio, Power BI, Tableau)",
        "Google Sheets automation with Apps Script",
        "Workflow optimization & process automation",
        "SQL/Python data integrations",
        "KPI design & performance tracking",
        "Data visualization and reporting systems",
        "Operations-focused analytics (logistics, e-commerce, manufacturing)"
    ],
    callToAction: "Are you spending hours preparing reports manually? Do you wish your team had one clean dashboard instead of chasing scattered spreadsheets? Would you like to save time and focus more on decisions rather than data clean-up?"
};

export const problems = [
    {
        problem: "Scattered Data",
        problemDesc: "Information is spread across disconnected spreadsheets and apps, making reporting a nightmare.",
        solution: "Centralized Dashboard",
        solutionDesc: "I build a single source of truth that consolidates all your KPIs for real-time decision making."
    },
    {
        problem: "Inefficient Workflows",
        problemDesc: "Manual, repetitive tasks are eating up valuable employee time and causing costly errors.",
        solution: "Automated Processes",
        solutionDesc: "I help by automating key tasks to free up your team, reduce errors, and speed up operations."
    },
    {
        problem: "Unclear ROI",
        problemDesc: "You're spending on marketing and operations but can't pinpoint what's actually working.",
        solution: "Performance Tracking",
        solutionDesc: "I provide clear, measurable metrics to track the impact of every initiative and optimize for success."
    }
];

export interface CaseStudy {
    title: string;
    client: string;
    problem: string;
    solution: string;
    impact: string;
    story: string;
    process: { title: string; description: string }[];
    achievements: string[];
    technologies: string[];
    deliverables: string[];
    before: number;
    after: number;
    metric: string;
}

export const caseStudies: CaseStudy[] = [
    {
        title: "Logistics Co. Delivery Optimization",
        client: "Expack Shipping (Internal Project)",
        problem: "High fuel costs and delayed deliveries due to inefficient, manual dispatching.",
        solution: "Deployed a custom, automated dispatch and tracking system using Google Sheets.",
        impact: "Cut average delivery times by 37% and significantly reduced manual data work.",
        story: "As the founder of Expack Shipping, I experienced firsthand the chaos of manual logistics. Our dispatch team was juggling phone calls, text messages, and multiple spreadsheets to coordinate deliveries. This led to inefficient routes, wasted fuel, and frequent delays that impacted customer satisfaction. We lacked a centralized view of our operations, making it impossible to proactively address issues.",
        process: [
            { title: "Workflow Analysis", description: "I mapped out the entire dispatch-to-delivery process, identifying key bottlenecks, especially in route planning and communication." },
            { title: "System Prototyping", description: "Using Google Sheets, I built a prototype of a centralized dashboard that could track drivers, orders, and delivery statuses in one place." },
            { title: "Automation with Apps Script", description: "I wrote custom Google Apps Script to automate job assignments, send status update notifications to clients, and generate daily performance reports." },
            { title: "Team Training & Rollout", description: "I personally trained the dispatch team on the new system, ensuring a smooth transition and gathering feedback for iterative improvements." }
        ],
        achievements: [
            "Reduced average delivery time from 120 minutes to 75 minutes.",
            "Eliminated over 10 hours of manual reporting per week.",
            "Improved on-time delivery rate from 85% to 98% within three months.",
            "Provided a single source of truth for all dispatch operations."
        ],
        technologies: ["Google Sheets", "Google Apps Script", "Data Analysis"],
        deliverables: [
            "Built a custom dispatch & tracking system in Google Sheets.",
            "Wrote Google Apps Script to automate reporting and notifications.",
            "Designed dashboards to monitor on-time delivery rates.",
            "Trained the dispatch team on the new, streamlined workflow."
        ],
        before: 120,
        after: 75,
        metric: "Average Delivery Time (Minutes)"
    },
    {
        title: "Manufacturing Production Tracking",
        client: "K Line Europe (Manufacturing Division)",
        problem: "No real-time visibility into production, causing delays and inventory waste.",
        solution: "Developed operational Looker dashboards to monitor key production metrics.",
        impact: "Reduced stockout incidents by 80% and improved cross-team coordination.",
        story: "The manufacturing division was flying blind. Production updates were shared in daily email summaries, which were often outdated by the time they reached the logistics team. This disconnect meant we couldn't anticipate inventory needs, leading to costly stockouts of critical parts and overstocking of others. Decisions were based on gut feelings rather than real-time data.",
        process: [
            { title: "Data Source Integration", description: "I worked with the IT team to connect multiple data sources—from production line sensors to inventory management software—into Looker." },
            { title: "KPI Definition", description: "I collaborated with department heads to define the most critical KPIs for monitoring production health, such as cycle time, defect rate, and machine uptime." },
            { title: "Dashboard Development", description: "I designed and built a suite of Looker dashboards tailored to different user levels, from high-level executive overviews to granular, real-time views for line managers." },
            { title: "Insight Generation", description: "By analyzing the dashboard data, I identified a recurring bottleneck in the QA stage and recommended a workflow change that smoothed out the entire production cycle." }
        ],
        achievements: [
            "Decreased weekly stockout incidents from 50 to just 10.",
            "Provided the first-ever real-time, end-to-end view of the production process.",
            "Enabled proactive inventory management, reducing waste by 12%.",
            "Improved coordination between manufacturing and logistics teams, reducing fulfillment delays."
        ],
        technologies: ["Looker", "BI Dashboards", "Process Optimization"],
        deliverables: [
            "Connected multiple production data sources to Looker.",
            "Designed and built dashboards for tracking order-to-fulfillment KPIs.",
            "Identified key bottlenecks by analyzing the production cycle.",
            "Provided actionable insights that led to workflow adjustments."
        ],
        before: 50,
        after: 10,
        metric: "Weekly Stockout Incidents"
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

export const milestones = [
    { year: 2010, title: "Graduated Cairo University", description: "Earned a Bachelor of Commerce in Accounting, which gave me a strong foundation in financial processes and business logic.", position: '10%' },
    { year: 2017, title: "Joined Talabat", description: "As a Partner Support Specialist, I honed my technical assistance and problem-solving skills, training partners on the platform.", position: '35%' },
    { year: 2018, title: "Founded Expack Shipping", description: "As founder, I led operations and helped the team by building the custom dispatch and tracking systems that drove our efficiency.", position: '60%' },
    { year: 2023, title: "Data Analyst at K Line Europe", description: "Here I focus on operations and automation, where I build impactful tools with Google Sheets, Apps Script, and Looker.", position: '90%' },
];

export const testimonials = [
    {
        name: "Ahmed Hassan",
        title: "Client, Expack Shipping",
        quote: "Working with Mohamed's company was a breeze. The custom tracking system he built gave us full transparency and reliability for our shipments. A true professional.",
        image: "https://picsum.photos/seed/ahmedh/100/100",
        roi: "99% On-time Delivery"
    },
    {
        name: "John S.",
        title: "Operations Manager, Manufacturing Plant",
        quote: "The Looker dashboards Mohamed developed gave us the first real-time view of our production line we've ever had. We can now spot bottlenecks before they become problems.",
        image: "https://picsum.photos/seed/johns/100/100",
        roi: "15% Faster Fulfillment"
    },
    {
        name: "Fatima A.",
        title: "Partner Coordinator, Talabat",
        quote: "His ability to understand complex systems and provide clear, actionable support was invaluable. He was the go-to person for solving escalated partner issues.",
        image: "https://picsum.photos/seed/fatimaa/100/100",
        roi: "+10 Hours/Week Saved"
    }
];


export const blogPosts = [
    {
        title: "5 Signs Your Business is Drowning in Data Chaos",
        date: "2024-07-15",
        excerpt: "Are you constantly battling messy spreadsheets and inaccurate reports? You might be stuck in data chaos. Here's how to tell...",
        tags: ["Strategy", "Data Management"],
        image: "https://picsum.photos/seed/blog1/400/300"
    },
    {
        title: "From Manual to Automated: A Small Business Success Story",
        date: "2024-07-02",
        excerpt: "See how a local manufacturing company saved 20 hours per week by automating their most tedious workflow.",
        tags: ["Automation", "Case Study"],
        image: "https://picsum.photos/seed/blog2/400/300"
    },
    {
        title: "The One KPI You're Probably Not Tracking (But Should Be)",
        date: "2024-06-21",
        excerpt: "Beyond revenue and profit, this single metric can unlock a new level of understanding about your operational efficiency.",
        tags: ["Analytics", "Strategy"],
        image: "https://picsum.photos/seed/blog3/400/300"
    },
    {
        title: "Choosing the Right Dashboard Tool for Your Team",
        date: "2024-06-10",
        excerpt: "A look at the pros and cons of popular BI tools and how to choose the one that fits your business needs and budget.",
        tags: ["Tools", "Analytics"],
        image: "https://picsum.photos/seed/blog4/400/300"
    }
];

export const toolkitData = {
    dashboards: [
        {
            title: "Live Logistics Dashboard",
            image: "https://picsum.photos/seed/dash1/1200/800",
            description: "This real-time Looker dashboard was built for a national shipping company to track fleet performance. It visualizes on-time delivery rates, average transit times per region, and fuel efficiency. It replaced a dozen disconnected spreadsheets and gave the operations team a single source of truth to manage daily dispatches.",
            tags: ["Looker", "Logistics", "Real-Time"]
        },
        {
            title: "Manufacturing Production Overview",
            image: "https://picsum.photos/seed/dash2/1200/800",
            description: "A comprehensive Google Sheets dashboard created for a manufacturing plant. It uses Google Apps Script to pull data from multiple production line sensors, tracking output, defect rates, and machine downtime. This dashboard was instrumental in identifying a key bottleneck that was costing thousands per week in lost productivity.",
            tags: ["Google Sheets", "Apps Script", "Manufacturing"]
        },
        {
            title: "E-commerce Sales & Inventory",
            image: "https://picsum.photos/seed/dash3/1200/800",
            description: "A sales performance dashboard for an e-commerce client. It integrates with their Shopify store to provide insights on best-selling products, customer lifetime value, and marketing channel ROI. It also includes predictive inventory alerts to prevent stockouts during peak seasons.",
            tags: ["Looker", "E-commerce", "Sales Analytics"]
        },
    ],
    process: [
        {
            step: 1,
            icon: React.createElement(SearchIcon, { className: "w-8 h-8" }),
            title: "Discovery & Audit",
            description: "We start by diving deep into your existing workflows. I'll analyze your current spreadsheets, processes, and pain points to understand the full scope of the challenge and identify the most impactful opportunities for improvement."
        },
        {
            step: 2,
            icon: React.createElement(PencilIcon, { className: "w-8 h-8" }),
            title: "Design & Strategy",
            description: "Next, I'll design a custom solution. This includes creating mockups of the proposed dashboard, outlining the automation logic, and defining the key metrics (KPIs) that will measure success. We'll collaborate closely to ensure the plan aligns perfectly with your business goals."
        },
        {
            step: 3,
            icon: React.createElement(CodeIcon, { className: "w-8 h-8" }),
            title: "Development & Automation",
            description: "This is where the magic happens. I'll build the dashboard using tools like Looker or Google Sheets, and write custom Google Apps Script code to automate manual tasks, integrate data sources, and bring the strategic vision to life."
        },
        {
            step: 4,
            icon: React.createElement(RocketIcon, { className: "w-8 h-8" }),
            title: "Deployment & Training",
            description: "Once the solution is built and tested, I'll deploy it for your team. This includes providing comprehensive training and documentation to ensure everyone is comfortable and confident using the new tools to drive data-driven decisions."
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