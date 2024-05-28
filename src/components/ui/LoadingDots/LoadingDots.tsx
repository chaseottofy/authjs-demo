import * as React from 'react';

import styles from './LoadingDots.module.css';

function LoadingDots({ text }: { text: string; }) {
  return (
    <div className={styles['dots-wrapper']}>
      <span className={styles.dots}>
        <span className={styles.text}>{text}</span>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </span>
    </div>
  );
}

export default LoadingDots;
