import gql from 'graphql-tag'

export default gql`
  type Post {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    blocked: Boolean!
    picture: [String!]!
    title: String!
    description: String!
    comments(
      where: CommentWhereInput
      orderBy: CommentOrderByWithRelationInput
      cursor: CommentWhereUniqueInput
      take: Int
      skip: Int
      distinct: CommentScalarFieldEnum
    ): [Comment!]!
    createdBy: User!
    userId: String!
    likes(
      where: LikeWhereInput
      orderBy: LikeOrderByWithRelationInput
      cursor: LikeWhereUniqueInput
      take: Int
      skip: Int
      distinct: LikeScalarFieldEnum
    ): [Like!]!
    _count: PostCountOutputType!
  }

  type Query {
    findFirstPost(
      where: PostWhereInput
      orderBy: [PostOrderByWithRelationInput]
      cursor: PostWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PostScalarFieldEnum]
    ): Post
    findManyPost(
      where: PostWhereInput
      orderBy: [PostOrderByWithRelationInput]
      cursor: PostWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PostScalarFieldEnum]
    ): [Post!]
    findManyPostCount(
      where: PostWhereInput
      orderBy: [PostOrderByWithRelationInput]
      cursor: PostWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PostScalarFieldEnum]
    ): Int!
    aggregatePost(
      where: PostWhereInput
      orderBy: [PostOrderByWithRelationInput]
      cursor: PostWhereUniqueInput
      take: Int
      skip: Int
    ): AggregatePost
  }

  type Mutation {
    createOnePost(data: PostCreateInput!): Post!
    updateOnePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post!
    deleteOnePost(where: PostWhereUniqueInput!): Post
    upsertOnePost(
      where: PostWhereUniqueInput!
      create: PostCreateInput!
      update: PostUpdateInput!
    ): Post
    deleteManyPost(where: PostWhereInput): BatchPayload
    updateManyPost(
      data: PostUpdateManyMutationInput!
      where: PostWhereInput
    ): BatchPayload
  }
`
