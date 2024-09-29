import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Press_Start_2P } from 'next/font/google';

const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${pixelFont.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
