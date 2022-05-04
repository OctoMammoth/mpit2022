import {gql} from '@apollo/client'

export const FIND_MANY_POSTS = gql`
   {
      findManyPost {
         id
         title
         description
         picture
      }
   }
`

export const FIND_UNIQUE_POST = gql`
   query ($where: PostWhereUniqueInput!) {
      findUniquePost(where: $where) {
         id
         title
         description
         picture
         likes
         liked
         comments {
            text
            createdBy {
               id
               surname
               name
            }
         }
      }
   }
`
