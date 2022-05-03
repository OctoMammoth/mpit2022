import Membership from './Membership/typeDefs'
import Group from './Group/typeDefs'
import Comment from './Comment/typeDefs'
import Like from './Like/typeDefs'
import Post from './Post/typeDefs'
import File from './File/typeDefs'
import User from './User/typeDefs'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { sdlInputs } from '@paljs/plugins'

export default mergeTypeDefs([
  sdlInputs(),
  User,
  File,
  Post,
  Like,
  Comment,
  Group,
  Membership,
])
