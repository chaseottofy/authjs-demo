import * as React from 'react';

import styles from './MobileMenu.module.css';

import NavLink from '../Nav/NavLink';

import { ROUTE_RECORDS } from '@/data/constants';
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
        {[homeRoute, notesRoute, dashboardRoute].map((route, i) => {
          return (
            <li className={styles['nav-item']} key={route.name + i}>
              <NavLink props={route} className={`${styles['nav-link']} link-1`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
