import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Schiffman Oral Surgery | Top Long Island Oral Surgeon',
  description: 'Board Certified Oral Surgeons in Woodmere NY. Wisdom teeth removal, dental implants, and full scope oral surgery.',
  keywords: ['oral surgeon', 'wisdom teeth', 'dental implants', 'Long Island'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
