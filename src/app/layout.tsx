import * as React from 'react';
import localFont from 'next/font/local';
import NextThemeProvider from '@/providers/themeProvider';
import Gradient from '@/components/Gradient/Gradient';
import Header from '@/components/Header/Header';

import '@/styles/root.css';
import '@/styles/sanitize.css';
import '@/styles/templates.css';

const Inter = localFont({
  src: '../assets/fonts/Inter.woff2',
  variable: '--inter',
  fallback: ['Adjusted Arial Fallback'],
  display: 'block',
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={Inter.variable} id='root'>
        <NextThemeProvider>
          <Header />
          <Gradient />
          {children}
        </NextThemeProvider>
      </body>

    </html>
  );
}
