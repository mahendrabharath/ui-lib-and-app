import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

// Define the props for the Button component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  outlined?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  rounded = false,
  outlined = false,
  children,
  ...rest
}) => {
  const classNames = [
    'ui-button',
    `ui-button-${variant}`,
    `ui-button-${size}`,
    fullWidth ? 'ui-button-full-width' : '',
    rounded ? 'ui-button-rounded' : '',
    outlined ? `ui-button-outlined ui-button-outlined-${variant}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;