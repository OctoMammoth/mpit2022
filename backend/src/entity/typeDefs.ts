import { gql } from "apollo-server-core"
import Upload from "./Upload/typeDefs"
import User from "./User/typeDefs"

const Initial = gql`
	scalar DateTime
`

const typeDefsArray = [User, Initial, Upload]

export default typeDefsArray
