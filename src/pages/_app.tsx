import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Press_Start_2P } from 'next/font/google';
import { SessionProvider } from "next-auth/react";
import { useEffect } from 'react';
import useAuthStore from '@/stores/authStore';

const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
});

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  useEffect(() => {
    if (session?.user) {
      useAuthStore.getState().login(session.user);
    }
  }, [session]);

  return (
    <SessionProvider session={session}>
      <main className={`${pixelFont.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}