import SkipNav from '@/components/SkipNav';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import '@fortawesome/fontawesome-svg-core/styles.css';
import './global-styles.css';
import { Inter } from 'next/font/google';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Paul C Crescini | Front-end Web Developer',
  description:
    'Front-end web developer offering 10+ years of experience working with a diverse range of clients and collaborating with cross-functional teams to develop and maintain web applications, mobile apps, and responsive websites.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SkipNav />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
