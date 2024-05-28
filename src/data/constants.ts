import { NavLinkProps } from '@/models/interfaces';

export const NAV: NavLinkProps = {
  accountRoute: { name: 'Account', href: '/', target: '_self' },
  dashboardRoute: { name: 'Dashboard', href: '/', target: '_self' },
  githubRoute: { name: 'GitHub', href: 'https://github.com/chaseottofy', target: '_blank' },
  homeRoute: { name: 'Home', href: '/', target: '_self' },
};

export const THEMES = ['light', 'dark', 'system'];
