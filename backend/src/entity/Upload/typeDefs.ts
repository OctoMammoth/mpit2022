import { gql } from "apollo-server-core"

const Upload = gql`
    scalar Upload

    type File {
        filename: String!
        mimetype: String!
        encoding: String!
        uri: String!
    }

    type Mutation {
        singleUpload(upload: Upload!):File!
        multiUpload(uploads: [Upload]):[File]
    }
`

export default Upload