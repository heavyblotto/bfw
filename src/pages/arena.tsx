import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

// Helper function to abbreviate large numbers
const abbreviateNumber = (num: number): string => {
  const abbreviations = ['', 'K', 'M', 'B', 'T'];
  const tier = Math.log10(Math.abs(num)) / 3 | 0;
  if (tier === 0) return num.toString();
  const suffix = abbreviations[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = num / scale;
  return scaled.toFixed(1) + suffix;
};

const ArenaPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bigfoot War - Arena</title>
        <meta name="description" content="Battle your opponent in the Bigfoot War arena!" />
      </Head>
      <div className="min-h-screen flex flex-col relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[url('/images/texture-overlay.png')] opacity-20"></div>
        <div className="relative z-10 flex-grow flex flex-col overflow-y-auto">
          <div className="container mx-auto px-4 py-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex-grow">
            <div className="bg-stone-900/95 shadow-lg border-2 border-stone-600 rounded-lg overflow-hidden">
              {/* XP, Gold, and Status Section */}
              <section className="p-3 bg-gradient-to-b from-stone-800/90 to-stone-900/90 rounded-t-lg">
                <div className="flex flex-col space-y-2">
                  {/* Level, Points, and Gold */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <p className="text-xs text-stone-300 font-pixel">Level</p>
                      <p className="text-2xl text-amber-400 font-pixel">5</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-stone-300 font-pixel">Points</p>
                      <p className="text-sm text-green-400 font-pixel">{abbreviateNumber(1234567)}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-stone-300 font-pixel">Gold</p>
                      <p className="text-sm text-amber-400 font-pixel">{abbreviateNumber(9876543)}</p>
                    </div>
                  </div>
                  
                  {/* XP */}
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <p className="text-xs text-stone-300 font-pixel">XP</p>
                      <p className="text-xs text-stone-300 font-pixel">250 / 1000</p>
                    </div>
                    <div className="bg-stone-700 rounded-full h-2 w-full">
                      <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-full h-2 w-1/4"></div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Player Section */}
              <section className="p-4 bg-stone-800/80">
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/images/player-bigfoot.png"
                      alt="Player Bigfoot"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full border-4 border-amber-400 shadow-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold text-amber-300 font-pixel mb-2">Player</h2>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <span className="w-12 text-xs text-stone-300 font-pixel">HP:</span>
                        <div className="flex-grow bg-stone-700 rounded-full h-3 shadow-inner">
                          <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-full h-3 w-1/2 shadow"></div>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-stone-300 font-pixel">
                        <span className="w-16">ATK: 80</span>
                        <span className="w-16">DEF: 60</span>
                        <span className="w-16">LCK: 30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Play Area */}
              <section className="p-4 bg-stone-900/80">
                <div className="bg-gradient-to-b from-stone-800/90 to-stone-900/90 rounded-lg p-4 h-72 flex flex-col border-2 border-amber-600/50 shadow-inner">
                  <h3 className="text-lg font-bold mb-3 text-amber-300 font-pixel">Play Area</h3>
                  <div className="flex-grow flex items-center justify-center">
                    <div className="text-center text-sm text-stone-300 font-pixel">
                      <p>Cards will be displayed here</p>
                      <p>during gameplay</p>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between text-xs text-stone-400 font-pixel">
                    <p>Your Deck: 20 cards</p>
                    <p>Win Pile: 10 cards</p>
                  </div>
                </div>
              </section>

              {/* Opponent Section */}
              <section className="p-4 bg-stone-900/80">
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/images/opponent-bigfoot.png"
                      alt="Opponent Bigfoot"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full border-4 border-red-400 shadow-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold text-red-400 font-pixel mb-2">Opponent</h2>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <span className="w-12 text-xs text-stone-300 font-pixel">HP:</span>
                        <div className="flex-grow bg-stone-700 rounded-full h-3 shadow-inner">
                          <div className="bg-gradient-to-r from-red-600 to-red-400 rounded-full h-3 w-3/4 shadow"></div>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-stone-300 font-pixel">
                        <span className="w-16">ATK: 75</span>
                        <span className="w-16">DEF: 50</span>
                        <span className="w-16">LCK: 25</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Action Buttons */}
              <section className="p-4 bg-stone-800/80">
                <div className="flex flex-col space-y-2">
                  <Button className="w-full bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-stone-200 border-2 border-green-500 text-sm font-pixel py-2 shadow-md transition-all duration-300">
                    Play
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-stone-700 to-stone-600 hover:from-stone-600 hover:to-stone-500 text-stone-200 border-2 border-stone-500 text-sm font-pixel py-2 shadow-md transition-all duration-300">
                    Collect
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-stone-200 border-2 border-amber-500 text-sm font-pixel py-2 shadow-md transition-all duration-300">
                    Attack
                  </Button>
                </div>
              </section>

              {/* Game Log */}
              <section className="p-4 bg-gradient-to-b from-stone-800/90 to-stone-900/90 rounded-b-lg">
                <div className="bg-stone-700/50 rounded-lg p-3 h-24 overflow-y-auto border-2 border-stone-600 text-sm text-stone-300 font-pixel shadow-inner">
                  <p className="mb-1">You played a King of Hearts</p>
                  <p className="mb-1">Opponent played a Queen of Spades</p>
                  <p className="mb-1">You won the round!</p>
                  <p>You collected 2 cards</p>
                </div>
              </section>
            </div>
          </div>
          
          <footer className="w-full text-center p-3 bg-stone-900/90 text-stone-300">
            <p className="font-pixel text-xs mb-1">© 2024 Bigfoot War. All rights reserved.</p>
            <Link href="/release-notes" className="text-amber-400 hover:text-amber-300 font-pixel text-xs transition-colors duration-200 underline">
              Release Notes
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ArenaPage;