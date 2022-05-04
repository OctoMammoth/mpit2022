import {gql} from '@apollo/client'

export const AUTH = gql`
   mutation Auth($tel: String!) {
      auth(tel: $tel) {
         status
      }
   }
`

export const VERIFY = gql`
   mutation Verify($tel: String!, $code: String!) {
      verify(tel: $tel, code: $code) {
         status
         token
      }
   }
`