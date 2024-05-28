'use client';

import React, { useEffect, useState } from 'react';

import styles from './Spinner.module.css';

const LoadingArray: number[] = Array.from({ length: 12 }, (_, i) => i);

const getSpinnerStyle = (i: number) => ({
  animationDelay: `-${i === 0 ? 1.2 : Number(1.2 - (i / 10)).toFixed(2)}s`,
  transform: i === 0
    ? 'rotate(.0001deg) translate(146%)'
    : `rotate(${i * 30}deg) translate(146%)`,
});

function Spinner({ timeoutVal }: { timeoutVal: number; }) {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    console.log('Spinner mounted');
    const timer = setTimeout(() => {
      setIsActive(false);
    }, timeoutVal);

    return () => clearTimeout(timer);
  }, [timeoutVal]);

  if (!isActive) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.cell}>
        {
          LoadingArray.map((_, i) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className={styles.spinner}
              style={getSpinnerStyle(i)}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Spinner;
