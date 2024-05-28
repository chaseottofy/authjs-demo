import { RouteRecordItem } from '@/models/interfaces';

export const ROUTE_RECORDS: RouteRecordItem = {
  dashboardRoute: { name: 'Dashboard', href: '/dashboard', target: '_self' },
  notesRoute: { name: 'Notes', href: '/notes', target: '_self' },
  homeRoute: { name: 'Home', href: '/', target: '_self' },
  githubRoute: { name: 'GitHub', href: 'https://github.com/chaseottofy', target: '_blank' },
};

export const THEMES = ['light', 'dark', 'system'];

export const MAX_TIMEOUT = 3_000;

export const MAX_RETRIES = 3;

export const MIN_PASSWORD_LENGTH = 6;

export const MAX_INPUT_LENGTHS: Record<string, number> = {
  email: 65,
  password: 20,
  username: 15,
  search: 30,
  tel: 15,
  url: 100,
}

export const INVALID_CHARS: Record<string, string> = {
  ' ': 'space',
  '\'': 'single quote',
  '"': 'double quote',
  '\\': 'backslash',
  '/': 'forward slash',
  '\0': 'null',
  '\b': 'backspace',
  '\t': 'tab',
  '\n': 'newline',
  '\r': 'carriage return',
  '\f': 'form feed',
};

