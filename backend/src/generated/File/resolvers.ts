import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueFile: (_parent, args, { prisma }) => {
      return prisma.file.findUnique(args)
    },
    findFirstFile: (_parent, args, { prisma }) => {
      return prisma.file.findFirst(args)
    },
    findManyFile: (_parent, args, { prisma }) => {
      return prisma.file.findMany(args)
    },
    findManyFileCount: (_parent, args, { prisma }) => {
      return prisma.file.count(args)
    },
    aggregateFile: (_parent, args, { prisma }) => {
      return prisma.file.aggregate(args)
    },
  },
  Mutation: {
    createOneFile: (_parent, args, { prisma }) => {
      return prisma.file.create(args)
    },
    updateOneFile: (_parent, args, { prisma }) => {
      return prisma.file.update(args)
    },
    deleteOneFile: async (_parent, args, { prisma }) => {
      return prisma.file.delete(args)
    },
    upsertOneFile: async (_parent, args, { prisma }) => {
      return prisma.file.upsert(args)
    },
    deleteManyFile: async (_parent, args, { prisma }) => {
      return prisma.file.deleteMany(args)
    },
    updateManyFile: (_parent, args, { prisma }) => {
      return prisma.file.updateMany(args)
    },
  },
}
export default resolvers
