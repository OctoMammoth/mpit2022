import { gql } from "apollo-server-core"

const User = gql`
    type Auth {
        status: String!
        token: String
    }

    type Mutation {
        auth(tel: String!): Auth
        verify(tel: String!, code: String!): Auth
    }

    type Query {
        me: User
    }
`

export default User