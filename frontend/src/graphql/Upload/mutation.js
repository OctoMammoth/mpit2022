import {gql} from '@apollo/client'

export const SINGLE_UPLOAD = gql`
   mutation SingleFile($upload: Upload!) {
      singleUpload(upload: $upload) {
         filename
         mimetype
         encoding
         uri
      }
   }
`
