import type {Metadata} from 'next';
import {inter} from '@/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: '电饱饱',
  description: 'dbb crm h5',
  icons: 'https://images.wosaimg.com/dbb/statics/common/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
