import * as React from 'react';

import { ROUTE_RECORDS } from '@/data/constants';

import NavLink from '../Nav/NavLink';

import styles from './MobileMenu.module.css';

const {
  // githubRoute,
  homeRoute,
  notesRoute,
  dashboardRoute,
} = ROUTE_RECORDS;

export default function MobileMenu() {
  return (
    <div
      className={styles.container}
    >
      <ul className={styles['nav-list']}>
        {[homeRoute, notesRoute, dashboardRoute].map((route) => (
          <li className={styles['nav-item']} key={route.name}>
            <NavLink props={route} className={`${styles['nav-link']} link-1`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
