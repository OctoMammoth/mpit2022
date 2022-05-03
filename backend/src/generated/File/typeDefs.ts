import gql from 'graphql-tag'

export default gql`
  type File {
    id: String!
    filename: String!
    mimetype: String!
    encoding: String!
    uri: String!
  }

  type Query {
    findUniqueFile(where: FileWhereUniqueInput!): File
    findFirstFile(
      where: FileWhereInput
      orderBy: [FileOrderByWithRelationInput]
      cursor: FileWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FileScalarFieldEnum]
    ): File
    findManyFile(
      where: FileWhereInput
      orderBy: [FileOrderByWithRelationInput]
      cursor: FileWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FileScalarFieldEnum]
    ): [File!]
    findManyFileCount(
      where: FileWhereInput
      orderBy: [FileOrderByWithRelationInput]
      cursor: FileWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FileScalarFieldEnum]
    ): Int!
    aggregateFile(
      where: FileWhereInput
      orderBy: [FileOrderByWithRelationInput]
      cursor: FileWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateFile
  }

  type Mutation {
    createOneFile(data: FileCreateInput!): File!
    updateOneFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File!
    deleteOneFile(where: FileWhereUniqueInput!): File
    upsertOneFile(
      where: FileWhereUniqueInput!
      create: FileCreateInput!
      update: FileUpdateInput!
    ): File
    deleteManyFile(where: FileWhereInput): BatchPayload
    updateManyFile(
      data: FileUpdateManyMutationInput!
      where: FileWhereInput
    ): BatchPayload
  }
`
