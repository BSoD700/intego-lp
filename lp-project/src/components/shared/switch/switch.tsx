import React, { ChangeEventHandler, FC } from 'react';
import './switch.scss';

interface SwitchProps {
    isOn: boolean;
    handleToggle: ChangeEventHandler<HTMLInputElement>;
}

const Switch: FC<SwitchProps> = ({ isOn, handleToggle }) => (
    <>
        <input
            checked={isOn}
            onChange={handleToggle}
            className={`switch-checkbox ${isOn ? 'active' : ''}`}
            id={`switch`}
            type="checkbox"
        />
        <label
            className={`switch-label ${isOn ? 'active' : ''}`}
            htmlFor={`switch`}
        >
            <span className={`switch-button`} />
        </label>
    </>
);

export default Switch;
