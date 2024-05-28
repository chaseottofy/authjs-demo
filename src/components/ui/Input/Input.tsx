import * as React from 'react';

import styles from './Input.module.css';

export interface RestInputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  'aria-labelledby'?: string;
  'data-has-error'?: boolean;
  'data-has-warning'?: boolean;
  'data-reveal'?: boolean;
}

export interface BaseInputProps extends RestInputProps {
  type: 'text' | 'password' | 'email' | 'tel' | 'search' | 'url';
  required: boolean;
  id: string;
  disabled: boolean;
  name: string;
  value: string;
  className?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  checked?: boolean;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
}

export default function Input({
  type,
  required,
  id,
  disabled,
  name,
  className = styles.input,
  value,
  ...rest
}: BaseInputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      disabled={disabled}
      className={className}
      value={value}
      {...rest}
    />
  );
}
