import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueLike: (_parent, args, { prisma }) => {
      return prisma.like.findUnique(args)
    },
    findFirstLike: (_parent, args, { prisma }) => {
      return prisma.like.findFirst(args)
    },
    findManyLike: (_parent, args, { prisma }) => {
      return prisma.like.findMany(args)
    },
    findManyLikeCount: (_parent, args, { prisma }) => {
      return prisma.like.count(args)
    },
    aggregateLike: (_parent, args, { prisma }) => {
      return prisma.like.aggregate(args)
    },
  },
  Mutation: {
    createOneLike: (_parent, args, { prisma }) => {
      return prisma.like.create(args)
    },
    updateOneLike: (_parent, args, { prisma }) => {
      return prisma.like.update(args)
    },
    deleteOneLike: async (_parent, args, { prisma }) => {
      return prisma.like.delete(args)
    },
    upsertOneLike: async (_parent, args, { prisma }) => {
      return prisma.like.upsert(args)
    },
    deleteManyLike: async (_parent, args, { prisma }) => {
      return prisma.like.deleteMany(args)
    },
    updateManyLike: (_parent, args, { prisma }) => {
      return prisma.like.updateMany(args)
    },
  },
}
export default resolvers
