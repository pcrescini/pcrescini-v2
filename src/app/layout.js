import React from 'react';
import { cookies } from 'next/headers';
import { Inter, Montserrat } from 'next/font/google';

import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  LIGHT_TOKENS,
  DARK_TOKENS,
} from '@/constants';

import RespectMotionPreferences from '@/components/RespectMotionPreferences';

import SkipNav from '@/components/SkipNav';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';

import './global-styles.css';

const mainFont = Inter({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});

const headerFont = Montserrat({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-header',
});

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({ children }) {
  const savedTheme = cookies().get('color-theme');
  const theme = savedTheme?.value || 'light';
  const themeColors = theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;

  return (
    <RespectMotionPreferences>
      <html
        lang="en"
        className={`${mainFont.variable} ${headerFont.variable}`}
        data-color-theme={theme}
        style={themeColors}
      >
        <body>
          <SkipNav />
          <Header theme={theme} />
          {children}
          <Footer />
          <ScrollToTop />
        </body>
      </html>
    </RespectMotionPreferences>
  );
}
