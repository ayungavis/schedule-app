import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { method, body } = req

  switch (method) {
    case 'GET': {
      const events = await prisma.schedule.findMany()
      res.json({ events })
    }

    case 'POST': {
      const event = await prisma.schedule.create({ data: body })
      res.json({ event })
    }

    default: {
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
    }
  }
}

export default handler
