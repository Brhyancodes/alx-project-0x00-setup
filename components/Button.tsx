// components/Button.tsx
import React from 'react';

interface ButtonProps {
    title: string;
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
    // Define size and shape classes
    const sizeClasses = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    const shapeClasses = {
        'rounded-sm': 'rounded-sm',
        'rounded-md': 'rounded-md',
        'rounded-full': 'rounded-full',
    };

    return (
        <button
            className={`bg-blue-500 text-white ${sizeClasses[size]} ${shapeClasses[shape]} hover:bg-blue-600`}
        >
            {title}
        </button>
    );
};

export default Button;