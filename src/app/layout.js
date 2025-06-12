
import { Geist, Geist_Mono } from 'next/font/google';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-day-picker/style.css';
import ClientLayoutWrapper from './ClientLayoutWrapper';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Fly Cham',
  description: 'fly cham Choose Excellence',
  icons: {
    icon: '/tabicon.svg',
  },
};

// const SUPPORTED_LOCALES = ['en', 'ar'];

export default function RootLayout({ children }) {
  return (
    <html dir="ltr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster richColors />
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  )
}

// export function generateStaticParams() {
//   return SUPPORTED_LOCALES.map((locale) => ({ locale }));
// }
