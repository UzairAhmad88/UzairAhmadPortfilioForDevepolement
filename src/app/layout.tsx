import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Uzair Ahmad — Software • AI • Quant',
  description: '3D interactive portfolio of Uzair Ahmad: software development, AI/ML/DL, quantitative finance, time series, research and technical documentation.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
