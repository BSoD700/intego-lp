import { option } from '@/interfaces/options.interface';
import React, { FC, useRef, useState } from 'react';
import './select.scss';

interface SelectProps {
    options: option[];
    handleSelect: any;
}

const Select: FC<SelectProps> = ({ options, handleSelect }) => {
    const [selected, setSelected] = useState<string>(options[0].value);

    const selectRef = useRef<HTMLSelectElement>(null);

    const handleChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        console.log(event.target.value);
        setSelected(event.target.value);
        handleSelect(event.target.value);
    };
    return (
        <div className="select-wrapper">
            <select value={selected} onChange={handleChange} ref={selectRef}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.lable}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
