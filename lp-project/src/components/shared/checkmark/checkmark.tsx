import React, { FC } from 'react';
import './checkmark.scss';

interface CheckmarkProps {
    color: string;
}

const Checkmark: FC<CheckmarkProps> = ({ color }) => (
    <svg
        className="Checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill={color}
    >
        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
);

export default Checkmark;
