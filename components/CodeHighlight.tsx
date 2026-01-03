import React from 'react';

interface CodeHighlightProps {
    code: string;
}

const CodeHighlight: React.FC<CodeHighlightProps> = ({ code }) => {
    const keywords = ['function', 'const', 'let', 'var', 'return', 'if', 'else', 'forEach', 'new'];
    const globals = ['SpreadsheetApp', 'MailApp', 'Date'];

    const highlight = (text: string) => {
        // Simple regex to find keywords, strings, comments, and globals
        const parts = text.split(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"[^"]*"|'[^']*'|\b(?:function|const|let|var|return|if|else|forEach|new|SpreadsheetApp|MailApp|Date)\b|[(){}[\];,.=+\-/*])/);
        
        return parts.map((part, i) => {
            if (part.startsWith('//') || part.startsWith('/*')) {
                return <span key={i} className="text-gray-500">{part}</span>;
            }
            if (part.startsWith('"') || part.startsWith("'")) {
                return <span key={i} className="text-brand-cta">{part}</span>;
            }
            if (keywords.includes(part)) {
                return <span key={i} className="text-brand-chaos font-bold">{part}</span>;
            }
            if (globals.includes(part)) {
                return <span key={i} className="text-brand-accent">{part}</span>;
            }
             if (/[(){}[\];,.=+\-/*]/.test(part)) {
                return <span key={i} className="text-brand-text-secondary">{part}</span>;
            }
            return part;
        });
    };

    return (
        <pre className="bg-brand-bg p-4 rounded-lg overflow-x-auto text-left border border-brand-border">
            <code className="font-roboto-mono text-sm text-brand-text-primary whitespace-pre">
                {highlight(code)}
            </code>
        </pre>
    );
};

export default CodeHighlight;
