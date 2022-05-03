import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueMembership: (_parent, args, { prisma }) => {
      return prisma.membership.findUnique(args)
    },
    findFirstMembership: (_parent, args, { prisma }) => {
      return prisma.membership.findFirst(args)
    },
    findManyMembership: (_parent, args, { prisma }) => {
      return prisma.membership.findMany(args)
    },
    findManyMembershipCount: (_parent, args, { prisma }) => {
      return prisma.membership.count(args)
    },
    aggregateMembership: (_parent, args, { prisma }) => {
      return prisma.membership.aggregate(args)
    },
  },
  Mutation: {
    createOneMembership: (_parent, args, { prisma }) => {
      return prisma.membership.create(args)
    },
    updateOneMembership: (_parent, args, { prisma }) => {
      return prisma.membership.update(args)
    },
    deleteOneMembership: async (_parent, args, { prisma }) => {
      return prisma.membership.delete(args)
    },
    upsertOneMembership: async (_parent, args, { prisma }) => {
      return prisma.membership.upsert(args)
    },
    deleteManyMembership: async (_parent, args, { prisma }) => {
      return prisma.membership.deleteMany(args)
    },
    updateManyMembership: (_parent, args, { prisma }) => {
      return prisma.membership.updateMany(args)
    },
  },
}
export default resolvers
