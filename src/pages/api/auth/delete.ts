import { PrismaClient } from '@prisma/client'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./[...nextauth]"
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const session = await getServerSession(req, res, authOptions)
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(session.user.id) },
    })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    await prisma.user.delete({
      where: { id: user.id },
    })

    res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    console.error('Delete error:', error)
    res.status(500).json({ message: 'Error deleting user' })
  } finally {
    await prisma.$disconnect()
  }
}