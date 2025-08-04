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
  title: "Pathan's Housewarming Ceremony - Pathan Family | गृह प्रवेश समारोह - पठान परिवार",
  description: 'Join us for a joyous housewarming ceremony. Pathan Family cordially invites you to celebrate our new home.',
  keywords: 'housewarming, ceremony, invitation, Pathan family, गृह प्रवेश, समारोह',
  openGraph: {
    title: "Pathan's Housewarming Ceremony",
    description: 'Join us for our new home celebration!',
    url: 'https://yourdomain.com',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dpc5d15ci/image/upload/v1754242960/house_m89hfy.jpg', 
        width: 1200,
        height: 630,
        alt: 'Pathan Family New House',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pathan's Housewarming Ceremony",
    description: 'Join us for our new home celebration!',
    images: ['https://res.cloudinary.com/dpc5d15ci/image/upload/v1754242960/house_m89hfy.jpg'],
  }
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