import gql from 'graphql-tag'

export default gql`
  type Comment {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    blocked: Boolean!
    text: String!
    createdBy: User!
    Post: Post
    postId: String
    userId: String!
  }

  type Query {
    findUniqueComment(where: CommentWhereUniqueInput!): Comment
    findFirstComment(
      where: CommentWhereInput
      orderBy: [CommentOrderByWithRelationInput]
      cursor: CommentWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CommentScalarFieldEnum]
    ): Comment
    findManyComment(
      where: CommentWhereInput
      orderBy: [CommentOrderByWithRelationInput]
      cursor: CommentWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CommentScalarFieldEnum]
    ): [Comment!]
    findManyCommentCount(
      where: CommentWhereInput
      orderBy: [CommentOrderByWithRelationInput]
      cursor: CommentWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CommentScalarFieldEnum]
    ): Int!
    aggregateComment(
      where: CommentWhereInput
      orderBy: [CommentOrderByWithRelationInput]
      cursor: CommentWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateComment
  }

  type Mutation {
    createOneComment(data: CommentCreateInput!): Comment!
    updateOneComment(
      data: CommentUpdateInput!
      where: CommentWhereUniqueInput!
    ): Comment!
    deleteOneComment(where: CommentWhereUniqueInput!): Comment
    upsertOneComment(
      where: CommentWhereUniqueInput!
      create: CommentCreateInput!
      update: CommentUpdateInput!
    ): Comment
    deleteManyComment(where: CommentWhereInput): BatchPayload
    updateManyComment(
      data: CommentUpdateManyMutationInput!
      where: CommentWhereInput
    ): BatchPayload
  }
`
