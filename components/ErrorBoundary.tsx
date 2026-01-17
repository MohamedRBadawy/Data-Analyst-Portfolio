import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-brand-bg text-brand-accent font-mono flex flex-col items-center justify-center p-4 text-center">
                    <div className="border border-brand-border p-8 rounded-lg bg-brand-surface backdrop-blur-md max-w-lg w-full shadow-[0_0_20px_rgba(0,245,255,0.2)]">
                        <h1 className="text-4xl font-bold mb-4 text-brand-chaos animate-pulse">SYSTEM OFFLINE</h1>
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-chaos to-transparent mb-6 opacity-50"></div>
                        <p className="text-brand-text-primary mb-6">
                            A critical system anomaly has occurred. The dashboard interface failed to render.
                        </p>
                        <div className="bg-brand-bg/30 p-4 rounded text-left mb-6 overflow-auto max-h-32 border border-brand-border/30">
                            <code className="text-red-400 text-xs">
                                Error: {this.state.error?.message || 'Unknown Error'}
                            </code>
                        </div>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-brand-cta text-brand-bg font-bold py-3 px-8 rounded hover:scale-102 transition-transform"
                        >
                            REBOOT SYSTEM
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

