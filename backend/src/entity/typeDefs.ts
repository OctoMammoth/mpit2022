import { gql } from "apollo-server-core"
import User from "./User/typeDefs"

const Initial = gql`
	scalar Upload

	type File {
		filename: String!
		mimetype: String!
		encoding: String!
	}
`

const typeDefsArray = [User, Initial]

export default typeDefsArray
