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
                <div className="min-h-screen bg-[#02040A] text-[#00F5FF] font-mono flex flex-col items-center justify-center p-4 text-center">
                    <div className="border border-[#2255DD] p-8 rounded-lg bg-[rgba(17,34,63,0.5)] backdrop-blur-md max-w-lg w-full shadow-[0_0_20px_rgba(0,245,255,0.2)]">
                        <h1 className="text-4xl font-bold mb-4 text-[#FF00A9] animate-pulse">SYSTEM OFFLINE</h1>
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FF00A9] to-transparent mb-6 opacity-50"></div>
                        <p className="text-[#E6F1FF] mb-6">
                            A critical system anomaly has occurred. The dashboard interface failed to render.
                        </p>
                        <div className="bg-black/30 p-4 rounded text-left mb-6 overflow-auto max-h-32 border border-[#2255DD]/30">
                            <code className="text-red-400 text-xs">
                                Error: {this.state.error?.message || 'Unknown Error'}
                            </code>
                        </div>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-[#FFC700] text-[#02040A] font-bold py-3 px-8 rounded hover:scale-102 transition-transform"
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

