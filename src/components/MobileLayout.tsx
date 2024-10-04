import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface MobileLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-green-900 via-brown-800 to-green-700">
        <div className="absolute inset-0 bg-[url('/images/texture-overlay.png')] opacity-20"></div>
        <div className="relative z-10 flex-grow flex flex-col overflow-y-auto">
          <div className="container mx-auto px-4 py-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex-grow">
            {children}
          </div>
          
          <footer className="w-full text-center p-3 bg-stone-900/90 text-stone-300">
            <p className="font-pixel text-xs">© 2024 Bigfoot War. All rights reserved.</p>
            <Link href="/release-notes" className="text-amber-400 hover:text-amber-300 font-pixel text-xs transition-colors duration-200">
              Release Notes
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
};

export default MobileLayout;