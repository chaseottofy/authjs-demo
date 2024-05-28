import * as React from 'react';

import styles from './MobileMenu.module.css';

import NavLink from '../Nav/NavLink';

import { NAV } from '@/data/constants';
const { githubRoute, homeRoute } = NAV;

export default function MobileMenu() {
  return (
  <div 
      className={styles.container}
    >
      <ul>
        <li>
          <NavLink props={homeRoute} className={`${styles['nav-link']} link-1`} />
        </li>
        <li>
          <NavLink props={homeRoute} className={`${styles['nav-link']} link-1`} />
        </li>
      </ul>
    </div>
  );
}
