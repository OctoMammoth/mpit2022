import gql from 'graphql-tag'

export default gql`
  type Group {
    id: String!
    createdAt: DateTime!
    members(
      where: MembershipWhereInput
      orderBy: MembershipOrderByWithRelationInput
      cursor: MembershipWhereUniqueInput
      take: Int
      skip: Int
      distinct: MembershipScalarFieldEnum
    ): [Membership!]!
    _count: GroupCountOutputType!
  }

  type Query {
    findUniqueGroup(where: GroupWhereUniqueInput!): Group
    findFirstGroup(
      where: GroupWhereInput
      orderBy: [GroupOrderByWithRelationInput]
      cursor: GroupWhereUniqueInput
      take: Int
      skip: Int
      distinct: [GroupScalarFieldEnum]
    ): Group
    findManyGroup(
      where: GroupWhereInput
      orderBy: [GroupOrderByWithRelationInput]
      cursor: GroupWhereUniqueInput
      take: Int
      skip: Int
      distinct: [GroupScalarFieldEnum]
    ): [Group!]
    findManyGroupCount(
      where: GroupWhereInput
      orderBy: [GroupOrderByWithRelationInput]
      cursor: GroupWhereUniqueInput
      take: Int
      skip: Int
      distinct: [GroupScalarFieldEnum]
    ): Int!
    aggregateGroup(
      where: GroupWhereInput
      orderBy: [GroupOrderByWithRelationInput]
      cursor: GroupWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateGroup
  }

  type Mutation {
    createOneGroup(data: GroupCreateInput!): Group!
    updateOneGroup(
      data: GroupUpdateInput!
      where: GroupWhereUniqueInput!
    ): Group!
    deleteOneGroup(where: GroupWhereUniqueInput!): Group
    upsertOneGroup(
      where: GroupWhereUniqueInput!
      create: GroupCreateInput!
      update: GroupUpdateInput!
    ): Group
    deleteManyGroup(where: GroupWhereInput): BatchPayload
    updateManyGroup(
      data: GroupUpdateManyMutationInput!
      where: GroupWhereInput
    ): BatchPayload
  }
`
