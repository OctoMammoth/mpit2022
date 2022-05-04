import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueChat: (_parent, args, { prisma }) => {
      return prisma.chat.findUnique(args)
    },
    findFirstChat: (_parent, args, { prisma }) => {
      return prisma.chat.findFirst(args)
    },
    findManyChat: (_parent, args, { prisma }) => {
      return prisma.chat.findMany(args)
    },
    findManyChatCount: (_parent, args, { prisma }) => {
      return prisma.chat.count(args)
    },
    aggregateChat: (_parent, args, { prisma }) => {
      return prisma.chat.aggregate(args)
    },
  },
  Mutation: {
    createOneChat: (_parent, args, { prisma }) => {
      return prisma.chat.create(args)
    },
    updateOneChat: (_parent, args, { prisma }) => {
      return prisma.chat.update(args)
    },
    deleteOneChat: async (_parent, args, { prisma }) => {
      return prisma.chat.delete(args)
    },
    upsertOneChat: async (_parent, args, { prisma }) => {
      return prisma.chat.upsert(args)
    },
    deleteManyChat: async (_parent, args, { prisma }) => {
      return prisma.chat.deleteMany(args)
    },
    updateManyChat: (_parent, args, { prisma }) => {
      return prisma.chat.updateMany(args)
    },
  },
}
export default resolvers
