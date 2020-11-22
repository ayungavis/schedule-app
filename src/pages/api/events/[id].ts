import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {
    query: { id },
    method,
    body,
  } = req

  switch (method) {
    case 'GET': {
      const event = await prisma.schedule.findOne({
        where: { id: id },
      })
      if (!event) {
        res.status(404).send('Data not found')
      }

      res.json({ event })
    }

    case 'PUT': {
      const event = await prisma.schedule.findOne({
        where: { id: parseInt(id) },
      })
      if (!event) {
        res.status(404).send('Data not found')
      }

      const updatedEvent = await prisma.schedule.update({
        where: { id },
        data: body,
      })
      res.json({ updatedEvent })
    }

    case 'DELETE': {
      const event = await prisma.schedule.findOne({
        where: { id: parseInt(id) },
      })
      if (!event) {
        res.status(404).send('Data not found')
      }

      await prisma.schedule.delete({ where: { id: parseInt(id) } })
      res.send('Data deleted')
    }

    default: {
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
    }
  }
}

export default handler
