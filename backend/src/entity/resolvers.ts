import Upload from "./Upload/resolvers";
import User from "./User/resolvers";
import Post from "./Post/resolvers";
const { GraphQLUpload } = require("graphql-upload")

const resolversArray = [User, {Upload: GraphQLUpload}, Upload, Post]

export default resolversArray