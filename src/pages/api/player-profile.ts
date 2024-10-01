import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '@/lib/prismadb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const userId = parseInt(session.user.id as string, 10)

  if (req.method === 'GET') {
    try {
      let playerProfile = await prisma.playerProfile.findUnique({
        where: { userId: userId },
      })

      if (!playerProfile) {
        playerProfile = await prisma.playerProfile.create({
          data: {
            userId: userId,
            level: 1,
            xp: 0,
            gold: 0,
          },
        })
      }

      res.status(200).json(playerProfile)
    } catch (error) {
      console.error('Error fetching or creating player profile:', error)
      res.status(500).json({ error: 'Error fetching or creating player profile' })
    }
  } else if (req.method === 'PUT') {
    try {
      const { level, xp, gold, points, selectedBigfoot, aiDifficulty } = req.body

      const updatedProfile = await prisma.playerProfile.update({
        where: { userId: userId },
        data: {
          level,
          xp,
          gold,
          points,
          selectedBigfoot,
          aiDifficulty,
        },
      })

      res.status(200).json(updatedProfile)
    } catch (error) {
      console.error('Error updating player profile:', error)
      res.status(500).json({ error: 'Error updating player profile' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}