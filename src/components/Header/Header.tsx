'use client';

import * as React from 'react';
import { useState } from 'react';

import { NAV } from '@/data/constants';

import Modal from '../Modal/Modal';
import Icons from '../Icons/Icons';
import styles from './Header.module.css';
import ThemeButton from '../ThemeButton/ThemeButton';
import NavLink from '../Nav/NavLink';

const { Logo, GithubIcon, Menu } = Icons;
const { githubRoute, homeRoute } = NAV;

export default function Header() {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const openLogIn = () => setShowLogIn(true);
  const closeLogIn = () => setShowLogIn(false);
  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.col1}>
          <NavLink props={homeRoute} className={styles.logo}>
            <Logo className={`${styles['logo-svg']} svg-1`} />
          </NavLink>
        </div>

        <div className={styles.col2}>
          <nav className={styles.nav}>
            <ul className={styles['nav-list']}>
              <li className={styles['nav-item']}>
                <NavLink props={homeRoute} className={`${styles['nav-link']} link-1`} />
              </li>
              <li className={`${styles['nav-item']}`}>
                <NavLink props={homeRoute} className={`${styles['nav-link']} link-1`} />
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.col3}>
          <button
            className={`${styles['log-in--btn']} btn-primary2`}
            // disabled={show}
            type='button'
            onClick={openLogIn}
          >
            Log in
          </button>
          <Modal
            isOpen={showLogIn}
            onClose={closeLogIn}
            title='Log In'
          >
            <p>This is the content of the modal.</p>
          </Modal>

          <NavLink props={githubRoute} className={`${styles['github-btn--header']} btn-icon1`}>
            <GithubIcon className='svg-4' />
          </NavLink>

          <ThemeButton
            className={`${styles['theme-btn--header']}`}
          />

          <button
            className={`${styles['menu-btn--header']} btn-icon1`}
            type='button'
            onClick={openMenu}
          >
            <Menu className='svg-2' />
          </button>

          <Modal
            isOpen={showMenu}
            onClose={closeMenu}
            title='Menu'
          >
            <ul>
              <li>
                <NavLink props={homeRoute} className={`${styles['nav-link']} link-1`} />
              </li>
              <li>
                <NavLink props={homeRoute} className={`${styles['nav-link']} link-1`} />
              </li>
            </ul>
          </Modal>
        </div>
      </div>
    </header>
  );
}
