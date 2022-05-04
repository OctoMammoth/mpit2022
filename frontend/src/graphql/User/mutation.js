import {gql} from '@apollo/client'

export const AUTH = gql`
mutation AUTH ($tel: String!) {
  auth(tel: $tel){
    status
  }
}
`

export const VERIFY = gql`
mutation VERIFY($tel: String!, $code: String!) {
  verify(tel: $tel, code: $code) {
    status
    token
  }
}
`