import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Trophy } from 'lucide-react'
import UpdateUserForm from '@/components/UpdateUserForm'
import useAuthStore from '@/stores/authStore';
import { useEffect, useState } from 'react';
import PlayerProfile from '@/components/PlayerProfile'
import DevDashboard from '@/components/DevDashboard'
import DeleteAccountModal from '@/components/DeleteAccountModal'

interface MatchHistoryItem {
  opponent: string
  result: string
  goldEarned: number
  xpEarned: number
  date: string
  time: string
  duration: string
  cardsCollected: number
  attacks: number
  wins: number
  losses: number
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
const matchHistory: MatchHistoryItem[] = [
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

// Remove the accountSettings variable declaration

// Add this dummy data for the leaderboard
const leaderboardData = [
  { rank: 1, name: "BigfootHunter", score: 10000 },
  { rank: 2, name: "SasquatchSeeker", score: 9500 },
  { rank: 3, name: "YetiYeller", score: 9000 },
  { rank: 4, name: "CryptoTracker", score: 8500 },
  { rank: 5, name: "WildWanderer", score: 8000 },
]

export default function MainMenu() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const user = useAuthStore((state) => state.user);
  const [email, setEmail] = useState('');
  const [showDeleteContainer, setShowDeleteContainer] = useState(false);

  useEffect(() => {
    if (session?.user?.email) {
      setEmail(session.user.email);
    }
  }, [session]);

  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
    }
  }, [user]);

  const handleEmailUpdate = (newEmail: string) => {
    setEmail(newEmail);
  };

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (!session) {
    router.push('/')
    return null
  }

  return (
    <>
      <Head>
        <title>Bigfoot War - Main Menu</title>
        <meta name="description" content="Choose your Bigfoot and start your adventure!" />
      </Head>
      <div className="h-screen flex flex-col relative overflow-hidden bg-black">
        <div className="relative z-10 flex-grow flex flex-col overflow-y-auto">
          <div className="container mx-auto px-4 py-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex-grow">
            {/* Updated Bigfoot War title */}
            <div className="bg-stone-800/90 p-3 rounded-lg mb-6">
              <h1 className="text-3xl sm:text-5xl font-bold text-amber-400 font-pixel text-center 
                             [text-shadow:_2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000,_0_2px_0_#000,_2px_0_0_#000,_0_-2px_0_#000,_-2px_0_0_#000]
                             [filter:_drop-shadow(0_0_10px_rgba(245,158,11,0.8))]">
                Bigfoot War!
              </h1>
            </div>

            {/* Player Profile Section */}
            <div className="bg-stone-800/90 p-3 rounded-lg mb-6">
              <PlayerProfile />
            </div>

            {/* Start Game Button */}
            <div className="mb-6">
              <Button 
                asChild 
                className="w-full bg-green-700 hover:bg-green-600 text-stone-200 border-2 border-stone-400 font-pixel text-lg py-3"
              >
                <Link href="/arena">Start Game</Link>
              </Button>
            </div>

            {/* Achievements Section */}
            <div className="bg-stone-800/90 p-3 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-amber-400 font-pixel mb-3">Achievements</h3>
              <div className="text-stone-200 font-pixel mb-3 text-sm">
                <h4 className="font-bold">Latest Unlocked:</h4>
                <p>{latestAchievement.title} - {latestAchievement.description}</p>
              </div>
              <div className="text-stone-200 font-pixel mb-3 text-sm">
                <h4 className="font-bold">Next to Unlock:</h4>
                <p>{nextAchievement.title} - {nextAchievement.description}</p>
              </div>
              <Button asChild className="w-full bg-stone-700 hover:bg-stone-600 text-stone-200 border-2 border-stone-400 font-pixel text-xs py-2">
                <Link href="/achievements">View All Achievements</Link>
              </Button>
            </div>

            {/* Match History Section */}
            <div className="bg-stone-800/90 p-3 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-amber-400 font-pixel mb-3">Match History</h3>
              <div className="max-h-48 overflow-y-auto">
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
              <Button asChild className="w-full mt-3 bg-stone-700 hover:bg-stone-600 text-stone-200 border-2 border-stone-400 font-pixel text-xs py-2">
                <Link href="/match-log">View Full Match Log</Link>
              </Button>
            </div>

            {/* Trending Stats Section */}
            <div className="bg-stone-800/90 p-3 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-amber-400 font-pixel mb-3">Trending Stats</h3>
              <div className="grid grid-cols-2 gap-3 text-stone-200 font-pixel text-sm">
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
              <Button asChild className="w-full mt-3 bg-stone-700 hover:bg-stone-600 text-stone-200 border-2 border-stone-400 font-pixel text-xs py-2">
                <Link href="/stats">View Full Stats</Link>
              </Button>
            </div>

            {/* Leaderboard Section */}
            <div className="bg-stone-800/90 p-3 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-amber-400 font-pixel mb-3 flex items-center">
                <Trophy className="mr-2 h-5 w-5" /> Leaderboard
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-stone-200 font-pixel text-sm">
                  <thead>
                    <tr className="border-b border-stone-600">
                      <th className="py-2 text-left">Rank</th>
                      <th className="py-2 text-left">Name</th>
                      <th className="py-2 text-right">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((player) => (
                      <tr key={player.rank} className="border-b border-stone-700">
                        <td className="py-2">{player.rank}</td>
                        <td className="py-2">{player.name}</td>
                        <td className="py-2 text-right">{player.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Button asChild className="w-full mt-3 bg-stone-700 hover:bg-stone-600 text-stone-200 border-2 border-stone-400 font-pixel text-xs py-2">
                <Link href="/leaderboard">View Full Leaderboard</Link>
              </Button>
            </div>

            {/* Settings Section */}
            <div className="bg-stone-800/90 p-3 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-amber-400 font-pixel mb-3">Settings</h3>
              <div className="grid grid-cols-2 gap-3 text-stone-200 font-pixel text-sm">
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
              <Button asChild className="w-full mt-3 bg-stone-700 hover:bg-stone-600 text-stone-200 border-2 border-stone-400 font-pixel text-xs py-2">
                <Link href="/settings">Adjust Settings</Link>
              </Button>
            </div>

            {/* Account Section */}
            <div className="bg-stone-800/90 p-3 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-amber-400 font-pixel mb-3">Account</h3>
              <div className="mb-3 text-stone-200 font-pixel text-sm">
                <p>Username: {session?.user?.username || 'N/A'}</p>
                <p>Email: {email || session?.user?.email || 'N/A'}</p>
              </div>
              <UpdateUserForm onEmailUpdate={handleEmailUpdate} currentEmail={email || session?.user?.email || ''} />
              
              {/* Warning and sensitive actions */}
              <div className="mt-4 bg-red-900/30 border-2 border-red-700 p-3 rounded-lg">
                <p className="text-yellow-400 font-pixel text-xs text-center mb-3">
                  Proceed with caution!
                </p>
                <div className="flex flex-col space-y-2">
                  <Button 
                    className="w-full bg-red-700 hover:bg-red-600 text-stone-200 border-2 border-stone-400 font-pixel text-xs py-2"
                    onClick={() => signOut()}
                  >
                    Logout
                  </Button>
                  <Button
                    onClick={() => setShowDeleteContainer(!showDeleteContainer)}
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-pixel text-xs py-2"
                  >
                    Account Deletion
                  </Button>
                  {showDeleteContainer && (
                    <div className="bg-red-100 p-2 rounded">
                      <p className="text-red-600 font-pixel text-xs mb-2">Warning: This action cannot be undone!</p>
                      <DeleteAccountModal onClose={() => setShowDeleteContainer(false)} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <footer className="w-full text-center p-3 bg-stone-800/90 text-stone-200">
            <p className="font-pixel text-xs">© 2024 Bigfoot War. All rights reserved.</p>
            <Link href="/release-notes" className="text-amber-400 hover:text-amber-300 font-pixel text-xs transition-colors duration-200">
              Release Notes
            </Link>
          </footer>
        </div>
      </div>
      <DevDashboard />
    </>
  )
}