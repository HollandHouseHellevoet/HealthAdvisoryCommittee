import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CMS Healthcare Advisory Committee | HAC Intelligence | The Rojas Report',
  description: 'Open-source intelligence on all 18 members of the CMS Healthcare Advisory Committee. Zero members with stated interest in expanding physician ownership.',
  metadataBase: new URL('https://hac.rojasreport.com'),
  openGraph: {
    title: 'CMS Healthcare Advisory Committee | HAC Intelligence | The Rojas Report',
    description: '18 members selected from 400+ nominations. Zero with stated interest in expanding physician ownership.',
    url: 'https://hac.rojasreport.com',
    siteName: 'HAC Intelligence — The Rojas Report',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CMS Healthcare Advisory Committee | HAC Intelligence',
    description: '18 members selected from 400+ nominations. Zero with stated interest in expanding physician ownership.',
  },
  alternates: {
    canonical: 'https://hac.rojasreport.com',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large' as const,
    'max-video-preview': -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
