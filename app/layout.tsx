import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Prismflow — Fix Your User Onboarding',
  description: 'Prismflow is a B2B SaaS platform that optimizes digital onboarding flows, reducing drop-off rates and accelerating user activation.',
  keywords: ['onboarding', 'user activation', 'B2B SaaS', 'digital adoption', 'conversion optimization'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
