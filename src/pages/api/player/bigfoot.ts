import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import prisma from '@/lib/prismadb'
import { sasquatch } from '@/data/bigfoots/sasquatch'
// Import other Bigfoot data files as needed

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
      const playerProfile = await prisma.playerProfile.findUnique({
        where: { userId: parseInt(userId) },
        select: { selectedBigfoot: true }  
      })

      if (!playerProfile || !playerProfile.selectedBigfoot) {
        // If no Bigfoot is selected, return the default (Sasquatch)
        return res.status(200).json(sasquatch)
      }

      // In a real implementation, you'd fetch the Bigfoot data based on the ID
      // For now, we'll just return Sasquatch as an example
      res.status(200).json(sasquatch)
    } catch (error) {
      console.error('Error fetching player\'s Bigfoot:', error)
      res.status(500).json({ error: 'Failed to fetch player\'s Bigfoot' })
    }
  } else if (req.method === 'PUT') {
    try {
      const { bigfootId } = req.body

      if (!bigfootId) {
        return res.status(400).json({ error: 'Bigfoot ID is required' })
      }

      const updatedProfile = await prisma.playerProfile.update({
        where: { userId: parseInt(userId) },
        data: { selectedBigfoot: bigfootId },  // Change this line
      })

      res.status(200).json({ message: 'Bigfoot updated successfully', selectedBigfoot: updatedProfile.selectedBigfoot })  // Change this line
    } catch (error) {
      console.error('Error updating player\'s Bigfoot:', error)
      res.status(500).json({ error: 'Failed to update player\'s Bigfoot' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}