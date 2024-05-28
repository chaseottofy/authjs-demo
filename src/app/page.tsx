import * as React from 'react';
import type { Metadata } from 'next';

import Main from '@/components/Main/Main';
import * as shared from './meta';
export const metadata: Metadata = {
  title: 'next app',
  ...shared,
};

export default function Home() {
  return (
    <Main>
      main
    </Main>
  )
}
