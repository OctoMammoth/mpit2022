import { gql } from "apollo-server-core"
import Upload from "./Upload/typeDefs"
import User from "./User/typeDefs"
import Post from "./Post/typeDefs"

const Initial = gql`
	scalar DateTime
`

const typeDefsArray = [User, Initial, Upload, Post]

export default typeDefsArray
