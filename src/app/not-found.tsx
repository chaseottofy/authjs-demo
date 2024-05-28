import { Metadata } from 'next';
import Link from 'next/link';

import {
  authors, creator, icons, keywords,
} from './meta';

import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: '404',
  description: 'Page not found',
  keywords,
  creator,
  authors,
  icons,
};

export default function NotFound() {
  return (
    <div
      className={styles.wrapper}
      tabIndex={-1}
    >
      <div className={styles.container}>
        <h2>404</h2>
        <span className={styles.hr} />
        <Link href='/' className={styles.backlink}>Return Home</Link>
      </div>
    </div>
  );
}
