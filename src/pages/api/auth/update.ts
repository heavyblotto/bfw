import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./[...nextauth]"

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('Received update request');
  console.log('Request method:', req.method);
  console.log('Request headers:', req.headers);

  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const session = await getServerSession(req, res, authOptions)
  console.log('Session:', session);

  if (!session || !session.user?.id) {
    console.log('Unauthorized: No valid session');
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const { email, password } = req.body

  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(session.user.id) },
    })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const updates: { email?: string; password?: string } = {}

    if (email) {
      const existingUser = await prisma.user.findUnique({ where: { email } })
      if (existingUser && existingUser.id !== user.id) {
        return res.status(400).json({ message: 'Email already in use' })
      }
      updates.email = email
    }

    if (password) {
      updates.password = await bcrypt.hash(password, 10)
    }

    await prisma.user.update({
      where: { id: user.id },
      data: updates,
    })

    res.status(200).json({ message: 'User updated successfully' })
  } catch (error) {
    console.error('Update error:', error)
    res.status(500).json({ message: 'Error updating user' })
  } finally {
    await prisma.$disconnect()
  }
}