import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const MenuPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bigfoot War - Main Menu</title>
        <meta name="description" content="Main menu for Bigfoot War" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Bigfoot War - Main Menu</h1>
        
        {/* Player Profile */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Player Profile</h2>
          {/* Add player profile components here */}
        </section>

        {/* Bigfoot Selection */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Bigfoot Selection</h2>
          {/* Add Bigfoot selection component here */}
        </section>

        {/* Match Selection */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Match Selection</h2>
          {/* Add match selection component here */}
        </section>

        {/* Navigation Buttons */}
        <nav className="flex flex-col space-y-4">
          <Link href="/match-log" className="btn btn-primary">Match Log</Link>
          <Link href="/shop" className="btn btn-primary">Shop</Link>
          <Link href="/settings" className="btn btn-primary">Game Settings</Link>
          <button className="btn btn-secondary">Logout</button>
        </nav>
      </main>
    </>
  );
};

export default MenuPage;
