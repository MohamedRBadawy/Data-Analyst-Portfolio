import React, { createContext, useState, useContext, ReactNode } from 'react';

interface InteractionContextType {
    isHovering: boolean;
    setIsHovering: (hovering: boolean) => void;
}

const InteractionContext = createContext<InteractionContextType | undefined>(undefined);

export const InteractionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <InteractionContext.Provider value={{ isHovering, setIsHovering }}>
            {children}
        </InteractionContext.Provider>
    );
};

export const useInteraction = () => {
    const context = useContext(InteractionContext);
    if (!context) {
        throw new Error('useInteraction must be used within an InteractionProvider');
    }
    return context;
};
