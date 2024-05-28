import * as React from 'react';

import styles from './Main.module.css';

function Main({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.main}>
      <div className={styles['content-wrapper']}>
        {children}
      </div>
    </main>
  );
}

export default Main;
