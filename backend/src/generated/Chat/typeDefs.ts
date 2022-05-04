import gql from 'graphql-tag'

export default gql`
  type Chat {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    users(
      where: UserWhereInput
      orderBy: UserOrderByWithRelationInput
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: UserScalarFieldEnum
    ): [User!]!
    _count: ChatCountOutputType!
  }

  type Query {
    findUniqueChat(where: ChatWhereUniqueInput!): Chat
    findFirstChat(
      where: ChatWhereInput
      orderBy: [ChatOrderByWithRelationInput]
      cursor: ChatWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ChatScalarFieldEnum]
    ): Chat
    findManyChat(
      where: ChatWhereInput
      orderBy: [ChatOrderByWithRelationInput]
      cursor: ChatWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ChatScalarFieldEnum]
    ): [Chat!]
    findManyChatCount(
      where: ChatWhereInput
      orderBy: [ChatOrderByWithRelationInput]
      cursor: ChatWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ChatScalarFieldEnum]
    ): Int!
    aggregateChat(
      where: ChatWhereInput
      orderBy: [ChatOrderByWithRelationInput]
      cursor: ChatWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateChat
  }

  type Mutation {
    createOneChat(data: ChatCreateInput!): Chat!
    updateOneChat(data: ChatUpdateInput!, where: ChatWhereUniqueInput!): Chat!
    deleteOneChat(where: ChatWhereUniqueInput!): Chat
    upsertOneChat(
      where: ChatWhereUniqueInput!
      create: ChatCreateInput!
      update: ChatUpdateInput!
    ): Chat
    deleteManyChat(where: ChatWhereInput): BatchPayload
    updateManyChat(
      data: ChatUpdateManyMutationInput!
      where: ChatWhereInput
    ): BatchPayload
  }
`
