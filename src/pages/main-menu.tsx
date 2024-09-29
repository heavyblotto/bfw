import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useState } from 'react'

// Dummy data for the current Bigfoot (replace with actual data fetching later)
const currentBigfoot = {
  name: "Sasquatch",
  class: "Squatch",
  level: 1,
  primaryAbility: "Forest Regeneration",
  secondaryAbility: "Ground Smash",
  hp: 100,
  attack: 50,
  defense: 50,
  luck: 50
}

// Dummy data for achievements (replace with actual data fetching later)
const latestAchievement = {
  title: "First Steps",
  description: "Complete your first battle"
}

const nextAchievement = {
  title: "Battle Hardened",
  description: "Win 10 battles"
}

// Dummy data for match history (replace with actual data fetching later)
const matchHistory = [
  {
    opponent: "Yeti",
    result: "Win",
    goldEarned: 50,
    xpEarned: 100,
    date: "2024-03-15",
    time: "14:30",
    duration: "10:25",
    cardsCollected: 52,
    attacks: 5,
    wins: 26,
    losses: 25
  },
  {
    opponent: "Skunk Ape",
    result: "Loss",
    goldEarned: 20,
    xpEarned: 50,
    date: "2024-03-14",
    time: "16:45",
    duration: "08:15",
    cardsCollected: 30,
    attacks: 3,
    wins: 15,
    losses: 37
  },
  // Add more dummy match history data as needed
]

// Dummy data for trending stats (replace with actual data fetching later)
const trendingStats = {
  gamesPlayed: 50,
  winRate: "60%",
  averageGoldPerGame: 75,
  averageXpPerGame: 100,
  mostUsedBigfoot: "Sasquatch",
  highestWinStreak: 5
}

// Dummy data for settings (replace with actual data fetching later)
const settings = {
  aiDifficulty: "Medium",
  soundEffects: true,
  backgroundMusic: true,
  notifications: true,
}

// Dummy data for account settings (replace with actual data fetching later)
const accountSettings = {
  email: "player@example.com",
  username: "BigfootHunter",
  accountCreated: "2024-01-15",
  lastLogin: "2024-03-20",
}

export default function MainMenu() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (!session) {
    router.push('/')
    return null
  }

  // Extract username from session
  const username = session.user?.name || 'Player'

  return (
    <>
      <Head>
        <title>Bigfoot War - Main Menu</title>
        <meta name="description" content="Choose your Bigfoot and start your adventure!" />
      </Head>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <Image
          src="/images/index-bg.webp"
          alt="Misty forest background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative z-10 flex-grow flex flex-col">
          <div className="container mx-auto px-4 py-8 max-w-3xl flex-grow">
            {/* Bigfoot War title */}
            <div className="bg-stone-800/90 p-4 rounded-lg mb-8">
              <div className="flex items-center justify-between">
                <h1 className="text-6xl font-bold text-amber-400 font-pixel whitespace-nowrap">Bigfoot War!</h1>
                <button 
                  className="md:hidden text-stone-200 font-pixel"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? 'Close' : 'Menu'}
                </button>
              </div>
            </div>

            {/* Username display with New Game CTA */}
            <div className="bg-stone-800/90 p-4 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-amber-400 font-pixel mb-4">{username}</h2>
              <Button 
                asChild 
                className="w-full bg-red-600 hover:bg-red-500 text-stone-200 border-2 border-stone-400 font-pixel text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 whitespace-nowrap animate-pulse"
              >
                <Link href="/arena">New Game</Link>
              </Button>
            </div>

            {/* Current Bigfoot Section */}
            <div className="bg-stone-800/90 p-4 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/bigfoot-avatar.webp"
                  alt={currentBigfoot.name}
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                />
                <h3 className="text-xl font-bold text-amber-400 font-pixel">{currentBigfoot.name}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 text-stone-200 font-pixel">
                <p>Class: {currentBigfoot.class}</p>
                <p>Level: {currentBigfoot.level}</p>
                <p>Primary Ability: {currentBigfoot.primaryAbility}</p>
                <p>Secondary Ability: {currentBigfoot.secondaryAbility}</p>
                <p>HP: {currentBigfoot.hp}</p>
                <p>Attack: {currentBigfoot.attack}</p>
                <p>Defense: {currentBigfoot.defense}</p>
                <p>Luck: {currentBigfoot.luck}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <Button asChild className="flex-1 bg-green-700 hover:bg-green-600 text-stone-200 border border-stone-400 font-pixel text-xs">
                  <Link href="/bigfoot-selection">Select New Bigfoot</Link>
                </Button>
                <Button asChild className="flex-1 bg-blue-700 hover:bg-blue-600 text-stone-200 border border-stone-400 font-pixel text-xs">
                  <Link href="/bigfoot-details">Bigfoot Details</Link>
                </Button>
              </div>
            </div>

            {/* Player Profile Section */}
            <div className="bg-stone-800/90 p-4 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-amber-400 font-pixel mb-4">Player Profile</h3>
              <div className="grid grid-cols-2 gap-2 text-stone-200 font-pixel">
                <p>Level: 5</p>
                <p>XP: 1250 / 2000</p>
                <p>Gold: 500</p>
                <div className="col-span-2 flex gap-2">
                  <Button asChild className="flex-1 bg-green-700 hover:bg-green-600 text-stone-200 border border-stone-400 font-pixel text-xs">
                    <Link href="/inventory">View Inventory</Link>
                  </Button>
                  <Button asChild className="flex-1 bg-blue-700 hover:bg-blue-600 text-stone-200 border border-stone-400 font-pixel text-xs">
                    <Link href="/shop">Shop</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-stone-800/90 p-4 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-amber-400 font-pixel mb-4">Achievements</h3>
              <div className="text-stone-200 font-pixel mb-4">
                <h4 className="font-bold">Latest Unlocked:</h4>
                <p>{latestAchievement.title} - {latestAchievement.description}</p>
              </div>
              <div className="text-stone-200 font-pixel mb-4">
                <h4 className="font-bold">Next to Unlock:</h4>
                <p>{nextAchievement.title} - {nextAchievement.description}</p>
              </div>
              <Button asChild className="w-full bg-green-700 hover:bg-green-600 text-stone-200 border border-stone-400 font-pixel text-xs">
                <Link href="/achievements">View All Achievements</Link>
              </Button>
            </div>

            {/* Match History Section */}
            <div className="bg-stone-800/90 p-4 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-amber-400 font-pixel mb-4">Match History</h3>
              <div className="max-h-60 overflow-y-auto">
                {matchHistory.map((match, index) => (
                  <div key={index} className="bg-stone-700/50 p-2 rounded mb-2 text-stone-200 font-pixel text-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold">{match.opponent}</span>
                      <span className={match.result === "Win" ? "text-green-400" : "text-red-400"}>{match.result}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      <span>Gold: {match.goldEarned}</span>
                      <span>XP: {match.xpEarned}</span>
                      <span>Date: {match.date}</span>
                      <span>Time: {match.time}</span>
                      <span>Duration: {match.duration}</span>
                      <span>Cards: {match.cardsCollected}</span>
                      <span>Attacks: {match.attacks}</span>
                      <span>Wins: {match.wins}</span>
                      <span>Losses: {match.losses}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild className="w-full mt-4 bg-green-700 hover:bg-green-600 text-stone-200 border border-stone-400 font-pixel text-xs">
                <Link href="/match-log">View Full Match Log</Link>
              </Button>
            </div>

            {/* Trending Stats Section */}
            <div className="bg-stone-800/90 p-4 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-amber-400 font-pixel mb-4">Trending Stats</h3>
              <div className="grid grid-cols-2 gap-4 text-stone-200 font-pixel">
                <div>
                  <p className="font-bold">Games Played:</p>
                  <p>{trendingStats.gamesPlayed}</p>
                </div>
                <div>
                  <p className="font-bold">Win Rate:</p>
                  <p>{trendingStats.winRate}</p>
                </div>
                <div>
                  <p className="font-bold">Avg. Gold/Game:</p>
                  <p>{trendingStats.averageGoldPerGame}</p>
                </div>
                <div>
                  <p className="font-bold">Avg. XP/Game:</p>
                  <p>{trendingStats.averageXpPerGame}</p>
                </div>
                <div>
                  <p className="font-bold">Most Used Bigfoot:</p>
                  <p>{trendingStats.mostUsedBigfoot}</p>
                </div>
                <div>
                  <p className="font-bold">Highest Win Streak:</p>
                  <p>{trendingStats.highestWinStreak}</p>
                </div>
              </div>
              <Button asChild className="w-full mt-4 bg-blue-700 hover:bg-blue-600 text-stone-200 border border-stone-400 font-pixel text-xs">
                <Link href="/stats">View Full Stats</Link>
              </Button>
            </div>

            {/* Settings Section */}
            <div className="bg-stone-800/90 p-4 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-amber-400 font-pixel mb-4">Settings</h3>
              <div className="grid grid-cols-2 gap-4 text-stone-200 font-pixel">
                <div>
                  <p className="font-bold">AI Difficulty:</p>
                  <p>{settings.aiDifficulty}</p>
                </div>
                <div>
                  <p className="font-bold">Sound Effects:</p>
                  <p>{settings.soundEffects ? "On" : "Off"}</p>
                </div>
                <div>
                  <p className="font-bold">Background Music:</p>
                  <p>{settings.backgroundMusic ? "On" : "Off"}</p>
                </div>
                <div>
                  <p className="font-bold">Notifications:</p>
                  <p>{settings.notifications ? "On" : "Off"}</p>
                </div>
              </div>
              <Button asChild className="w-full mt-4 bg-purple-700 hover:bg-purple-600 text-stone-200 border border-stone-400 font-pixel text-xs">
                <Link href="/settings">Adjust Settings</Link>
              </Button>
            </div>

            {/* Account Section */}
            <div className="bg-stone-800/90 p-4 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-amber-400 font-pixel mb-4">Account</h3>
              <div className="grid grid-cols-2 gap-4 text-stone-200 font-pixel">
                <div>
                  <p className="font-bold">Email:</p>
                  <p>{accountSettings.email}</p>
                </div>
                <div>
                  <p className="font-bold">Username:</p>
                  <p>{accountSettings.username}</p>
                </div>
                <div>
                  <p className="font-bold">Account Created:</p>
                  <p>{accountSettings.accountCreated}</p>
                </div>
                <div>
                  <p className="font-bold">Last Login:</p>
                  <p>{accountSettings.lastLogin}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Button className="w-full bg-blue-700 hover:bg-blue-600 text-stone-200 border border-stone-400 font-pixel text-xs">
                  Update Email
                </Button>
                <Button className="w-full bg-green-700 hover:bg-green-600 text-stone-200 border border-stone-400 font-pixel text-xs">
                  Change Password
                </Button>
                <Button 
                  className="w-full bg-red-700 hover:bg-red-600 text-stone-200 border border-stone-400 font-pixel text-xs"
                  onClick={() => signOut()}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
          
          <footer className="w-full text-center p-4 bg-stone-800/90 text-stone-200">
            <p className="font-pixel text-sm">© 2024 Bigfoot War. All rights reserved.</p>
            <Link href="/release-notes" className="text-amber-400 hover:text-amber-300 font-pixel text-sm transition-colors duration-200">
              Release Notes
            </Link>
          </footer>
        </div>
      </div>
    </>
  )
}