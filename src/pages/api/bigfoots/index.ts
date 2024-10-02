import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import { sasquatch } from '@/data/bigfoots/sasquatch'
import { skunkApe } from '@/data/bigfoots/skunkApe'
// Import other Bigfoot data files as needed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (req.method === 'GET') {
    // For now, we'll return a static list of Bigfoots
    // In the future, this could be fetched from a database
    const bigfoots = [sasquatch, skunkApe]
    res.status(200).json(bigfoots)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}