import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://imber.me'),
  title: 'Etienne Fourie — Projects & Ideas',
  description: 'Personal projects, ideas and work by Etienne Fourie across economics, technology, finance and civic technology.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Etienne Fourie — Projects & Ideas',
    description: 'Personal projects, ideas and work by Etienne Fourie across economics, technology, finance and civic technology.',
    url: 'https://imber.me', siteName: 'Etienne Fourie', type: 'website', locale: 'en_ZA',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
