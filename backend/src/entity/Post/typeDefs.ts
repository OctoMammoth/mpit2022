const { default: gql } = require("graphql-tag")

const Post = gql`
	type _Post {
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
		master: Master!
		_count: PostCountOutputType
		liked: Boolean
		likes: Int
	}
	type Query {
		findUniquePost(where: PostWhereUniqueInput!): _Post
	}
	type Mutation {
		likePost(postId: String!): Boolean
		unlikePost(postId: String!): Boolean
	}
`

export default Post