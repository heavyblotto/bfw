import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";

const MenuPage: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (!session) {
    router.push('/login');
    return null;
  }

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
          <p>Welcome, {session.user?.name}!</p>
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
          <Button asChild>
            <Link href="/match-log">Match Log</Link>
          </Button>
          <Button asChild>
            <Link href="/shop">Shop</Link>
          </Button>
          <Button asChild>
            <Link href="/settings">Game Settings</Link>
          </Button>
          <Button variant="destructive" onClick={() => signOut({ callbackUrl: '/' })}>
            Logout
          </Button>
        </nav>
      </main>
    </>
  );
};

export default MenuPage;
