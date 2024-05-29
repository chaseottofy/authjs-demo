'use client';

import * as React from 'react';
import { useState } from 'react';

import { ROUTE_RECORDS } from '@/data/constants';

import Icon from '../Icons/Icon';
import styles from './Header.module.css';
import LogInForm from '../LogInForm/LogInForm';
import ThemeButton from '../ThemeButton/ThemeButton';
import NavLink from '../Nav/NavLink';
import Button from '../ui/Button/Button';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useModal } from '@/hooks';

const {
  githubRoute,
  homeRoute,
  notesRoute,
  dashboardRoute,
} = ROUTE_RECORDS;

export default function Header() {
  const { showModal } = useModal();
  const [showLogIn, setShowLogIn] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleToggleLogIn = () => {
    setShowLogIn(!showLogIn);
    showModal((onClose) => (
      <LogInForm onClose={() => {
        setShowLogIn(false);
        if (onClose) onClose();
      }}
      />
    ));
  };
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
    showModal(() => <MobileMenu />);
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.col1}>
          <NavLink props={homeRoute} className={styles.logo}>
            <Icon title='Logo' className={`${styles['logo-svg']} svg-1`} />
          </NavLink>
        </div>

        <div className={styles.col2}>
          <nav className={styles.nav}>
            <ul className={styles['nav-list']}>
              {[homeRoute, notesRoute, dashboardRoute].map((route, i) => {
                return (
                  <li className={styles['nav-item']} key={route.name + i}>
                    <NavLink props={route} className={`${styles['nav-link']} link-1`} />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className={styles.col3}>
          <Button
            className={`${styles['log-in--btn']} btn-primary2`}
            onClick={handleToggleLogIn}
            title='Open Form'
            aria-haspopup={true}
            aria-expanded={showLogIn}
            id='log-in-btn'
          >
            Log in
          </Button>

          <NavLink props={githubRoute} className={`${styles['github-btn--header']} btn-icon1`}>
            <Icon title='GithubIcon' className='svg-4' />
          </NavLink>

          <ThemeButton
            className={`${styles['theme-btn--header']}`}
          />

          <Button
            className={`${styles['menu-btn--header']} btn-icon1`}
            type='button'
            onClick={handleToggleMenu}
            aria-haspopup={true}
            aria-expanded={showLogIn}
            id='log-in-btn'
            hidden={true}
          >
            <Icon title='Menu' className='svg-2' />
          </Button>
        </div>
      </div>
    </header>
  );
}
