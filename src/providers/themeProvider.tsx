'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';

function NextThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      themes={['dark', 'light']}
      storageKey='ot-theme'
      disableTransitionOnChange
      enableColorScheme
      enableSystem
      defaultTheme='dark'
    >
      {children}
    </ThemeProvider>
  );
}

export default NextThemeProvider;
