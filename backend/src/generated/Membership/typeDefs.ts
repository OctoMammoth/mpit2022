import gql from 'graphql-tag'

export default gql`
  type Membership {
    id: String!
    createdAt: DateTime!
    User: User
    userId: String
    Group: Group
    groupId: String
  }

  type Query {
    findUniqueMembership(where: MembershipWhereUniqueInput!): Membership
    findFirstMembership(
      where: MembershipWhereInput
      orderBy: [MembershipOrderByWithRelationInput]
      cursor: MembershipWhereUniqueInput
      take: Int
      skip: Int
      distinct: [MembershipScalarFieldEnum]
    ): Membership
    findManyMembership(
      where: MembershipWhereInput
      orderBy: [MembershipOrderByWithRelationInput]
      cursor: MembershipWhereUniqueInput
      take: Int
      skip: Int
      distinct: [MembershipScalarFieldEnum]
    ): [Membership!]
    findManyMembershipCount(
      where: MembershipWhereInput
      orderBy: [MembershipOrderByWithRelationInput]
      cursor: MembershipWhereUniqueInput
      take: Int
      skip: Int
      distinct: [MembershipScalarFieldEnum]
    ): Int!
    aggregateMembership(
      where: MembershipWhereInput
      orderBy: [MembershipOrderByWithRelationInput]
      cursor: MembershipWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateMembership
  }

  type Mutation {
    createOneMembership(data: MembershipCreateInput!): Membership!
    updateOneMembership(
      data: MembershipUpdateInput!
      where: MembershipWhereUniqueInput!
    ): Membership!
    deleteOneMembership(where: MembershipWhereUniqueInput!): Membership
    upsertOneMembership(
      where: MembershipWhereUniqueInput!
      create: MembershipCreateInput!
      update: MembershipUpdateInput!
    ): Membership
    deleteManyMembership(where: MembershipWhereInput): BatchPayload
    updateManyMembership(
      data: MembershipUpdateManyMutationInput!
      where: MembershipWhereInput
    ): BatchPayload
  }
`
