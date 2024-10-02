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

  const { id } = req.query

  if (req.method === 'GET') {
    // For now, we'll use a simple switch statement
    // In the future, this could be fetched from a database
    let bigfoot
    switch (id) {
      case 'sasquatch':
        bigfoot = sasquatch
        break
      case 'skunkape':
        bigfoot = skunkApe
        break
      // Add cases for other Bigfoots
      default:
        return res.status(404).json({ error: 'Bigfoot not found' })
    }
    res.status(200).json(bigfoot)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}