import User from "./User/resolvers";
const { GraphQLUpload: Upload } = require("graphql-upload")

const resolversArray = [User, {Upload}]

export default resolversArray