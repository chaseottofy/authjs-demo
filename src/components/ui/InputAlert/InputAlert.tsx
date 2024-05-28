import * as React from 'react';

import Icons from '../../Icons/Icons';

import styles from './InputAlert.module.css';

interface InputAlertProps {
  message: string;
  type: 'error' | 'warn' | 'hide';
}

export default function InputAlert({
  message,
  type,
}: InputAlertProps) {
  const { ErrorBadge, AlertBadge } = Icons;

  return (
    <p className={styles[`${type}`]}>
      <span className={styles[`${type}-icon`]}>
        {type === 'error'
          ? <ErrorBadge className={styles.errorBadge} />
          : <AlertBadge className={styles.alertBadge} />}
      </span>
      <span className={styles[`${type}-text`]}>{message}</span>
    </p>
  );
}
