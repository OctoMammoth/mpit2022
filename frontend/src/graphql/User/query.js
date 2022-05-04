import {gql} from '@apollo/client'

export const ME = gql`
   query {
      me {
         id
         tel
         chats {
            users {
               id
               tel
            }
         }
      }
   }
`
