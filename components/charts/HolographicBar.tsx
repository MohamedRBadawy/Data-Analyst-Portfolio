
import React from 'react';
import { Rectangle } from 'recharts';

interface HolographicBarProps {
    fill: string;
    x: number;
    y: number;
    width: number;
    height: number;
    isHovered?: boolean;
    payload?: any;
    [key: string]: any;
}

const HolographicBar: React.FC<HolographicBarProps> = (props) => {
    const { fill, x, y, width, height, isHovered, payload } = props;
    const isBefore = asPayload(payload).name === 'Before';
    const color = asPayload(payload).color;

    const barStyle = {
        filter: isHovered ? `drop-shadow(0 0 8px ${color})` : 'none',
        transition: 'filter 0.3s ease-in-out',
    };

    if (isBefore) {
        return (
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                stroke={color}
                strokeWidth={2}
                fill="transparent"
                style={barStyle}
            />
        );
    }

    return (
        <Rectangle
            {...props}
            fill={color}
            style={barStyle}
        />
    );
};

// Helper to safely access payload properties
const asPayload = (payload: any): { name: string; color: string } => {
    return payload as { name: string; color: string };
};

export default HolographicBar;
