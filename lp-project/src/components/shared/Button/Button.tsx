import React, { FC } from 'react';
import './Button.scss';


interface ButtonProps {
  text: string,
  link: string,
  theme?: string,
  icon?: string
}

const Button: FC<ButtonProps> = ({ text, link, theme, icon }) => (
  <a href={link} className='button-wrapper' data-theme={theme} data-testid="Button">
    {icon ? (
      <img src={icon} alt="icon" className='icon' />
    ) : null}
    {text}
  </a>
);

export default Button;
