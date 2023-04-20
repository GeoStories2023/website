import { Prisma, PrismaClient } from '@prisma/client'

let prisma: PrismaClient

export const getPrismaInstance = (): PrismaClient => {
  if (!prisma) {
    prisma = new PrismaClient()
  }
  return prisma
}