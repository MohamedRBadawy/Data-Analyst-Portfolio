
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import AppWrapper from './App';

import ErrorBoundary from './components/ErrorBoundary';

// Initialize theme on app load
const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
    } else {
        // Default to light mode
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
};

initializeTheme();

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <AppWrapper />
        </ErrorBoundary>
    </React.StrictMode>
);
