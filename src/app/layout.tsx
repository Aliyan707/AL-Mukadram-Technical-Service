import type { Metadata } from 'next';
import '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'Al Mukadram - Premium Aluminium & Glass Solutions in Dubai',
  description: 'Leading provider of premium aluminium and glass solutions in Dubai. Specializing in windows, doors, curtain walls, and custom installations.',
  keywords: 'al mukadram, aluminium, glass, Dubai, windows, doors, curtain walls, frameless glass, shower enclosures',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
