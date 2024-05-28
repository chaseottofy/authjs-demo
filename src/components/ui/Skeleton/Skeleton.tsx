import * as React from 'react';

import styles from './Skeleton.module.css';

export default function Skeleton({
  height = 'auto',
  width = 'auto',
  className = '',
  transparent = false,
  borderRadius = 6,
}: {
  height?: 'auto' | number,
  width?: 'auto' | number,
  className?: string,
  transparent?: boolean,
  borderRadius?: number;
}) {
  return (
    <div
      className={`${styles['custom-skeleton']} ${className}`}
      data-is-transparent={transparent}
      style={{
        height: height === 'auto' ? 'auto' : `${height}px`,
        width: width === 'auto' ? 'auto' : `${width}px`,
        borderRadius: borderRadius === 50 ? '50%' : `${borderRadius}px`,
      }}
    />
  );
}
