import * as React from 'react';

import Icon from '../../Icons/Icon';

import styles from './InputAlert.module.css';

interface InputAlertProps {
  message: string;
  type: 'error' | 'warn' | 'hide';
}

export default function InputAlert({
  message,
  type,
}: InputAlertProps) {
  return (
    <p className={styles[`${type}`]}>
      <span className={styles[`${type}-icon`]}>
        {type === 'error'
          ? <Icon title='ErrorBadge' className={styles.errorBadge} />
          : <Icon title='AlertBadge' className={styles.alertBadge} />}
      </span>
      <span className={styles[`${type}-text`]}>{message}</span>
    </p>
  );
}
