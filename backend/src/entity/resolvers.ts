import Upload from "./Upload/resolvers";
import User from "./User/resolvers";
const { GraphQLUpload } = require("graphql-upload")

const resolversArray = [User, {Upload: GraphQLUpload}, Upload]

export default resolversArray