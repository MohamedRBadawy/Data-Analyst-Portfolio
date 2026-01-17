import React from 'react';

interface BreadcrumbItem {
    label: string;
    onClick?: () => void;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav className="text-sm mb-8 text-ops-text-secondary/70 font-roboto-mono" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 flex-wrap">
                {items.map((item, idx) => (
                    <React.Fragment key={idx}>
                        {idx > 0 && <span className="text-signal-info/50 mx-1">/</span>}
                        <li>
                            {item.onClick ? (
                                <button
                                    onClick={item.onClick}
                                    className="text-ops-text-secondary hover:text-signal-info transition-colors duration-300"
                                >
                                    {item.label}
                                </button>
                            ) : (
                                <span className="text-ops-text-primary font-medium">{item.label}</span>
                            )}
                        </li>
                    </React.Fragment>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
