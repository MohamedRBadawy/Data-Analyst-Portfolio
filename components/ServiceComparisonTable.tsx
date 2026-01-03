import React from 'react';
import { serviceComparisonData } from '../data/content';
import { CheckIcon } from '../constants';

const ServiceComparisonTable: React.FC = () => {
    const headers = [
        { key: 'standardAnalytics', label: 'Standard Analytics' },
        { key: 'advancedLooker', label: 'Advanced Integration' },
        { key: 'automatedReporting', label: 'Automated Reporting' },
        { key: 'workflowIntegration', label: 'Workflow Integration' },
        { key: 'frictionAudit', label: 'Friction Audit' },
        { key: 'dataStrategy', label: 'Data Strategy Retainer' },
    ];

    const renderCellValue = (value: string | boolean) => {
        if (typeof value === 'boolean' && value) {
            return <CheckIcon className="w-6 h-6 text-brand-clarity mx-auto" />;
        }
        if (typeof value === 'boolean' && !value) {
            return <span className="text-brand-text-secondary/40">-</span>;
        }
        return <span className="text-sm text-brand-text-primary">{value}</span>;
    };

    return (
        <div className="overflow-x-auto holographic-panel p-[var(--space-lg)] rounded-xl">
            <table className="w-full text-xs md:text-sm border-collapse text-center">
                <thead>
                    <tr className="border-b border-brand-border">
                        <th className="p-[var(--space-md)] md:p-[var(--space-lg)] text-left font-poppins text-brand-text-primary">Feature</th>
                        {headers.map(header => (
                            <th key={header.key} className="p-[var(--space-md)] md:p-[var(--space-lg)] font-poppins text-brand-accent whitespace-nowrap">{header.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {serviceComparisonData.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-brand-border/50 last:border-b-0">
                            <td className="p-[var(--space-md)] md:p-[var(--space-lg)] text-left font-bold text-brand-text-primary">{row.feature}</td>
                            {headers.map(header => (
                                <td key={header.key} className="p-[var(--space-md)] md:p-[var(--space-lg)]">
                                    {renderCellValue(row[header.key as keyof typeof row])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ServiceComparisonTable;
