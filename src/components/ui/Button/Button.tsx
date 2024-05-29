import * as React from 'react';

export type LoginResponse = {
  error?: string;
};
// Promise<LoginResponse>
export type ButtonBaseProps = {
  disabled?: boolean;
  title?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  ariaLabel?: string;
  ariaPressed?: boolean;
  ariaExpanded?: boolean;
  ariaControls?: string;
  ariaDescribedBy?: string;
  ariaHaspopup?: boolean;
  hidden?: boolean;
  role?: string;
  tabIndex?: number;
  id?: string;
  autoFocus?: boolean;
  form?: string;
  formTarget?: string;
  name?: string;
  value?: string | string[] | number;
};

export type ButtonProps = ButtonBaseProps & {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'icon-text';
  size?: 'small' | 'medium' | 'large';
};
/*
.btn-1,
.btn-2,
.btn-3,
.btn-4,
.btn-primary1,
.btn-icon1
*/
export default function Button({
  disabled = false,
  title = 'Button',
  className = 'btn-1',
  type = 'button',
  hidden = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      title={title}
      className={className}
      type={type}
      hidden={hidden}
      {...rest}
    >
      {children}
    </button>
  );
}
