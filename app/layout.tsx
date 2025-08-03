import './globals.css';
import type { Metadata } from 'next';
import { Inter, Amiri } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const amiri = Amiri({ 
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-amiri'
});

export const metadata: Metadata = {
  title: 'Housewarming Ceremony - Pathan Family | गृह प्रवेश समारोह - पठान परिवार',
  description: 'Join us for a joyous housewarming ceremony. Pathan Family cordially invites you to celebrate our new home.',
  keywords: 'housewarming, ceremony, invitation, Pathan family, गृह प्रवेश, समारोह',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${amiri.variable}`}>{children}</body>
    </html>
  );
}