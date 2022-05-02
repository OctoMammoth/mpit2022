import { gql } from "apollo-server-core"

const User = gql`
    type Query {
        getUser: String
    }
`

export default User