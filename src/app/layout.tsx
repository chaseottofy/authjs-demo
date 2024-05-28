import * as React from 'react';
import localFont from 'next/font/local';
import NextThemeProvider from '@/providers/themeProvider';
import ModalProvider from '@/providers/modalProvider';
import Gradient from '@/components/Gradient/Gradient';
import Header from '@/components/Header/Header';
import type { Metadata } from 'next';
import * as shared from './meta';

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

export const metadata: Metadata = {
  title: 'next app',
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  ...shared,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={Inter.variable} id='root'>
        <NextThemeProvider>
          <ModalProvider>
            <Header />
            <Gradient />
            {children}
          </ModalProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
