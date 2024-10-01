import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import prisma from '@/lib/prismadb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const userId = session.user?.id

  if (!userId) {
    return res.status(400).json({ error: 'User ID not found in session' })
  }

  if (req.method === 'GET') {
    try {
      let playerProfile = await prisma.playerProfile.findUnique({
        where: { userId: parseInt(userId) },
      })

      if (!playerProfile) {
        playerProfile = await prisma.playerProfile.create({
          data: {
            userId: parseInt(userId),
            level: 1,
            xp: 0,
            gold: 0,
          },
        })
      }

      res.status(200).json(playerProfile)
    } catch (error) {
      console.error('Error fetching player profile:', error)
      res.status(500).json({ error: 'Failed to fetch player profile' })
    }
  } else if (req.method === 'PUT') {
    try {
      const { level, xp, gold } = req.body

      const updatedProfile = await prisma.playerProfile.update({
        where: { userId: parseInt(userId) },
        data: { level, xp, gold },
      })

      res.status(200).json(updatedProfile)
    } catch (error) {
      console.error('Error updating player profile:', error)
      res.status(500).json({ error: 'Failed to update player profile' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}