import '../styles/reset.css';
import '../styles/globals.css';
import clsx from 'clsx';
import { NotoSans } from './fonts';
import Navigation from '@/components/navigation';

export const metadata = {
  title: {
    template: '%s | Travler',
    default: 'Travler',
  },
  description: '2024 기창캡 Travler',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="flex flex-col w-screen bg-[#fff]">
      <body
        className={clsx(
          [NotoSans.className],
          ['min-h-screen w-full'],
          ['shadow-xl'],
          ['bg-[#FFFFFF]'],
          ['text-black'],
        )}
      >
        <div className="flex flex-col items-center justify-center p-4">{children}</div>
        <Navigation />
      </body>
    </html>
  );
}
