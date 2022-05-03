import gql from 'graphql-tag'

export default gql`
  type Like {
    id: String!
    createAt: DateTime!
    post: Post!
    postId: String!
    user: User!
    userId: String!
  }

  type Query {
    findUniqueLike(where: LikeWhereUniqueInput!): Like
    findFirstLike(
      where: LikeWhereInput
      orderBy: [LikeOrderByWithRelationInput]
      cursor: LikeWhereUniqueInput
      take: Int
      skip: Int
      distinct: [LikeScalarFieldEnum]
    ): Like
    findManyLike(
      where: LikeWhereInput
      orderBy: [LikeOrderByWithRelationInput]
      cursor: LikeWhereUniqueInput
      take: Int
      skip: Int
      distinct: [LikeScalarFieldEnum]
    ): [Like!]
    findManyLikeCount(
      where: LikeWhereInput
      orderBy: [LikeOrderByWithRelationInput]
      cursor: LikeWhereUniqueInput
      take: Int
      skip: Int
      distinct: [LikeScalarFieldEnum]
    ): Int!
    aggregateLike(
      where: LikeWhereInput
      orderBy: [LikeOrderByWithRelationInput]
      cursor: LikeWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateLike
  }

  type Mutation {
    createOneLike(data: LikeCreateInput!): Like!
    updateOneLike(data: LikeUpdateInput!, where: LikeWhereUniqueInput!): Like!
    deleteOneLike(where: LikeWhereUniqueInput!): Like
    upsertOneLike(
      where: LikeWhereUniqueInput!
      create: LikeCreateInput!
      update: LikeUpdateInput!
    ): Like
    deleteManyLike(where: LikeWhereInput): BatchPayload
    updateManyLike(
      data: LikeUpdateManyMutationInput!
      where: LikeWhereInput
    ): BatchPayload
  }
`
