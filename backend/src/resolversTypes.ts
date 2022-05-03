import * as Client from '@prisma/client'

import { Context } from './context'

import { GraphQLResolveInfo } from 'graphql'

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<R>

export interface Resolvers {
  [key: string]: { [key: string]: Resolver<any, any, any> }
  User?: User
  File?: File
  Post?: Post
  Like?: Like
  Comment?: Comment
  Group?: Group
  Membership?: Membership
  Query?: Query
  Mutation?: Mutation
  AggregateUser?: AggregateUser
  UserGroupByOutputType?: UserGroupByOutputType
  AggregateFile?: AggregateFile
  FileGroupByOutputType?: FileGroupByOutputType
  AggregatePost?: AggregatePost
  PostGroupByOutputType?: PostGroupByOutputType
  AggregateLike?: AggregateLike
  LikeGroupByOutputType?: LikeGroupByOutputType
  AggregateComment?: AggregateComment
  CommentGroupByOutputType?: CommentGroupByOutputType
  AggregateGroup?: AggregateGroup
  GroupGroupByOutputType?: GroupGroupByOutputType
  AggregateMembership?: AggregateMembership
  MembershipGroupByOutputType?: MembershipGroupByOutputType
  AffectedRowsOutput?: AffectedRowsOutput
  UserCountOutputType?: UserCountOutputType
  UserCountAggregateOutputType?: UserCountAggregateOutputType
  UserMinAggregateOutputType?: UserMinAggregateOutputType
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType
  FileCountAggregateOutputType?: FileCountAggregateOutputType
  FileMinAggregateOutputType?: FileMinAggregateOutputType
  FileMaxAggregateOutputType?: FileMaxAggregateOutputType
  PostCountOutputType?: PostCountOutputType
  PostCountAggregateOutputType?: PostCountAggregateOutputType
  PostMinAggregateOutputType?: PostMinAggregateOutputType
  PostMaxAggregateOutputType?: PostMaxAggregateOutputType
  LikeCountAggregateOutputType?: LikeCountAggregateOutputType
  LikeMinAggregateOutputType?: LikeMinAggregateOutputType
  LikeMaxAggregateOutputType?: LikeMaxAggregateOutputType
  CommentCountAggregateOutputType?: CommentCountAggregateOutputType
  CommentMinAggregateOutputType?: CommentMinAggregateOutputType
  CommentMaxAggregateOutputType?: CommentMaxAggregateOutputType
  GroupCountOutputType?: GroupCountOutputType
  GroupCountAggregateOutputType?: GroupCountAggregateOutputType
  GroupMinAggregateOutputType?: GroupMinAggregateOutputType
  GroupMaxAggregateOutputType?: GroupMaxAggregateOutputType
  MembershipCountAggregateOutputType?: MembershipCountAggregateOutputType
  MembershipMinAggregateOutputType?: MembershipMinAggregateOutputType
  MembershipMaxAggregateOutputType?: MembershipMaxAggregateOutputType
}

export interface User {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.User, {}, string>
  tel?: Resolver<Client.User, {}, string>
  code?: Resolver<Client.User, {}, string | null>
  role?: Resolver<Client.User, {}, string | null>
  surname?: Resolver<Client.User, {}, string | null>
  name?: Resolver<Client.User, {}, string | null>
  createdPosts?: Resolver<
    Client.User,
    UserCreatedPostsArgs,
    Client.Post[] | null
  >
  likes?: Resolver<Client.User, UserLikesArgs, Client.Like[] | null>
  comments?: Resolver<Client.User, UserCommentsArgs, Client.Comment[] | null>
  groups?: Resolver<Client.User, UserGroupsArgs, Client.Membership[] | null>
  _count?: Resolver<Client.User, {}, Client.Prisma.UserCountOutputType>
}

export interface File {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.File, {}, string>
  filename?: Resolver<Client.File, {}, string>
  mimetype?: Resolver<Client.File, {}, string>
  encoding?: Resolver<Client.File, {}, string>
  uri?: Resolver<Client.File, {}, string>
}

export interface Post {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Post, {}, string>
  createdAt?: Resolver<Client.Post, {}, Date>
  updatedAt?: Resolver<Client.Post, {}, Date>
  blocked?: Resolver<Client.Post, {}, boolean>
  picture?: Resolver<Client.Post, {}, string[] | null>
  title?: Resolver<Client.Post, {}, string>
  description?: Resolver<Client.Post, {}, string>
  comments?: Resolver<Client.Post, PostCommentsArgs, Client.Comment[] | null>
  createdBy?: Resolver<Client.Post, {}, Client.User>
  userId?: Resolver<Client.Post, {}, string>
  likes?: Resolver<Client.Post, PostLikesArgs, Client.Like[] | null>
  _count?: Resolver<Client.Post, {}, Client.Prisma.PostCountOutputType>
}

export interface Like {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Like, {}, string>
  createAt?: Resolver<Client.Like, {}, Date>
  post?: Resolver<Client.Like, {}, Client.Post>
  postId?: Resolver<Client.Like, {}, string>
  user?: Resolver<Client.Like, {}, Client.User>
  userId?: Resolver<Client.Like, {}, string>
}

export interface Comment {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Comment, {}, string>
  createdAt?: Resolver<Client.Comment, {}, Date>
  updatedAt?: Resolver<Client.Comment, {}, Date>
  blocked?: Resolver<Client.Comment, {}, boolean>
  text?: Resolver<Client.Comment, {}, string>
  createdBy?: Resolver<Client.Comment, {}, Client.User>
  Post?: Resolver<Client.Comment, {}, Client.Post | null>
  postId?: Resolver<Client.Comment, {}, string | null>
  userId?: Resolver<Client.Comment, {}, string>
}

export interface Group {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Group, {}, string>
  createdAt?: Resolver<Client.Group, {}, Date>
  members?: Resolver<Client.Group, GroupMembersArgs, Client.Membership[] | null>
  _count?: Resolver<Client.Group, {}, Client.Prisma.GroupCountOutputType>
}

export interface Membership {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Membership, {}, string>
  createdAt?: Resolver<Client.Membership, {}, Date>
  User?: Resolver<Client.Membership, {}, Client.User | null>
  userId?: Resolver<Client.Membership, {}, string | null>
  Group?: Resolver<Client.Membership, {}, Client.Group | null>
  groupId?: Resolver<Client.Membership, {}, string | null>
}

export interface Query {
  [key: string]: Resolver<any, any, any>
  findFirstUser?: Resolver<{}, FindFirstUserArgs, Client.User | null>
  findManyUser?: Resolver<{}, FindManyUserArgs, Client.User[]>
  findManyUserCount?: Resolver<{}, FindManyUserArgs, number>
  aggregateUser?: Resolver<
    {},
    AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<AggregateUserArgs>
  >
  groupByUser?: Resolver<
    {},
    GroupByUserArgs,
    Client.Prisma.UserGroupByOutputType[]
  >
  findUniqueUser?: Resolver<{}, FindUniqueUserArgs, Client.User | null>
  findFirstFile?: Resolver<{}, FindFirstFileArgs, Client.File | null>
  findManyFile?: Resolver<{}, FindManyFileArgs, Client.File[]>
  findManyFileCount?: Resolver<{}, FindManyFileArgs, number>
  aggregateFile?: Resolver<
    {},
    AggregateFileArgs,
    Client.Prisma.GetFileAggregateType<AggregateFileArgs>
  >
  groupByFile?: Resolver<
    {},
    GroupByFileArgs,
    Client.Prisma.FileGroupByOutputType[]
  >
  findUniqueFile?: Resolver<{}, FindUniqueFileArgs, Client.File | null>
  findFirstPost?: Resolver<{}, FindFirstPostArgs, Client.Post | null>
  findManyPost?: Resolver<{}, FindManyPostArgs, Client.Post[]>
  findManyPostCount?: Resolver<{}, FindManyPostArgs, number>
  aggregatePost?: Resolver<
    {},
    AggregatePostArgs,
    Client.Prisma.GetPostAggregateType<AggregatePostArgs>
  >
  groupByPost?: Resolver<
    {},
    GroupByPostArgs,
    Client.Prisma.PostGroupByOutputType[]
  >
  findUniquePost?: Resolver<{}, FindUniquePostArgs, Client.Post | null>
  findFirstLike?: Resolver<{}, FindFirstLikeArgs, Client.Like | null>
  findManyLike?: Resolver<{}, FindManyLikeArgs, Client.Like[]>
  findManyLikeCount?: Resolver<{}, FindManyLikeArgs, number>
  aggregateLike?: Resolver<
    {},
    AggregateLikeArgs,
    Client.Prisma.GetLikeAggregateType<AggregateLikeArgs>
  >
  groupByLike?: Resolver<
    {},
    GroupByLikeArgs,
    Client.Prisma.LikeGroupByOutputType[]
  >
  findUniqueLike?: Resolver<{}, FindUniqueLikeArgs, Client.Like | null>
  findFirstComment?: Resolver<{}, FindFirstCommentArgs, Client.Comment | null>
  findManyComment?: Resolver<{}, FindManyCommentArgs, Client.Comment[]>
  findManyCommentCount?: Resolver<{}, FindManyCommentArgs, number>
  aggregateComment?: Resolver<
    {},
    AggregateCommentArgs,
    Client.Prisma.GetCommentAggregateType<AggregateCommentArgs>
  >
  groupByComment?: Resolver<
    {},
    GroupByCommentArgs,
    Client.Prisma.CommentGroupByOutputType[]
  >
  findUniqueComment?: Resolver<{}, FindUniqueCommentArgs, Client.Comment | null>
  findFirstGroup?: Resolver<{}, FindFirstGroupArgs, Client.Group | null>
  findManyGroup?: Resolver<{}, FindManyGroupArgs, Client.Group[]>
  findManyGroupCount?: Resolver<{}, FindManyGroupArgs, number>
  aggregateGroup?: Resolver<
    {},
    AggregateGroupArgs,
    Client.Prisma.GetGroupAggregateType<AggregateGroupArgs>
  >
  groupByGroup?: Resolver<
    {},
    GroupByGroupArgs,
    Client.Prisma.GroupGroupByOutputType[]
  >
  findUniqueGroup?: Resolver<{}, FindUniqueGroupArgs, Client.Group | null>
  findFirstMembership?: Resolver<
    {},
    FindFirstMembershipArgs,
    Client.Membership | null
  >
  findManyMembership?: Resolver<{}, FindManyMembershipArgs, Client.Membership[]>
  findManyMembershipCount?: Resolver<{}, FindManyMembershipArgs, number>
  aggregateMembership?: Resolver<
    {},
    AggregateMembershipArgs,
    Client.Prisma.GetMembershipAggregateType<AggregateMembershipArgs>
  >
  groupByMembership?: Resolver<
    {},
    GroupByMembershipArgs,
    Client.Prisma.MembershipGroupByOutputType[]
  >
  findUniqueMembership?: Resolver<
    {},
    FindUniqueMembershipArgs,
    Client.Membership | null
  >
}

export interface Mutation {
  [key: string]: Resolver<any, any, any>
  createOneUser?: Resolver<{}, CreateOneUserArgs, Client.User>
  upsertOneUser?: Resolver<{}, UpsertOneUserArgs, Client.User>
  createManyUser?: Resolver<{}, CreateManyUserArgs, Client.Prisma.BatchPayload>
  deleteOneUser?: Resolver<{}, DeleteOneUserArgs, Client.User | null>
  updateOneUser?: Resolver<{}, UpdateOneUserArgs, Client.User | null>
  updateManyUser?: Resolver<{}, UpdateManyUserArgs, Client.Prisma.BatchPayload>
  deleteManyUser?: Resolver<{}, DeleteManyUserArgs, Client.Prisma.BatchPayload>
  createOneFile?: Resolver<{}, CreateOneFileArgs, Client.File>
  upsertOneFile?: Resolver<{}, UpsertOneFileArgs, Client.File>
  createManyFile?: Resolver<{}, CreateManyFileArgs, Client.Prisma.BatchPayload>
  deleteOneFile?: Resolver<{}, DeleteOneFileArgs, Client.File | null>
  updateOneFile?: Resolver<{}, UpdateOneFileArgs, Client.File | null>
  updateManyFile?: Resolver<{}, UpdateManyFileArgs, Client.Prisma.BatchPayload>
  deleteManyFile?: Resolver<{}, DeleteManyFileArgs, Client.Prisma.BatchPayload>
  createOnePost?: Resolver<{}, CreateOnePostArgs, Client.Post>
  upsertOnePost?: Resolver<{}, UpsertOnePostArgs, Client.Post>
  createManyPost?: Resolver<{}, CreateManyPostArgs, Client.Prisma.BatchPayload>
  deleteOnePost?: Resolver<{}, DeleteOnePostArgs, Client.Post | null>
  updateOnePost?: Resolver<{}, UpdateOnePostArgs, Client.Post | null>
  updateManyPost?: Resolver<{}, UpdateManyPostArgs, Client.Prisma.BatchPayload>
  deleteManyPost?: Resolver<{}, DeleteManyPostArgs, Client.Prisma.BatchPayload>
  createOneLike?: Resolver<{}, CreateOneLikeArgs, Client.Like>
  upsertOneLike?: Resolver<{}, UpsertOneLikeArgs, Client.Like>
  createManyLike?: Resolver<{}, CreateManyLikeArgs, Client.Prisma.BatchPayload>
  deleteOneLike?: Resolver<{}, DeleteOneLikeArgs, Client.Like | null>
  updateOneLike?: Resolver<{}, UpdateOneLikeArgs, Client.Like | null>
  updateManyLike?: Resolver<{}, UpdateManyLikeArgs, Client.Prisma.BatchPayload>
  deleteManyLike?: Resolver<{}, DeleteManyLikeArgs, Client.Prisma.BatchPayload>
  createOneComment?: Resolver<{}, CreateOneCommentArgs, Client.Comment>
  upsertOneComment?: Resolver<{}, UpsertOneCommentArgs, Client.Comment>
  createManyComment?: Resolver<
    {},
    CreateManyCommentArgs,
    Client.Prisma.BatchPayload
  >
  deleteOneComment?: Resolver<{}, DeleteOneCommentArgs, Client.Comment | null>
  updateOneComment?: Resolver<{}, UpdateOneCommentArgs, Client.Comment | null>
  updateManyComment?: Resolver<
    {},
    UpdateManyCommentArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyComment?: Resolver<
    {},
    DeleteManyCommentArgs,
    Client.Prisma.BatchPayload
  >
  createOneGroup?: Resolver<{}, CreateOneGroupArgs, Client.Group>
  upsertOneGroup?: Resolver<{}, UpsertOneGroupArgs, Client.Group>
  createManyGroup?: Resolver<
    {},
    CreateManyGroupArgs,
    Client.Prisma.BatchPayload
  >
  deleteOneGroup?: Resolver<{}, DeleteOneGroupArgs, Client.Group | null>
  updateOneGroup?: Resolver<{}, UpdateOneGroupArgs, Client.Group | null>
  updateManyGroup?: Resolver<
    {},
    UpdateManyGroupArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyGroup?: Resolver<
    {},
    DeleteManyGroupArgs,
    Client.Prisma.BatchPayload
  >
  createOneMembership?: Resolver<{}, CreateOneMembershipArgs, Client.Membership>
  upsertOneMembership?: Resolver<{}, UpsertOneMembershipArgs, Client.Membership>
  createManyMembership?: Resolver<
    {},
    CreateManyMembershipArgs,
    Client.Prisma.BatchPayload
  >
  deleteOneMembership?: Resolver<
    {},
    DeleteOneMembershipArgs,
    Client.Membership | null
  >
  updateOneMembership?: Resolver<
    {},
    UpdateOneMembershipArgs,
    Client.Membership | null
  >
  updateManyMembership?: Resolver<
    {},
    UpdateManyMembershipArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyMembership?: Resolver<
    {},
    DeleteManyMembershipArgs,
    Client.Prisma.BatchPayload
  >
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>
  queryRaw?: Resolver<{}, QueryRawArgs, any>
}

export interface AggregateUser {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export interface UserGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  tel?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  code?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  role?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  surname?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  _count?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export interface AggregateFile {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateFile,
    {},
    Client.Prisma.FileCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateFile,
    {},
    Client.Prisma.FileMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateFile,
    {},
    Client.Prisma.FileMaxAggregateOutputType | null
  >
}

export interface FileGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.FileGroupByOutputType, {}, string>
  filename?: Resolver<Client.Prisma.FileGroupByOutputType, {}, string>
  mimetype?: Resolver<Client.Prisma.FileGroupByOutputType, {}, string>
  encoding?: Resolver<Client.Prisma.FileGroupByOutputType, {}, string>
  uri?: Resolver<Client.Prisma.FileGroupByOutputType, {}, string>
  _count?: Resolver<
    Client.Prisma.FileGroupByOutputType,
    {},
    Client.Prisma.FileCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.FileGroupByOutputType,
    {},
    Client.Prisma.FileMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.FileGroupByOutputType,
    {},
    Client.Prisma.FileMaxAggregateOutputType | null
  >
}

export interface AggregatePost {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostMaxAggregateOutputType | null
  >
}

export interface PostGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>
  createdAt?: Resolver<Client.Prisma.PostGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.PostGroupByOutputType, {}, Date>
  blocked?: Resolver<Client.Prisma.PostGroupByOutputType, {}, boolean>
  picture?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string[] | null>
  title?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>
  description?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>
  userId?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>
  _count?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostMaxAggregateOutputType | null
  >
}

export interface AggregateLike {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateLike,
    {},
    Client.Prisma.LikeCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateLike,
    {},
    Client.Prisma.LikeMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateLike,
    {},
    Client.Prisma.LikeMaxAggregateOutputType | null
  >
}

export interface LikeGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.LikeGroupByOutputType, {}, string>
  createAt?: Resolver<Client.Prisma.LikeGroupByOutputType, {}, Date>
  postId?: Resolver<Client.Prisma.LikeGroupByOutputType, {}, string>
  userId?: Resolver<Client.Prisma.LikeGroupByOutputType, {}, string>
  _count?: Resolver<
    Client.Prisma.LikeGroupByOutputType,
    {},
    Client.Prisma.LikeCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.LikeGroupByOutputType,
    {},
    Client.Prisma.LikeMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.LikeGroupByOutputType,
    {},
    Client.Prisma.LikeMaxAggregateOutputType | null
  >
}

export interface AggregateComment {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateComment,
    {},
    Client.Prisma.CommentCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateComment,
    {},
    Client.Prisma.CommentMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateComment,
    {},
    Client.Prisma.CommentMaxAggregateOutputType | null
  >
}

export interface CommentGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CommentGroupByOutputType, {}, string>
  createdAt?: Resolver<Client.Prisma.CommentGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.CommentGroupByOutputType, {}, Date>
  blocked?: Resolver<Client.Prisma.CommentGroupByOutputType, {}, boolean>
  text?: Resolver<Client.Prisma.CommentGroupByOutputType, {}, string>
  postId?: Resolver<Client.Prisma.CommentGroupByOutputType, {}, string | null>
  userId?: Resolver<Client.Prisma.CommentGroupByOutputType, {}, string>
  _count?: Resolver<
    Client.Prisma.CommentGroupByOutputType,
    {},
    Client.Prisma.CommentCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.CommentGroupByOutputType,
    {},
    Client.Prisma.CommentMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.CommentGroupByOutputType,
    {},
    Client.Prisma.CommentMaxAggregateOutputType | null
  >
}

export interface AggregateGroup {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateGroup,
    {},
    Client.Prisma.GroupCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateGroup,
    {},
    Client.Prisma.GroupMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateGroup,
    {},
    Client.Prisma.GroupMaxAggregateOutputType | null
  >
}

export interface GroupGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.GroupGroupByOutputType, {}, string>
  createdAt?: Resolver<Client.Prisma.GroupGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.GroupGroupByOutputType,
    {},
    Client.Prisma.GroupCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.GroupGroupByOutputType,
    {},
    Client.Prisma.GroupMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.GroupGroupByOutputType,
    {},
    Client.Prisma.GroupMaxAggregateOutputType | null
  >
}

export interface AggregateMembership {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateMembership,
    {},
    Client.Prisma.MembershipCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateMembership,
    {},
    Client.Prisma.MembershipMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateMembership,
    {},
    Client.Prisma.MembershipMaxAggregateOutputType | null
  >
}

export interface MembershipGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.MembershipGroupByOutputType, {}, string>
  createdAt?: Resolver<Client.Prisma.MembershipGroupByOutputType, {}, Date>
  userId?: Resolver<
    Client.Prisma.MembershipGroupByOutputType,
    {},
    string | null
  >
  groupId?: Resolver<
    Client.Prisma.MembershipGroupByOutputType,
    {},
    string | null
  >
  _count?: Resolver<
    Client.Prisma.MembershipGroupByOutputType,
    {},
    Client.Prisma.MembershipCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.MembershipGroupByOutputType,
    {},
    Client.Prisma.MembershipMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.MembershipGroupByOutputType,
    {},
    Client.Prisma.MembershipMaxAggregateOutputType | null
  >
}

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>
}

export interface UserCountOutputType {
  [key: string]: Resolver<any, any, any>
  createdPosts?: Resolver<Client.Prisma.UserCountOutputType, {}, number>
  likes?: Resolver<Client.Prisma.UserCountOutputType, {}, number>
  comments?: Resolver<Client.Prisma.UserCountOutputType, {}, number>
  groups?: Resolver<Client.Prisma.UserCountOutputType, {}, number>
}

export interface UserCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  tel?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  code?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  role?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  surname?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
}

export interface UserMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  tel?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  code?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  role?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  surname?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >
  name?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
}

export interface UserMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  tel?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  code?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  role?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  surname?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >
  name?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
}

export interface FileCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.FileCountAggregateOutputType, {}, number>
  filename?: Resolver<Client.Prisma.FileCountAggregateOutputType, {}, number>
  mimetype?: Resolver<Client.Prisma.FileCountAggregateOutputType, {}, number>
  encoding?: Resolver<Client.Prisma.FileCountAggregateOutputType, {}, number>
  uri?: Resolver<Client.Prisma.FileCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.FileCountAggregateOutputType, {}, number>
}

export interface FileMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.FileMinAggregateOutputType, {}, string | null>
  filename?: Resolver<
    Client.Prisma.FileMinAggregateOutputType,
    {},
    string | null
  >
  mimetype?: Resolver<
    Client.Prisma.FileMinAggregateOutputType,
    {},
    string | null
  >
  encoding?: Resolver<
    Client.Prisma.FileMinAggregateOutputType,
    {},
    string | null
  >
  uri?: Resolver<Client.Prisma.FileMinAggregateOutputType, {}, string | null>
}

export interface FileMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.FileMaxAggregateOutputType, {}, string | null>
  filename?: Resolver<
    Client.Prisma.FileMaxAggregateOutputType,
    {},
    string | null
  >
  mimetype?: Resolver<
    Client.Prisma.FileMaxAggregateOutputType,
    {},
    string | null
  >
  encoding?: Resolver<
    Client.Prisma.FileMaxAggregateOutputType,
    {},
    string | null
  >
  uri?: Resolver<Client.Prisma.FileMaxAggregateOutputType, {}, string | null>
}

export interface PostCountOutputType {
  [key: string]: Resolver<any, any, any>
  comments?: Resolver<Client.Prisma.PostCountOutputType, {}, number>
  likes?: Resolver<Client.Prisma.PostCountOutputType, {}, number>
}

export interface PostCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  createdAt?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  updatedAt?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  blocked?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  picture?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  title?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  description?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  userId?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
}

export interface PostMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    Date | null
  >
  blocked?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    boolean | null
  >
  title?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, string | null>
  description?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    string | null
  >
  userId?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, string | null>
}

export interface PostMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    Date | null
  >
  blocked?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    boolean | null
  >
  title?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, string | null>
  description?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    string | null
  >
  userId?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, string | null>
}

export interface LikeCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.LikeCountAggregateOutputType, {}, number>
  createAt?: Resolver<Client.Prisma.LikeCountAggregateOutputType, {}, number>
  postId?: Resolver<Client.Prisma.LikeCountAggregateOutputType, {}, number>
  userId?: Resolver<Client.Prisma.LikeCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.LikeCountAggregateOutputType, {}, number>
}

export interface LikeMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.LikeMinAggregateOutputType, {}, string | null>
  createAt?: Resolver<Client.Prisma.LikeMinAggregateOutputType, {}, Date | null>
  postId?: Resolver<Client.Prisma.LikeMinAggregateOutputType, {}, string | null>
  userId?: Resolver<Client.Prisma.LikeMinAggregateOutputType, {}, string | null>
}

export interface LikeMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.LikeMaxAggregateOutputType, {}, string | null>
  createAt?: Resolver<Client.Prisma.LikeMaxAggregateOutputType, {}, Date | null>
  postId?: Resolver<Client.Prisma.LikeMaxAggregateOutputType, {}, string | null>
  userId?: Resolver<Client.Prisma.LikeMaxAggregateOutputType, {}, string | null>
}

export interface CommentCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CommentCountAggregateOutputType, {}, number>
  createdAt?: Resolver<
    Client.Prisma.CommentCountAggregateOutputType,
    {},
    number
  >
  updatedAt?: Resolver<
    Client.Prisma.CommentCountAggregateOutputType,
    {},
    number
  >
  blocked?: Resolver<Client.Prisma.CommentCountAggregateOutputType, {}, number>
  text?: Resolver<Client.Prisma.CommentCountAggregateOutputType, {}, number>
  postId?: Resolver<Client.Prisma.CommentCountAggregateOutputType, {}, number>
  userId?: Resolver<Client.Prisma.CommentCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.CommentCountAggregateOutputType, {}, number>
}

export interface CommentMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CommentMinAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.CommentMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.CommentMinAggregateOutputType,
    {},
    Date | null
  >
  blocked?: Resolver<
    Client.Prisma.CommentMinAggregateOutputType,
    {},
    boolean | null
  >
  text?: Resolver<
    Client.Prisma.CommentMinAggregateOutputType,
    {},
    string | null
  >
  postId?: Resolver<
    Client.Prisma.CommentMinAggregateOutputType,
    {},
    string | null
  >
  userId?: Resolver<
    Client.Prisma.CommentMinAggregateOutputType,
    {},
    string | null
  >
}

export interface CommentMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CommentMaxAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.CommentMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.CommentMaxAggregateOutputType,
    {},
    Date | null
  >
  blocked?: Resolver<
    Client.Prisma.CommentMaxAggregateOutputType,
    {},
    boolean | null
  >
  text?: Resolver<
    Client.Prisma.CommentMaxAggregateOutputType,
    {},
    string | null
  >
  postId?: Resolver<
    Client.Prisma.CommentMaxAggregateOutputType,
    {},
    string | null
  >
  userId?: Resolver<
    Client.Prisma.CommentMaxAggregateOutputType,
    {},
    string | null
  >
}

export interface GroupCountOutputType {
  [key: string]: Resolver<any, any, any>
  members?: Resolver<Client.Prisma.GroupCountOutputType, {}, number>
}

export interface GroupCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.GroupCountAggregateOutputType, {}, number>
  createdAt?: Resolver<Client.Prisma.GroupCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.GroupCountAggregateOutputType, {}, number>
}

export interface GroupMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.GroupMinAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.GroupMinAggregateOutputType,
    {},
    Date | null
  >
}

export interface GroupMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.GroupMaxAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.GroupMaxAggregateOutputType,
    {},
    Date | null
  >
}

export interface MembershipCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.MembershipCountAggregateOutputType, {}, number>
  createdAt?: Resolver<
    Client.Prisma.MembershipCountAggregateOutputType,
    {},
    number
  >
  userId?: Resolver<
    Client.Prisma.MembershipCountAggregateOutputType,
    {},
    number
  >
  groupId?: Resolver<
    Client.Prisma.MembershipCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<Client.Prisma.MembershipCountAggregateOutputType, {}, number>
}

export interface MembershipMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<
    Client.Prisma.MembershipMinAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.MembershipMinAggregateOutputType,
    {},
    Date | null
  >
  userId?: Resolver<
    Client.Prisma.MembershipMinAggregateOutputType,
    {},
    string | null
  >
  groupId?: Resolver<
    Client.Prisma.MembershipMinAggregateOutputType,
    {},
    string | null
  >
}

export interface MembershipMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<
    Client.Prisma.MembershipMaxAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.MembershipMaxAggregateOutputType,
    {},
    Date | null
  >
  userId?: Resolver<
    Client.Prisma.MembershipMaxAggregateOutputType,
    {},
    string | null
  >
  groupId?: Resolver<
    Client.Prisma.MembershipMaxAggregateOutputType,
    {},
    string | null
  >
}

export interface UserCreatedPostsArgs {
  where?: PostWhereInput | null
  orderBy?: PostOrderByWithRelationInput[] | null
  cursor?: PostWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: PostScalarFieldEnum[] | null
}

export interface UserLikesArgs {
  where?: LikeWhereInput | null
  orderBy?: LikeOrderByWithRelationInput[] | null
  cursor?: LikeWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: LikeScalarFieldEnum[] | null
}

export interface UserCommentsArgs {
  where?: CommentWhereInput | null
  orderBy?: CommentOrderByWithRelationInput[] | null
  cursor?: CommentWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: CommentScalarFieldEnum[] | null
}

export interface UserGroupsArgs {
  where?: MembershipWhereInput | null
  orderBy?: MembershipOrderByWithRelationInput[] | null
  cursor?: MembershipWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: MembershipScalarFieldEnum[] | null
}

export interface PostCommentsArgs {
  where?: CommentWhereInput | null
  orderBy?: CommentOrderByWithRelationInput[] | null
  cursor?: CommentWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: CommentScalarFieldEnum[] | null
}

export interface PostLikesArgs {
  where?: LikeWhereInput | null
  orderBy?: LikeOrderByWithRelationInput[] | null
  cursor?: LikeWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: LikeScalarFieldEnum[] | null
}

export interface GroupMembersArgs {
  where?: MembershipWhereInput | null
  orderBy?: MembershipOrderByWithRelationInput[] | null
  cursor?: MembershipWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: MembershipScalarFieldEnum[] | null
}

export interface FindFirstUserArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByWithRelationInput[] | null
  cursor?: UserWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: UserScalarFieldEnum[] | null
}

export interface FindManyUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export interface AggregateUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.UserCountAggregateInputType
  _min?: Client.Prisma.UserMinAggregateInputType
  _max?: Client.Prisma.UserMaxAggregateInputType
}

export interface GroupByUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithAggregationInput[]
  by: UserScalarFieldEnum[]
  having?: UserScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueUserArgs {
  where: UserWhereUniqueInput | null
}

export interface FindFirstFileArgs {
  where?: FileWhereInput | null
  orderBy?: FileOrderByWithRelationInput[] | null
  cursor?: FileWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: FileScalarFieldEnum[] | null
}

export interface FindManyFileArgs {
  where?: FileWhereInput
  orderBy?: FileOrderByWithRelationInput[]
  cursor?: FileWhereUniqueInput
  take?: number
  skip?: number
  distinct?: FileScalarFieldEnum[]
}

export interface AggregateFileArgs {
  where?: FileWhereInput
  orderBy?: FileOrderByWithRelationInput[]
  cursor?: FileWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.FileCountAggregateInputType
  _min?: Client.Prisma.FileMinAggregateInputType
  _max?: Client.Prisma.FileMaxAggregateInputType
}

export interface GroupByFileArgs {
  where?: FileWhereInput
  orderBy?: FileOrderByWithAggregationInput[]
  by: FileScalarFieldEnum[]
  having?: FileScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueFileArgs {
  where: FileWhereUniqueInput | null
}

export interface FindFirstPostArgs {
  where?: PostWhereInput | null
  orderBy?: PostOrderByWithRelationInput[] | null
  cursor?: PostWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: PostScalarFieldEnum[] | null
}

export interface FindManyPostArgs {
  where?: PostWhereInput
  orderBy?: PostOrderByWithRelationInput[]
  cursor?: PostWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PostScalarFieldEnum[]
}

export interface AggregatePostArgs {
  where?: PostWhereInput
  orderBy?: PostOrderByWithRelationInput[]
  cursor?: PostWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.PostCountAggregateInputType
  _min?: Client.Prisma.PostMinAggregateInputType
  _max?: Client.Prisma.PostMaxAggregateInputType
}

export interface GroupByPostArgs {
  where?: PostWhereInput
  orderBy?: PostOrderByWithAggregationInput[]
  by: PostScalarFieldEnum[]
  having?: PostScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniquePostArgs {
  where: PostWhereUniqueInput | null
}

export interface FindFirstLikeArgs {
  where?: LikeWhereInput | null
  orderBy?: LikeOrderByWithRelationInput[] | null
  cursor?: LikeWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: LikeScalarFieldEnum[] | null
}

export interface FindManyLikeArgs {
  where?: LikeWhereInput
  orderBy?: LikeOrderByWithRelationInput[]
  cursor?: LikeWhereUniqueInput
  take?: number
  skip?: number
  distinct?: LikeScalarFieldEnum[]
}

export interface AggregateLikeArgs {
  where?: LikeWhereInput
  orderBy?: LikeOrderByWithRelationInput[]
  cursor?: LikeWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.LikeCountAggregateInputType
  _min?: Client.Prisma.LikeMinAggregateInputType
  _max?: Client.Prisma.LikeMaxAggregateInputType
}

export interface GroupByLikeArgs {
  where?: LikeWhereInput
  orderBy?: LikeOrderByWithAggregationInput[]
  by: LikeScalarFieldEnum[]
  having?: LikeScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueLikeArgs {
  where: LikeWhereUniqueInput | null
}

export interface FindFirstCommentArgs {
  where?: CommentWhereInput | null
  orderBy?: CommentOrderByWithRelationInput[] | null
  cursor?: CommentWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: CommentScalarFieldEnum[] | null
}

export interface FindManyCommentArgs {
  where?: CommentWhereInput
  orderBy?: CommentOrderByWithRelationInput[]
  cursor?: CommentWhereUniqueInput
  take?: number
  skip?: number
  distinct?: CommentScalarFieldEnum[]
}

export interface AggregateCommentArgs {
  where?: CommentWhereInput
  orderBy?: CommentOrderByWithRelationInput[]
  cursor?: CommentWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.CommentCountAggregateInputType
  _min?: Client.Prisma.CommentMinAggregateInputType
  _max?: Client.Prisma.CommentMaxAggregateInputType
}

export interface GroupByCommentArgs {
  where?: CommentWhereInput
  orderBy?: CommentOrderByWithAggregationInput[]
  by: CommentScalarFieldEnum[]
  having?: CommentScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueCommentArgs {
  where: CommentWhereUniqueInput | null
}

export interface FindFirstGroupArgs {
  where?: GroupWhereInput | null
  orderBy?: GroupOrderByWithRelationInput[] | null
  cursor?: GroupWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: GroupScalarFieldEnum[] | null
}

export interface FindManyGroupArgs {
  where?: GroupWhereInput
  orderBy?: GroupOrderByWithRelationInput[]
  cursor?: GroupWhereUniqueInput
  take?: number
  skip?: number
  distinct?: GroupScalarFieldEnum[]
}

export interface AggregateGroupArgs {
  where?: GroupWhereInput
  orderBy?: GroupOrderByWithRelationInput[]
  cursor?: GroupWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.GroupCountAggregateInputType
  _min?: Client.Prisma.GroupMinAggregateInputType
  _max?: Client.Prisma.GroupMaxAggregateInputType
}

export interface GroupByGroupArgs {
  where?: GroupWhereInput
  orderBy?: GroupOrderByWithAggregationInput[]
  by: GroupScalarFieldEnum[]
  having?: GroupScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueGroupArgs {
  where: GroupWhereUniqueInput | null
}

export interface FindFirstMembershipArgs {
  where?: MembershipWhereInput | null
  orderBy?: MembershipOrderByWithRelationInput[] | null
  cursor?: MembershipWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: MembershipScalarFieldEnum[] | null
}

export interface FindManyMembershipArgs {
  where?: MembershipWhereInput
  orderBy?: MembershipOrderByWithRelationInput[]
  cursor?: MembershipWhereUniqueInput
  take?: number
  skip?: number
  distinct?: MembershipScalarFieldEnum[]
}

export interface AggregateMembershipArgs {
  where?: MembershipWhereInput
  orderBy?: MembershipOrderByWithRelationInput[]
  cursor?: MembershipWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.MembershipCountAggregateInputType
  _min?: Client.Prisma.MembershipMinAggregateInputType
  _max?: Client.Prisma.MembershipMaxAggregateInputType
}

export interface GroupByMembershipArgs {
  where?: MembershipWhereInput
  orderBy?: MembershipOrderByWithAggregationInput[]
  by: MembershipScalarFieldEnum[]
  having?: MembershipScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueMembershipArgs {
  where: MembershipWhereUniqueInput | null
}

export interface CreateOneUserArgs {
  data: UserCreateInput
}

export interface UpsertOneUserArgs {
  where: UserWhereUniqueInput
  create: UserCreateInput
  update: UserUpdateInput
}

export interface CreateManyUserArgs {
  data: UserCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneUserArgs {
  where: UserWhereUniqueInput | null
}

export interface UpdateOneUserArgs {
  data: UserUpdateInput | null
  where: UserWhereUniqueInput | null
}

export interface UpdateManyUserArgs {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
}

export interface DeleteManyUserArgs {
  where?: UserWhereInput
}

export interface CreateOneFileArgs {
  data: FileCreateInput
}

export interface UpsertOneFileArgs {
  where: FileWhereUniqueInput
  create: FileCreateInput
  update: FileUpdateInput
}

export interface CreateManyFileArgs {
  data: FileCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneFileArgs {
  where: FileWhereUniqueInput | null
}

export interface UpdateOneFileArgs {
  data: FileUpdateInput | null
  where: FileWhereUniqueInput | null
}

export interface UpdateManyFileArgs {
  data: FileUpdateManyMutationInput
  where?: FileWhereInput
}

export interface DeleteManyFileArgs {
  where?: FileWhereInput
}

export interface CreateOnePostArgs {
  data: PostCreateInput
}

export interface UpsertOnePostArgs {
  where: PostWhereUniqueInput
  create: PostCreateInput
  update: PostUpdateInput
}

export interface CreateManyPostArgs {
  data: PostCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOnePostArgs {
  where: PostWhereUniqueInput | null
}

export interface UpdateOnePostArgs {
  data: PostUpdateInput | null
  where: PostWhereUniqueInput | null
}

export interface UpdateManyPostArgs {
  data: PostUpdateManyMutationInput
  where?: PostWhereInput
}

export interface DeleteManyPostArgs {
  where?: PostWhereInput
}

export interface CreateOneLikeArgs {
  data: LikeCreateInput
}

export interface UpsertOneLikeArgs {
  where: LikeWhereUniqueInput
  create: LikeCreateInput
  update: LikeUpdateInput
}

export interface CreateManyLikeArgs {
  data: LikeCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneLikeArgs {
  where: LikeWhereUniqueInput | null
}

export interface UpdateOneLikeArgs {
  data: LikeUpdateInput | null
  where: LikeWhereUniqueInput | null
}

export interface UpdateManyLikeArgs {
  data: LikeUpdateManyMutationInput
  where?: LikeWhereInput
}

export interface DeleteManyLikeArgs {
  where?: LikeWhereInput
}

export interface CreateOneCommentArgs {
  data: CommentCreateInput
}

export interface UpsertOneCommentArgs {
  where: CommentWhereUniqueInput
  create: CommentCreateInput
  update: CommentUpdateInput
}

export interface CreateManyCommentArgs {
  data: CommentCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneCommentArgs {
  where: CommentWhereUniqueInput | null
}

export interface UpdateOneCommentArgs {
  data: CommentUpdateInput | null
  where: CommentWhereUniqueInput | null
}

export interface UpdateManyCommentArgs {
  data: CommentUpdateManyMutationInput
  where?: CommentWhereInput
}

export interface DeleteManyCommentArgs {
  where?: CommentWhereInput
}

export interface CreateOneGroupArgs {
  data: GroupCreateInput
}

export interface UpsertOneGroupArgs {
  where: GroupWhereUniqueInput
  create: GroupCreateInput
  update: GroupUpdateInput
}

export interface CreateManyGroupArgs {
  data: GroupCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneGroupArgs {
  where: GroupWhereUniqueInput | null
}

export interface UpdateOneGroupArgs {
  data: GroupUpdateInput | null
  where: GroupWhereUniqueInput | null
}

export interface UpdateManyGroupArgs {
  data: GroupUpdateManyMutationInput
  where?: GroupWhereInput
}

export interface DeleteManyGroupArgs {
  where?: GroupWhereInput
}

export interface CreateOneMembershipArgs {
  data: MembershipCreateInput
}

export interface UpsertOneMembershipArgs {
  where: MembershipWhereUniqueInput
  create: MembershipCreateInput
  update: MembershipUpdateInput
}

export interface CreateManyMembershipArgs {
  data: MembershipCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneMembershipArgs {
  where: MembershipWhereUniqueInput | null
}

export interface UpdateOneMembershipArgs {
  data: MembershipUpdateInput | null
  where: MembershipWhereUniqueInput | null
}

export interface UpdateManyMembershipArgs {
  data: MembershipUpdateManyMutationInput
  where?: MembershipWhereInput
}

export interface DeleteManyMembershipArgs {
  where?: MembershipWhereInput
}

export interface ExecuteRawArgs {
  query: string
  parameters?: any
}

export interface QueryRawArgs {
  query: string
  parameters?: any
}

export interface UserWhereInput {
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
  id?: StringFilter
  tel?: StringFilter
  code?: StringNullableFilter | null
  role?: StringNullableFilter | null
  surname?: StringNullableFilter | null
  name?: StringNullableFilter | null
  createdPosts?: PostListRelationFilter
  likes?: LikeListRelationFilter
  comments?: CommentListRelationFilter
  groups?: MembershipListRelationFilter
}

export interface UserOrderByWithRelationInput {
  id?: SortOrder
  tel?: SortOrder
  code?: SortOrder
  role?: SortOrder
  surname?: SortOrder
  name?: SortOrder
  createdPosts?: PostOrderByRelationAggregateInput
  likes?: LikeOrderByRelationAggregateInput
  comments?: CommentOrderByRelationAggregateInput
  groups?: MembershipOrderByRelationAggregateInput
}

export interface UserWhereUniqueInput {
  id?: string
  tel?: string
}

export interface UserOrderByWithAggregationInput {
  id?: SortOrder
  tel?: SortOrder
  code?: SortOrder
  role?: SortOrder
  surname?: SortOrder
  name?: SortOrder
  _count?: UserCountOrderByAggregateInput
  _max?: UserMaxOrderByAggregateInput
  _min?: UserMinOrderByAggregateInput
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[]
  OR?: UserScalarWhereWithAggregatesInput[]
  NOT?: UserScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  tel?: StringWithAggregatesFilter
  code?: StringNullableWithAggregatesFilter | null
  role?: StringNullableWithAggregatesFilter | null
  surname?: StringNullableWithAggregatesFilter | null
  name?: StringNullableWithAggregatesFilter | null
}

export interface FileWhereInput {
  AND?: FileWhereInput[]
  OR?: FileWhereInput[]
  NOT?: FileWhereInput[]
  id?: StringFilter
  filename?: StringFilter
  mimetype?: StringFilter
  encoding?: StringFilter
  uri?: StringFilter
}

export interface FileOrderByWithRelationInput {
  id?: SortOrder
  filename?: SortOrder
  mimetype?: SortOrder
  encoding?: SortOrder
  uri?: SortOrder
}

export interface FileWhereUniqueInput {
  id?: string
}

export interface FileOrderByWithAggregationInput {
  id?: SortOrder
  filename?: SortOrder
  mimetype?: SortOrder
  encoding?: SortOrder
  uri?: SortOrder
  _count?: FileCountOrderByAggregateInput
  _max?: FileMaxOrderByAggregateInput
  _min?: FileMinOrderByAggregateInput
}

export interface FileScalarWhereWithAggregatesInput {
  AND?: FileScalarWhereWithAggregatesInput[]
  OR?: FileScalarWhereWithAggregatesInput[]
  NOT?: FileScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  filename?: StringWithAggregatesFilter
  mimetype?: StringWithAggregatesFilter
  encoding?: StringWithAggregatesFilter
  uri?: StringWithAggregatesFilter
}

export interface PostWhereInput {
  AND?: PostWhereInput[]
  OR?: PostWhereInput[]
  NOT?: PostWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  blocked?: BoolFilter
  picture?: StringNullableListFilter
  title?: StringFilter
  description?: StringFilter
  comments?: CommentListRelationFilter
  createdBy?: UserWhereInput
  userId?: StringFilter
  likes?: LikeListRelationFilter
}

export interface PostOrderByWithRelationInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  blocked?: SortOrder
  picture?: SortOrder
  title?: SortOrder
  description?: SortOrder
  comments?: CommentOrderByRelationAggregateInput
  createdBy?: UserOrderByWithRelationInput
  userId?: SortOrder
  likes?: LikeOrderByRelationAggregateInput
}

export interface PostWhereUniqueInput {
  id?: string
}

export interface PostOrderByWithAggregationInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  blocked?: SortOrder
  picture?: SortOrder
  title?: SortOrder
  description?: SortOrder
  userId?: SortOrder
  _count?: PostCountOrderByAggregateInput
  _max?: PostMaxOrderByAggregateInput
  _min?: PostMinOrderByAggregateInput
}

export interface PostScalarWhereWithAggregatesInput {
  AND?: PostScalarWhereWithAggregatesInput[]
  OR?: PostScalarWhereWithAggregatesInput[]
  NOT?: PostScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
  blocked?: BoolWithAggregatesFilter
  picture?: StringNullableListFilter
  title?: StringWithAggregatesFilter
  description?: StringWithAggregatesFilter
  userId?: StringWithAggregatesFilter
}

export interface LikeWhereInput {
  AND?: LikeWhereInput[]
  OR?: LikeWhereInput[]
  NOT?: LikeWhereInput[]
  id?: StringFilter
  createAt?: DateTimeFilter
  post?: PostWhereInput
  postId?: StringFilter
  user?: UserWhereInput
  userId?: StringFilter
}

export interface LikeOrderByWithRelationInput {
  id?: SortOrder
  createAt?: SortOrder
  post?: PostOrderByWithRelationInput
  postId?: SortOrder
  user?: UserOrderByWithRelationInput
  userId?: SortOrder
}

export interface LikeWhereUniqueInput {
  id?: string
}

export interface LikeOrderByWithAggregationInput {
  id?: SortOrder
  createAt?: SortOrder
  postId?: SortOrder
  userId?: SortOrder
  _count?: LikeCountOrderByAggregateInput
  _max?: LikeMaxOrderByAggregateInput
  _min?: LikeMinOrderByAggregateInput
}

export interface LikeScalarWhereWithAggregatesInput {
  AND?: LikeScalarWhereWithAggregatesInput[]
  OR?: LikeScalarWhereWithAggregatesInput[]
  NOT?: LikeScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  createAt?: DateTimeWithAggregatesFilter
  postId?: StringWithAggregatesFilter
  userId?: StringWithAggregatesFilter
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[]
  OR?: CommentWhereInput[]
  NOT?: CommentWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  blocked?: BoolFilter
  text?: StringFilter
  createdBy?: UserWhereInput
  Post?: PostWhereInput | null
  postId?: StringNullableFilter | null
  userId?: StringFilter
}

export interface CommentOrderByWithRelationInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  blocked?: SortOrder
  text?: SortOrder
  createdBy?: UserOrderByWithRelationInput
  Post?: PostOrderByWithRelationInput
  postId?: SortOrder
  userId?: SortOrder
}

export interface CommentWhereUniqueInput {
  id?: string
}

export interface CommentOrderByWithAggregationInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  blocked?: SortOrder
  text?: SortOrder
  postId?: SortOrder
  userId?: SortOrder
  _count?: CommentCountOrderByAggregateInput
  _max?: CommentMaxOrderByAggregateInput
  _min?: CommentMinOrderByAggregateInput
}

export interface CommentScalarWhereWithAggregatesInput {
  AND?: CommentScalarWhereWithAggregatesInput[]
  OR?: CommentScalarWhereWithAggregatesInput[]
  NOT?: CommentScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
  blocked?: BoolWithAggregatesFilter
  text?: StringWithAggregatesFilter
  postId?: StringNullableWithAggregatesFilter | null
  userId?: StringWithAggregatesFilter
}

export interface GroupWhereInput {
  AND?: GroupWhereInput[]
  OR?: GroupWhereInput[]
  NOT?: GroupWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  members?: MembershipListRelationFilter
}

export interface GroupOrderByWithRelationInput {
  id?: SortOrder
  createdAt?: SortOrder
  members?: MembershipOrderByRelationAggregateInput
}

export interface GroupWhereUniqueInput {
  id?: string
}

export interface GroupOrderByWithAggregationInput {
  id?: SortOrder
  createdAt?: SortOrder
  _count?: GroupCountOrderByAggregateInput
  _max?: GroupMaxOrderByAggregateInput
  _min?: GroupMinOrderByAggregateInput
}

export interface GroupScalarWhereWithAggregatesInput {
  AND?: GroupScalarWhereWithAggregatesInput[]
  OR?: GroupScalarWhereWithAggregatesInput[]
  NOT?: GroupScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
}

export interface MembershipWhereInput {
  AND?: MembershipWhereInput[]
  OR?: MembershipWhereInput[]
  NOT?: MembershipWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  User?: UserWhereInput | null
  userId?: StringNullableFilter | null
  Group?: GroupWhereInput | null
  groupId?: StringNullableFilter | null
}

export interface MembershipOrderByWithRelationInput {
  id?: SortOrder
  createdAt?: SortOrder
  User?: UserOrderByWithRelationInput
  userId?: SortOrder
  Group?: GroupOrderByWithRelationInput
  groupId?: SortOrder
}

export interface MembershipWhereUniqueInput {
  id?: string
}

export interface MembershipOrderByWithAggregationInput {
  id?: SortOrder
  createdAt?: SortOrder
  userId?: SortOrder
  groupId?: SortOrder
  _count?: MembershipCountOrderByAggregateInput
  _max?: MembershipMaxOrderByAggregateInput
  _min?: MembershipMinOrderByAggregateInput
}

export interface MembershipScalarWhereWithAggregatesInput {
  AND?: MembershipScalarWhereWithAggregatesInput[]
  OR?: MembershipScalarWhereWithAggregatesInput[]
  NOT?: MembershipScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  userId?: StringNullableWithAggregatesFilter | null
  groupId?: StringNullableWithAggregatesFilter | null
}

export interface UserCreateInput {
  id?: string
  tel: string
  code?: string | null
  role?: string | null
  surname?: string | null
  name?: string | null
  createdPosts?: PostCreateNestedManyWithoutCreatedByInput
  likes?: LikeCreateNestedManyWithoutUserInput
  comments?: CommentCreateNestedManyWithoutCreatedByInput
  groups?: MembershipCreateNestedManyWithoutUserInput
}

export interface UserUncheckedCreateInput {
  id?: string
  tel: string
  code?: string | null
  role?: string | null
  surname?: string | null
  name?: string | null
  createdPosts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
  likes?: LikeUncheckedCreateNestedManyWithoutUserInput
  comments?: CommentUncheckedCreateNestedManyWithoutCreatedByInput
  groups?: MembershipUncheckedCreateNestedManyWithoutUserInput
}

export interface UserUpdateInput {
  id?: StringFieldUpdateOperationsInput
  tel?: StringFieldUpdateOperationsInput
  code?: NullableStringFieldUpdateOperationsInput | null
  role?: NullableStringFieldUpdateOperationsInput | null
  surname?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  createdPosts?: PostUpdateManyWithoutCreatedByInput
  likes?: LikeUpdateManyWithoutUserInput
  comments?: CommentUpdateManyWithoutCreatedByInput
  groups?: MembershipUpdateManyWithoutUserInput
}

export interface UserUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  tel?: StringFieldUpdateOperationsInput
  code?: NullableStringFieldUpdateOperationsInput | null
  role?: NullableStringFieldUpdateOperationsInput | null
  surname?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  createdPosts?: PostUncheckedUpdateManyWithoutCreatedByInput
  likes?: LikeUncheckedUpdateManyWithoutUserInput
  comments?: CommentUncheckedUpdateManyWithoutCreatedByInput
  groups?: MembershipUncheckedUpdateManyWithoutUserInput
}

export interface UserCreateManyInput {
  id?: string
  tel: string
  code?: string | null
  role?: string | null
  surname?: string | null
  name?: string | null
}

export interface UserUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  tel?: StringFieldUpdateOperationsInput
  code?: NullableStringFieldUpdateOperationsInput | null
  role?: NullableStringFieldUpdateOperationsInput | null
  surname?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
}

export interface UserUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  tel?: StringFieldUpdateOperationsInput
  code?: NullableStringFieldUpdateOperationsInput | null
  role?: NullableStringFieldUpdateOperationsInput | null
  surname?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
}

export interface FileCreateInput {
  id?: string
  filename: string
  mimetype: string
  encoding: string
  uri: string
}

export interface FileUncheckedCreateInput {
  id?: string
  filename: string
  mimetype: string
  encoding: string
  uri: string
}

export interface FileUpdateInput {
  id?: StringFieldUpdateOperationsInput
  filename?: StringFieldUpdateOperationsInput
  mimetype?: StringFieldUpdateOperationsInput
  encoding?: StringFieldUpdateOperationsInput
  uri?: StringFieldUpdateOperationsInput
}

export interface FileUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  filename?: StringFieldUpdateOperationsInput
  mimetype?: StringFieldUpdateOperationsInput
  encoding?: StringFieldUpdateOperationsInput
  uri?: StringFieldUpdateOperationsInput
}

export interface FileCreateManyInput {
  id?: string
  filename: string
  mimetype: string
  encoding: string
  uri: string
}

export interface FileUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  filename?: StringFieldUpdateOperationsInput
  mimetype?: StringFieldUpdateOperationsInput
  encoding?: StringFieldUpdateOperationsInput
  uri?: StringFieldUpdateOperationsInput
}

export interface FileUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  filename?: StringFieldUpdateOperationsInput
  mimetype?: StringFieldUpdateOperationsInput
  encoding?: StringFieldUpdateOperationsInput
  uri?: StringFieldUpdateOperationsInput
}

export interface PostCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  picture?: PostCreatepictureInput
  title: string
  description: string
  comments?: CommentCreateNestedManyWithoutPostInput
  createdBy: UserCreateNestedOneWithoutCreatedPostsInput
  likes?: LikeCreateNestedManyWithoutPostInput
}

export interface PostUncheckedCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  picture?: PostCreatepictureInput
  title: string
  description: string
  comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  userId: string
  likes?: LikeUncheckedCreateNestedManyWithoutPostInput
}

export interface PostUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  picture?: PostUpdatepictureInput
  title?: StringFieldUpdateOperationsInput
  description?: StringFieldUpdateOperationsInput
  comments?: CommentUpdateManyWithoutPostInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedPostsInput
  likes?: LikeUpdateManyWithoutPostInput
}

export interface PostUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  picture?: PostUpdatepictureInput
  title?: StringFieldUpdateOperationsInput
  description?: StringFieldUpdateOperationsInput
  comments?: CommentUncheckedUpdateManyWithoutPostInput
  userId?: StringFieldUpdateOperationsInput
  likes?: LikeUncheckedUpdateManyWithoutPostInput
}

export interface PostCreateManyInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  picture?: PostCreatepictureInput
  title: string
  description: string
  userId: string
}

export interface PostUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  picture?: PostUpdatepictureInput
  title?: StringFieldUpdateOperationsInput
  description?: StringFieldUpdateOperationsInput
}

export interface PostUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  picture?: PostUpdatepictureInput
  title?: StringFieldUpdateOperationsInput
  description?: StringFieldUpdateOperationsInput
  userId?: StringFieldUpdateOperationsInput
}

export interface LikeCreateInput {
  id?: string
  createAt?: Date
  post: PostCreateNestedOneWithoutLikesInput
  user: UserCreateNestedOneWithoutLikesInput
}

export interface LikeUncheckedCreateInput {
  id?: string
  createAt?: Date
  postId: string
  userId: string
}

export interface LikeUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createAt?: DateTimeFieldUpdateOperationsInput
  post?: PostUpdateOneRequiredWithoutLikesInput
  user?: UserUpdateOneRequiredWithoutLikesInput
}

export interface LikeUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createAt?: DateTimeFieldUpdateOperationsInput
  postId?: StringFieldUpdateOperationsInput
  userId?: StringFieldUpdateOperationsInput
}

export interface LikeCreateManyInput {
  id?: string
  createAt?: Date
  postId: string
  userId: string
}

export interface LikeUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  createAt?: DateTimeFieldUpdateOperationsInput
}

export interface LikeUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  createAt?: DateTimeFieldUpdateOperationsInput
  postId?: StringFieldUpdateOperationsInput
  userId?: StringFieldUpdateOperationsInput
}

export interface CommentCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  text: string
  createdBy: UserCreateNestedOneWithoutCommentsInput
  Post?: PostCreateNestedOneWithoutCommentsInput
}

export interface CommentUncheckedCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  text: string
  postId?: string | null
  userId: string
}

export interface CommentUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  text?: StringFieldUpdateOperationsInput
  createdBy?: UserUpdateOneRequiredWithoutCommentsInput
  Post?: PostUpdateOneWithoutCommentsInput
}

export interface CommentUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  text?: StringFieldUpdateOperationsInput
  postId?: NullableStringFieldUpdateOperationsInput | null
  userId?: StringFieldUpdateOperationsInput
}

export interface CommentCreateManyInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  text: string
  postId?: string | null
  userId: string
}

export interface CommentUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  text?: StringFieldUpdateOperationsInput
}

export interface CommentUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  text?: StringFieldUpdateOperationsInput
  postId?: NullableStringFieldUpdateOperationsInput | null
  userId?: StringFieldUpdateOperationsInput
}

export interface GroupCreateInput {
  id?: string
  createdAt?: Date
  members?: MembershipCreateNestedManyWithoutGroupInput
}

export interface GroupUncheckedCreateInput {
  id?: string
  createdAt?: Date
  members?: MembershipUncheckedCreateNestedManyWithoutGroupInput
}

export interface GroupUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  members?: MembershipUpdateManyWithoutGroupInput
}

export interface GroupUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  members?: MembershipUncheckedUpdateManyWithoutGroupInput
}

export interface GroupCreateManyInput {
  id?: string
  createdAt?: Date
}

export interface GroupUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
}

export interface GroupUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
}

export interface MembershipCreateInput {
  id?: string
  createdAt?: Date
  User?: UserCreateNestedOneWithoutGroupsInput
  Group?: GroupCreateNestedOneWithoutMembersInput
}

export interface MembershipUncheckedCreateInput {
  id?: string
  createdAt?: Date
  userId?: string | null
  groupId?: string | null
}

export interface MembershipUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  User?: UserUpdateOneWithoutGroupsInput
  Group?: GroupUpdateOneWithoutMembersInput
}

export interface MembershipUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  userId?: NullableStringFieldUpdateOperationsInput | null
  groupId?: NullableStringFieldUpdateOperationsInput | null
}

export interface MembershipCreateManyInput {
  id?: string
  createdAt?: Date
  userId?: string | null
  groupId?: string | null
}

export interface MembershipUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
}

export interface MembershipUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  userId?: NullableStringFieldUpdateOperationsInput | null
  groupId?: NullableStringFieldUpdateOperationsInput | null
}

export interface StringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringFilter
}

export interface StringNullableFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringNullableFilter | null
}

export interface PostListRelationFilter {
  every?: PostWhereInput
  some?: PostWhereInput
  none?: PostWhereInput
}

export interface LikeListRelationFilter {
  every?: LikeWhereInput
  some?: LikeWhereInput
  none?: LikeWhereInput
}

export interface CommentListRelationFilter {
  every?: CommentWhereInput
  some?: CommentWhereInput
  none?: CommentWhereInput
}

export interface MembershipListRelationFilter {
  every?: MembershipWhereInput
  some?: MembershipWhereInput
  none?: MembershipWhereInput
}

export interface PostOrderByRelationAggregateInput {
  _count?: SortOrder
}

export interface LikeOrderByRelationAggregateInput {
  _count?: SortOrder
}

export interface CommentOrderByRelationAggregateInput {
  _count?: SortOrder
}

export interface MembershipOrderByRelationAggregateInput {
  _count?: SortOrder
}

export interface UserCountOrderByAggregateInput {
  id?: SortOrder
  tel?: SortOrder
  code?: SortOrder
  role?: SortOrder
  surname?: SortOrder
  name?: SortOrder
}

export interface UserMaxOrderByAggregateInput {
  id?: SortOrder
  tel?: SortOrder
  code?: SortOrder
  role?: SortOrder
  surname?: SortOrder
  name?: SortOrder
}

export interface UserMinOrderByAggregateInput {
  id?: SortOrder
  tel?: SortOrder
  code?: SortOrder
  role?: SortOrder
  surname?: SortOrder
  name?: SortOrder
}

export interface StringWithAggregatesFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export interface StringNullableWithAggregatesFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
}

export interface FileCountOrderByAggregateInput {
  id?: SortOrder
  filename?: SortOrder
  mimetype?: SortOrder
  encoding?: SortOrder
  uri?: SortOrder
}

export interface FileMaxOrderByAggregateInput {
  id?: SortOrder
  filename?: SortOrder
  mimetype?: SortOrder
  encoding?: SortOrder
  uri?: SortOrder
}

export interface FileMinOrderByAggregateInput {
  id?: SortOrder
  filename?: SortOrder
  mimetype?: SortOrder
  encoding?: SortOrder
  uri?: SortOrder
}

export interface DateTimeFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export interface BoolFilter {
  equals?: boolean
  not?: NestedBoolFilter
}

export interface StringNullableListFilter {
  equals?: string[] | null
  has?: string | null
  hasEvery?: string[]
  hasSome?: string[]
  isEmpty?: boolean
}

export interface UserRelationFilter {
  is?: UserWhereInput
  isNot?: UserWhereInput
}

export interface PostCountOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  blocked?: SortOrder
  picture?: SortOrder
  title?: SortOrder
  description?: SortOrder
  userId?: SortOrder
}

export interface PostMaxOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  blocked?: SortOrder
  title?: SortOrder
  description?: SortOrder
  userId?: SortOrder
}

export interface PostMinOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  blocked?: SortOrder
  title?: SortOrder
  description?: SortOrder
  userId?: SortOrder
}

export interface DateTimeWithAggregatesFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedDateTimeFilter
  _max?: NestedDateTimeFilter
}

export interface BoolWithAggregatesFilter {
  equals?: boolean
  not?: NestedBoolWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedBoolFilter
  _max?: NestedBoolFilter
}

export interface PostRelationFilter {
  is?: PostWhereInput
  isNot?: PostWhereInput
}

export interface LikeCountOrderByAggregateInput {
  id?: SortOrder
  createAt?: SortOrder
  postId?: SortOrder
  userId?: SortOrder
}

export interface LikeMaxOrderByAggregateInput {
  id?: SortOrder
  createAt?: SortOrder
  postId?: SortOrder
  userId?: SortOrder
}

export interface LikeMinOrderByAggregateInput {
  id?: SortOrder
  createAt?: SortOrder
  postId?: SortOrder
  userId?: SortOrder
}

export interface CommentCountOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  blocked?: SortOrder
  text?: SortOrder
  postId?: SortOrder
  userId?: SortOrder
}

export interface CommentMaxOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  blocked?: SortOrder
  text?: SortOrder
  postId?: SortOrder
  userId?: SortOrder
}

export interface CommentMinOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  blocked?: SortOrder
  text?: SortOrder
  postId?: SortOrder
  userId?: SortOrder
}

export interface GroupCountOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
}

export interface GroupMaxOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
}

export interface GroupMinOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
}

export interface GroupRelationFilter {
  is?: GroupWhereInput | null
  isNot?: GroupWhereInput | null
}

export interface MembershipCountOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  userId?: SortOrder
  groupId?: SortOrder
}

export interface MembershipMaxOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  userId?: SortOrder
  groupId?: SortOrder
}

export interface MembershipMinOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  userId?: SortOrder
  groupId?: SortOrder
}

export interface PostCreateNestedManyWithoutCreatedByInput {
  create?: PostCreateWithoutCreatedByInput[]
  connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput[]
  createMany?: PostCreateManyCreatedByInputEnvelope
  connect?: PostWhereUniqueInput[]
}

export interface LikeCreateNestedManyWithoutUserInput {
  create?: LikeCreateWithoutUserInput[]
  connectOrCreate?: LikeCreateOrConnectWithoutUserInput[]
  createMany?: LikeCreateManyUserInputEnvelope
  connect?: LikeWhereUniqueInput[]
}

export interface CommentCreateNestedManyWithoutCreatedByInput {
  create?: CommentCreateWithoutCreatedByInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutCreatedByInput[]
  createMany?: CommentCreateManyCreatedByInputEnvelope
  connect?: CommentWhereUniqueInput[]
}

export interface MembershipCreateNestedManyWithoutUserInput {
  create?: MembershipCreateWithoutUserInput[]
  connectOrCreate?: MembershipCreateOrConnectWithoutUserInput[]
  createMany?: MembershipCreateManyUserInputEnvelope
  connect?: MembershipWhereUniqueInput[]
}

export interface PostUncheckedCreateNestedManyWithoutCreatedByInput {
  create?: PostCreateWithoutCreatedByInput[]
  connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput[]
  createMany?: PostCreateManyCreatedByInputEnvelope
  connect?: PostWhereUniqueInput[]
}

export interface LikeUncheckedCreateNestedManyWithoutUserInput {
  create?: LikeCreateWithoutUserInput[]
  connectOrCreate?: LikeCreateOrConnectWithoutUserInput[]
  createMany?: LikeCreateManyUserInputEnvelope
  connect?: LikeWhereUniqueInput[]
}

export interface CommentUncheckedCreateNestedManyWithoutCreatedByInput {
  create?: CommentCreateWithoutCreatedByInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutCreatedByInput[]
  createMany?: CommentCreateManyCreatedByInputEnvelope
  connect?: CommentWhereUniqueInput[]
}

export interface MembershipUncheckedCreateNestedManyWithoutUserInput {
  create?: MembershipCreateWithoutUserInput[]
  connectOrCreate?: MembershipCreateOrConnectWithoutUserInput[]
  createMany?: MembershipCreateManyUserInputEnvelope
  connect?: MembershipWhereUniqueInput[]
}

export interface StringFieldUpdateOperationsInput {
  set?: string
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null
}

export interface PostUpdateManyWithoutCreatedByInput {
  create?: PostCreateWithoutCreatedByInput[]
  connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput[]
  upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput[]
  createMany?: PostCreateManyCreatedByInputEnvelope
  set?: PostWhereUniqueInput[]
  disconnect?: PostWhereUniqueInput[]
  delete?: PostWhereUniqueInput[]
  connect?: PostWhereUniqueInput[]
  update?: PostUpdateWithWhereUniqueWithoutCreatedByInput[]
  updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput[]
  deleteMany?: PostScalarWhereInput[]
}

export interface LikeUpdateManyWithoutUserInput {
  create?: LikeCreateWithoutUserInput[]
  connectOrCreate?: LikeCreateOrConnectWithoutUserInput[]
  upsert?: LikeUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: LikeCreateManyUserInputEnvelope
  set?: LikeWhereUniqueInput[]
  disconnect?: LikeWhereUniqueInput[]
  delete?: LikeWhereUniqueInput[]
  connect?: LikeWhereUniqueInput[]
  update?: LikeUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: LikeUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: LikeScalarWhereInput[]
}

export interface CommentUpdateManyWithoutCreatedByInput {
  create?: CommentCreateWithoutCreatedByInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutCreatedByInput[]
  upsert?: CommentUpsertWithWhereUniqueWithoutCreatedByInput[]
  createMany?: CommentCreateManyCreatedByInputEnvelope
  set?: CommentWhereUniqueInput[]
  disconnect?: CommentWhereUniqueInput[]
  delete?: CommentWhereUniqueInput[]
  connect?: CommentWhereUniqueInput[]
  update?: CommentUpdateWithWhereUniqueWithoutCreatedByInput[]
  updateMany?: CommentUpdateManyWithWhereWithoutCreatedByInput[]
  deleteMany?: CommentScalarWhereInput[]
}

export interface MembershipUpdateManyWithoutUserInput {
  create?: MembershipCreateWithoutUserInput[]
  connectOrCreate?: MembershipCreateOrConnectWithoutUserInput[]
  upsert?: MembershipUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: MembershipCreateManyUserInputEnvelope
  set?: MembershipWhereUniqueInput[]
  disconnect?: MembershipWhereUniqueInput[]
  delete?: MembershipWhereUniqueInput[]
  connect?: MembershipWhereUniqueInput[]
  update?: MembershipUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: MembershipUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: MembershipScalarWhereInput[]
}

export interface PostUncheckedUpdateManyWithoutCreatedByInput {
  create?: PostCreateWithoutCreatedByInput[]
  connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput[]
  upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput[]
  createMany?: PostCreateManyCreatedByInputEnvelope
  set?: PostWhereUniqueInput[]
  disconnect?: PostWhereUniqueInput[]
  delete?: PostWhereUniqueInput[]
  connect?: PostWhereUniqueInput[]
  update?: PostUpdateWithWhereUniqueWithoutCreatedByInput[]
  updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput[]
  deleteMany?: PostScalarWhereInput[]
}

export interface LikeUncheckedUpdateManyWithoutUserInput {
  create?: LikeCreateWithoutUserInput[]
  connectOrCreate?: LikeCreateOrConnectWithoutUserInput[]
  upsert?: LikeUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: LikeCreateManyUserInputEnvelope
  set?: LikeWhereUniqueInput[]
  disconnect?: LikeWhereUniqueInput[]
  delete?: LikeWhereUniqueInput[]
  connect?: LikeWhereUniqueInput[]
  update?: LikeUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: LikeUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: LikeScalarWhereInput[]
}

export interface CommentUncheckedUpdateManyWithoutCreatedByInput {
  create?: CommentCreateWithoutCreatedByInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutCreatedByInput[]
  upsert?: CommentUpsertWithWhereUniqueWithoutCreatedByInput[]
  createMany?: CommentCreateManyCreatedByInputEnvelope
  set?: CommentWhereUniqueInput[]
  disconnect?: CommentWhereUniqueInput[]
  delete?: CommentWhereUniqueInput[]
  connect?: CommentWhereUniqueInput[]
  update?: CommentUpdateWithWhereUniqueWithoutCreatedByInput[]
  updateMany?: CommentUpdateManyWithWhereWithoutCreatedByInput[]
  deleteMany?: CommentScalarWhereInput[]
}

export interface MembershipUncheckedUpdateManyWithoutUserInput {
  create?: MembershipCreateWithoutUserInput[]
  connectOrCreate?: MembershipCreateOrConnectWithoutUserInput[]
  upsert?: MembershipUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: MembershipCreateManyUserInputEnvelope
  set?: MembershipWhereUniqueInput[]
  disconnect?: MembershipWhereUniqueInput[]
  delete?: MembershipWhereUniqueInput[]
  connect?: MembershipWhereUniqueInput[]
  update?: MembershipUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: MembershipUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: MembershipScalarWhereInput[]
}

export interface PostCreatepictureInput {
  set: string[]
}

export interface CommentCreateNestedManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutPostInput[]
  createMany?: CommentCreateManyPostInputEnvelope
  connect?: CommentWhereUniqueInput[]
}

export interface UserCreateNestedOneWithoutCreatedPostsInput {
  create?: UserUncheckedCreateWithoutCreatedPostsInput
  connectOrCreate?: UserCreateOrConnectWithoutCreatedPostsInput
  connect?: UserWhereUniqueInput
}

export interface LikeCreateNestedManyWithoutPostInput {
  create?: LikeCreateWithoutPostInput[]
  connectOrCreate?: LikeCreateOrConnectWithoutPostInput[]
  createMany?: LikeCreateManyPostInputEnvelope
  connect?: LikeWhereUniqueInput[]
}

export interface CommentUncheckedCreateNestedManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutPostInput[]
  createMany?: CommentCreateManyPostInputEnvelope
  connect?: CommentWhereUniqueInput[]
}

export interface LikeUncheckedCreateNestedManyWithoutPostInput {
  create?: LikeCreateWithoutPostInput[]
  connectOrCreate?: LikeCreateOrConnectWithoutPostInput[]
  createMany?: LikeCreateManyPostInputEnvelope
  connect?: LikeWhereUniqueInput[]
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: Date
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean
}

export interface PostUpdatepictureInput {
  set?: string[]
  push?: string
}

export interface CommentUpdateManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutPostInput[]
  upsert?: CommentUpsertWithWhereUniqueWithoutPostInput[]
  createMany?: CommentCreateManyPostInputEnvelope
  set?: CommentWhereUniqueInput[]
  disconnect?: CommentWhereUniqueInput[]
  delete?: CommentWhereUniqueInput[]
  connect?: CommentWhereUniqueInput[]
  update?: CommentUpdateWithWhereUniqueWithoutPostInput[]
  updateMany?: CommentUpdateManyWithWhereWithoutPostInput[]
  deleteMany?: CommentScalarWhereInput[]
}

export interface UserUpdateOneRequiredWithoutCreatedPostsInput {
  create?: UserUncheckedCreateWithoutCreatedPostsInput
  connectOrCreate?: UserCreateOrConnectWithoutCreatedPostsInput
  upsert?: UserUpsertWithoutCreatedPostsInput
  connect?: UserWhereUniqueInput
  update?: UserUncheckedUpdateWithoutCreatedPostsInput
}

export interface LikeUpdateManyWithoutPostInput {
  create?: LikeCreateWithoutPostInput[]
  connectOrCreate?: LikeCreateOrConnectWithoutPostInput[]
  upsert?: LikeUpsertWithWhereUniqueWithoutPostInput[]
  createMany?: LikeCreateManyPostInputEnvelope
  set?: LikeWhereUniqueInput[]
  disconnect?: LikeWhereUniqueInput[]
  delete?: LikeWhereUniqueInput[]
  connect?: LikeWhereUniqueInput[]
  update?: LikeUpdateWithWhereUniqueWithoutPostInput[]
  updateMany?: LikeUpdateManyWithWhereWithoutPostInput[]
  deleteMany?: LikeScalarWhereInput[]
}

export interface CommentUncheckedUpdateManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutPostInput[]
  upsert?: CommentUpsertWithWhereUniqueWithoutPostInput[]
  createMany?: CommentCreateManyPostInputEnvelope
  set?: CommentWhereUniqueInput[]
  disconnect?: CommentWhereUniqueInput[]
  delete?: CommentWhereUniqueInput[]
  connect?: CommentWhereUniqueInput[]
  update?: CommentUpdateWithWhereUniqueWithoutPostInput[]
  updateMany?: CommentUpdateManyWithWhereWithoutPostInput[]
  deleteMany?: CommentScalarWhereInput[]
}

export interface LikeUncheckedUpdateManyWithoutPostInput {
  create?: LikeCreateWithoutPostInput[]
  connectOrCreate?: LikeCreateOrConnectWithoutPostInput[]
  upsert?: LikeUpsertWithWhereUniqueWithoutPostInput[]
  createMany?: LikeCreateManyPostInputEnvelope
  set?: LikeWhereUniqueInput[]
  disconnect?: LikeWhereUniqueInput[]
  delete?: LikeWhereUniqueInput[]
  connect?: LikeWhereUniqueInput[]
  update?: LikeUpdateWithWhereUniqueWithoutPostInput[]
  updateMany?: LikeUpdateManyWithWhereWithoutPostInput[]
  deleteMany?: LikeScalarWhereInput[]
}

export interface PostCreateNestedOneWithoutLikesInput {
  create?: PostUncheckedCreateWithoutLikesInput
  connectOrCreate?: PostCreateOrConnectWithoutLikesInput
  connect?: PostWhereUniqueInput
}

export interface UserCreateNestedOneWithoutLikesInput {
  create?: UserUncheckedCreateWithoutLikesInput
  connectOrCreate?: UserCreateOrConnectWithoutLikesInput
  connect?: UserWhereUniqueInput
}

export interface PostUpdateOneRequiredWithoutLikesInput {
  create?: PostUncheckedCreateWithoutLikesInput
  connectOrCreate?: PostCreateOrConnectWithoutLikesInput
  upsert?: PostUpsertWithoutLikesInput
  connect?: PostWhereUniqueInput
  update?: PostUncheckedUpdateWithoutLikesInput
}

export interface UserUpdateOneRequiredWithoutLikesInput {
  create?: UserUncheckedCreateWithoutLikesInput
  connectOrCreate?: UserCreateOrConnectWithoutLikesInput
  upsert?: UserUpsertWithoutLikesInput
  connect?: UserWhereUniqueInput
  update?: UserUncheckedUpdateWithoutLikesInput
}

export interface UserCreateNestedOneWithoutCommentsInput {
  create?: UserUncheckedCreateWithoutCommentsInput
  connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
  connect?: UserWhereUniqueInput
}

export interface PostCreateNestedOneWithoutCommentsInput {
  create?: PostUncheckedCreateWithoutCommentsInput
  connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
  connect?: PostWhereUniqueInput
}

export interface UserUpdateOneRequiredWithoutCommentsInput {
  create?: UserUncheckedCreateWithoutCommentsInput
  connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
  upsert?: UserUpsertWithoutCommentsInput
  connect?: UserWhereUniqueInput
  update?: UserUncheckedUpdateWithoutCommentsInput
}

export interface PostUpdateOneWithoutCommentsInput {
  create?: PostUncheckedCreateWithoutCommentsInput
  connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
  upsert?: PostUpsertWithoutCommentsInput
  disconnect?: boolean
  delete?: boolean
  connect?: PostWhereUniqueInput
  update?: PostUncheckedUpdateWithoutCommentsInput
}

export interface MembershipCreateNestedManyWithoutGroupInput {
  create?: MembershipCreateWithoutGroupInput[]
  connectOrCreate?: MembershipCreateOrConnectWithoutGroupInput[]
  createMany?: MembershipCreateManyGroupInputEnvelope
  connect?: MembershipWhereUniqueInput[]
}

export interface MembershipUncheckedCreateNestedManyWithoutGroupInput {
  create?: MembershipCreateWithoutGroupInput[]
  connectOrCreate?: MembershipCreateOrConnectWithoutGroupInput[]
  createMany?: MembershipCreateManyGroupInputEnvelope
  connect?: MembershipWhereUniqueInput[]
}

export interface MembershipUpdateManyWithoutGroupInput {
  create?: MembershipCreateWithoutGroupInput[]
  connectOrCreate?: MembershipCreateOrConnectWithoutGroupInput[]
  upsert?: MembershipUpsertWithWhereUniqueWithoutGroupInput[]
  createMany?: MembershipCreateManyGroupInputEnvelope
  set?: MembershipWhereUniqueInput[]
  disconnect?: MembershipWhereUniqueInput[]
  delete?: MembershipWhereUniqueInput[]
  connect?: MembershipWhereUniqueInput[]
  update?: MembershipUpdateWithWhereUniqueWithoutGroupInput[]
  updateMany?: MembershipUpdateManyWithWhereWithoutGroupInput[]
  deleteMany?: MembershipScalarWhereInput[]
}

export interface MembershipUncheckedUpdateManyWithoutGroupInput {
  create?: MembershipCreateWithoutGroupInput[]
  connectOrCreate?: MembershipCreateOrConnectWithoutGroupInput[]
  upsert?: MembershipUpsertWithWhereUniqueWithoutGroupInput[]
  createMany?: MembershipCreateManyGroupInputEnvelope
  set?: MembershipWhereUniqueInput[]
  disconnect?: MembershipWhereUniqueInput[]
  delete?: MembershipWhereUniqueInput[]
  connect?: MembershipWhereUniqueInput[]
  update?: MembershipUpdateWithWhereUniqueWithoutGroupInput[]
  updateMany?: MembershipUpdateManyWithWhereWithoutGroupInput[]
  deleteMany?: MembershipScalarWhereInput[]
}

export interface UserCreateNestedOneWithoutGroupsInput {
  create?: UserUncheckedCreateWithoutGroupsInput
  connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
  connect?: UserWhereUniqueInput
}

export interface GroupCreateNestedOneWithoutMembersInput {
  create?: GroupUncheckedCreateWithoutMembersInput
  connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
  connect?: GroupWhereUniqueInput
}

export interface UserUpdateOneWithoutGroupsInput {
  create?: UserUncheckedCreateWithoutGroupsInput
  connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
  upsert?: UserUpsertWithoutGroupsInput
  disconnect?: boolean
  delete?: boolean
  connect?: UserWhereUniqueInput
  update?: UserUncheckedUpdateWithoutGroupsInput
}

export interface GroupUpdateOneWithoutMembersInput {
  create?: GroupUncheckedCreateWithoutMembersInput
  connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
  upsert?: GroupUpsertWithoutMembersInput
  disconnect?: boolean
  delete?: boolean
  connect?: GroupWhereUniqueInput
  update?: GroupUncheckedUpdateWithoutMembersInput
}

export interface NestedStringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export interface NestedStringNullableFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableFilter | null
}

export interface NestedStringWithAggregatesFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export interface NestedIntFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export interface NestedStringNullableWithAggregatesFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
}

export interface NestedIntNullableFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableFilter | null
}

export interface NestedDateTimeFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export interface NestedBoolFilter {
  equals?: boolean
  not?: NestedBoolFilter
}

export interface NestedDateTimeWithAggregatesFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedDateTimeFilter
  _max?: NestedDateTimeFilter
}

export interface NestedBoolWithAggregatesFilter {
  equals?: boolean
  not?: NestedBoolWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedBoolFilter
  _max?: NestedBoolFilter
}

export interface PostCreateWithoutCreatedByInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  picture?: PostCreatepictureInput
  title: string
  description: string
  comments?: CommentCreateNestedManyWithoutPostInput
  likes?: LikeCreateNestedManyWithoutPostInput
}

export interface PostUncheckedCreateWithoutCreatedByInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  picture?: PostCreatepictureInput
  title: string
  description: string
  comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  likes?: LikeUncheckedCreateNestedManyWithoutPostInput
}

export interface PostCreateOrConnectWithoutCreatedByInput {
  where: PostWhereUniqueInput
  create: PostUncheckedCreateWithoutCreatedByInput
}

export interface PostCreateManyCreatedByInputEnvelope {
  data: PostCreateManyCreatedByInput[]
  skipDuplicates?: boolean
}

export interface LikeCreateWithoutUserInput {
  id?: string
  createAt?: Date
  post: PostCreateNestedOneWithoutLikesInput
}

export interface LikeUncheckedCreateWithoutUserInput {
  id?: string
  createAt?: Date
  postId: string
}

export interface LikeCreateOrConnectWithoutUserInput {
  where: LikeWhereUniqueInput
  create: LikeUncheckedCreateWithoutUserInput
}

export interface LikeCreateManyUserInputEnvelope {
  data: LikeCreateManyUserInput[]
  skipDuplicates?: boolean
}

export interface CommentCreateWithoutCreatedByInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  text: string
  Post?: PostCreateNestedOneWithoutCommentsInput
}

export interface CommentUncheckedCreateWithoutCreatedByInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  text: string
  postId?: string | null
}

export interface CommentCreateOrConnectWithoutCreatedByInput {
  where: CommentWhereUniqueInput
  create: CommentUncheckedCreateWithoutCreatedByInput
}

export interface CommentCreateManyCreatedByInputEnvelope {
  data: CommentCreateManyCreatedByInput[]
  skipDuplicates?: boolean
}

export interface MembershipCreateWithoutUserInput {
  id?: string
  createdAt?: Date
  Group?: GroupCreateNestedOneWithoutMembersInput
}

export interface MembershipUncheckedCreateWithoutUserInput {
  id?: string
  createdAt?: Date
  groupId?: string | null
}

export interface MembershipCreateOrConnectWithoutUserInput {
  where: MembershipWhereUniqueInput
  create: MembershipUncheckedCreateWithoutUserInput
}

export interface MembershipCreateManyUserInputEnvelope {
  data: MembershipCreateManyUserInput[]
  skipDuplicates?: boolean
}

export interface PostUpsertWithWhereUniqueWithoutCreatedByInput {
  where: PostWhereUniqueInput
  update: PostUncheckedUpdateWithoutCreatedByInput
  create: PostUncheckedCreateWithoutCreatedByInput
}

export interface PostUpdateWithWhereUniqueWithoutCreatedByInput {
  where: PostWhereUniqueInput
  data: PostUncheckedUpdateWithoutCreatedByInput
}

export interface PostUpdateManyWithWhereWithoutCreatedByInput {
  where: PostScalarWhereInput
  data: PostUncheckedUpdateManyWithoutCreatedPostsInput
}

export interface PostScalarWhereInput {
  AND?: PostScalarWhereInput[]
  OR?: PostScalarWhereInput[]
  NOT?: PostScalarWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  blocked?: BoolFilter
  picture?: StringNullableListFilter
  title?: StringFilter
  description?: StringFilter
  userId?: StringFilter
}

export interface LikeUpsertWithWhereUniqueWithoutUserInput {
  where: LikeWhereUniqueInput
  update: LikeUncheckedUpdateWithoutUserInput
  create: LikeUncheckedCreateWithoutUserInput
}

export interface LikeUpdateWithWhereUniqueWithoutUserInput {
  where: LikeWhereUniqueInput
  data: LikeUncheckedUpdateWithoutUserInput
}

export interface LikeUpdateManyWithWhereWithoutUserInput {
  where: LikeScalarWhereInput
  data: LikeUncheckedUpdateManyWithoutLikesInput
}

export interface LikeScalarWhereInput {
  AND?: LikeScalarWhereInput[]
  OR?: LikeScalarWhereInput[]
  NOT?: LikeScalarWhereInput[]
  id?: StringFilter
  createAt?: DateTimeFilter
  postId?: StringFilter
  userId?: StringFilter
}

export interface CommentUpsertWithWhereUniqueWithoutCreatedByInput {
  where: CommentWhereUniqueInput
  update: CommentUncheckedUpdateWithoutCreatedByInput
  create: CommentUncheckedCreateWithoutCreatedByInput
}

export interface CommentUpdateWithWhereUniqueWithoutCreatedByInput {
  where: CommentWhereUniqueInput
  data: CommentUncheckedUpdateWithoutCreatedByInput
}

export interface CommentUpdateManyWithWhereWithoutCreatedByInput {
  where: CommentScalarWhereInput
  data: CommentUncheckedUpdateManyWithoutCommentsInput
}

export interface CommentScalarWhereInput {
  AND?: CommentScalarWhereInput[]
  OR?: CommentScalarWhereInput[]
  NOT?: CommentScalarWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  blocked?: BoolFilter
  text?: StringFilter
  postId?: StringNullableFilter | null
  userId?: StringFilter
}

export interface MembershipUpsertWithWhereUniqueWithoutUserInput {
  where: MembershipWhereUniqueInput
  update: MembershipUncheckedUpdateWithoutUserInput
  create: MembershipUncheckedCreateWithoutUserInput
}

export interface MembershipUpdateWithWhereUniqueWithoutUserInput {
  where: MembershipWhereUniqueInput
  data: MembershipUncheckedUpdateWithoutUserInput
}

export interface MembershipUpdateManyWithWhereWithoutUserInput {
  where: MembershipScalarWhereInput
  data: MembershipUncheckedUpdateManyWithoutGroupsInput
}

export interface MembershipScalarWhereInput {
  AND?: MembershipScalarWhereInput[]
  OR?: MembershipScalarWhereInput[]
  NOT?: MembershipScalarWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  userId?: StringNullableFilter | null
  groupId?: StringNullableFilter | null
}

export interface CommentCreateWithoutPostInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  text: string
  createdBy: UserCreateNestedOneWithoutCommentsInput
}

export interface CommentUncheckedCreateWithoutPostInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  text: string
  userId: string
}

export interface CommentCreateOrConnectWithoutPostInput {
  where: CommentWhereUniqueInput
  create: CommentUncheckedCreateWithoutPostInput
}

export interface CommentCreateManyPostInputEnvelope {
  data: CommentCreateManyPostInput[]
  skipDuplicates?: boolean
}

export interface UserCreateWithoutCreatedPostsInput {
  id?: string
  tel: string
  code?: string | null
  role?: string | null
  surname?: string | null
  name?: string | null
  likes?: LikeCreateNestedManyWithoutUserInput
  comments?: CommentCreateNestedManyWithoutCreatedByInput
  groups?: MembershipCreateNestedManyWithoutUserInput
}

export interface UserUncheckedCreateWithoutCreatedPostsInput {
  id?: string
  tel: string
  code?: string | null
  role?: string | null
  surname?: string | null
  name?: string | null
  likes?: LikeUncheckedCreateNestedManyWithoutUserInput
  comments?: CommentUncheckedCreateNestedManyWithoutCreatedByInput
  groups?: MembershipUncheckedCreateNestedManyWithoutUserInput
}

export interface UserCreateOrConnectWithoutCreatedPostsInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutCreatedPostsInput
}

export interface LikeCreateWithoutPostInput {
  id?: string
  createAt?: Date
  user: UserCreateNestedOneWithoutLikesInput
}

export interface LikeUncheckedCreateWithoutPostInput {
  id?: string
  createAt?: Date
  userId: string
}

export interface LikeCreateOrConnectWithoutPostInput {
  where: LikeWhereUniqueInput
  create: LikeUncheckedCreateWithoutPostInput
}

export interface LikeCreateManyPostInputEnvelope {
  data: LikeCreateManyPostInput[]
  skipDuplicates?: boolean
}

export interface CommentUpsertWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput
  update: CommentUncheckedUpdateWithoutPostInput
  create: CommentUncheckedCreateWithoutPostInput
}

export interface CommentUpdateWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput
  data: CommentUncheckedUpdateWithoutPostInput
}

export interface CommentUpdateManyWithWhereWithoutPostInput {
  where: CommentScalarWhereInput
  data: CommentUncheckedUpdateManyWithoutCommentsInput
}

export interface UserUpsertWithoutCreatedPostsInput {
  update: UserUncheckedUpdateWithoutCreatedPostsInput
  create: UserUncheckedCreateWithoutCreatedPostsInput
}

export interface UserUpdateWithoutCreatedPostsInput {
  id?: StringFieldUpdateOperationsInput
  tel?: StringFieldUpdateOperationsInput
  code?: NullableStringFieldUpdateOperationsInput | null
  role?: NullableStringFieldUpdateOperationsInput | null
  surname?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  likes?: LikeUpdateManyWithoutUserInput
  comments?: CommentUpdateManyWithoutCreatedByInput
  groups?: MembershipUpdateManyWithoutUserInput
}

export interface UserUncheckedUpdateWithoutCreatedPostsInput {
  id?: StringFieldUpdateOperationsInput
  tel?: StringFieldUpdateOperationsInput
  code?: NullableStringFieldUpdateOperationsInput | null
  role?: NullableStringFieldUpdateOperationsInput | null
  surname?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  likes?: LikeUncheckedUpdateManyWithoutUserInput
  comments?: CommentUncheckedUpdateManyWithoutCreatedByInput
  groups?: MembershipUncheckedUpdateManyWithoutUserInput
}

export interface LikeUpsertWithWhereUniqueWithoutPostInput {
  where: LikeWhereUniqueInput
  update: LikeUncheckedUpdateWithoutPostInput
  create: LikeUncheckedCreateWithoutPostInput
}

export interface LikeUpdateWithWhereUniqueWithoutPostInput {
  where: LikeWhereUniqueInput
  data: LikeUncheckedUpdateWithoutPostInput
}

export interface LikeUpdateManyWithWhereWithoutPostInput {
  where: LikeScalarWhereInput
  data: LikeUncheckedUpdateManyWithoutLikesInput
}

export interface PostCreateWithoutLikesInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  picture?: PostCreatepictureInput
  title: string
  description: string
  comments?: CommentCreateNestedManyWithoutPostInput
  createdBy: UserCreateNestedOneWithoutCreatedPostsInput
}

export interface PostUncheckedCreateWithoutLikesInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  picture?: PostCreatepictureInput
  title: string
  description: string
  comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  userId: string
}

export interface PostCreateOrConnectWithoutLikesInput {
  where: PostWhereUniqueInput
  create: PostUncheckedCreateWithoutLikesInput
}

export interface UserCreateWithoutLikesInput {
  id?: string
  tel: string
  code?: string | null
  role?: string | null
  surname?: string | null
  name?: string | null
  createdPosts?: PostCreateNestedManyWithoutCreatedByInput
  comments?: CommentCreateNestedManyWithoutCreatedByInput
  groups?: MembershipCreateNestedManyWithoutUserInput
}

export interface UserUncheckedCreateWithoutLikesInput {
  id?: string
  tel: string
  code?: string | null
  role?: string | null
  surname?: string | null
  name?: string | null
  createdPosts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
  comments?: CommentUncheckedCreateNestedManyWithoutCreatedByInput
  groups?: MembershipUncheckedCreateNestedManyWithoutUserInput
}

export interface UserCreateOrConnectWithoutLikesInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutLikesInput
}

export interface PostUpsertWithoutLikesInput {
  update: PostUncheckedUpdateWithoutLikesInput
  create: PostUncheckedCreateWithoutLikesInput
}

export interface PostUpdateWithoutLikesInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  picture?: PostUpdatepictureInput
  title?: StringFieldUpdateOperationsInput
  description?: StringFieldUpdateOperationsInput
  comments?: CommentUpdateManyWithoutPostInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedPostsInput
}

export interface PostUncheckedUpdateWithoutLikesInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  picture?: PostUpdatepictureInput
  title?: StringFieldUpdateOperationsInput
  description?: StringFieldUpdateOperationsInput
  comments?: CommentUncheckedUpdateManyWithoutPostInput
  userId?: StringFieldUpdateOperationsInput
}

export interface UserUpsertWithoutLikesInput {
  update: UserUncheckedUpdateWithoutLikesInput
  create: UserUncheckedCreateWithoutLikesInput
}

export interface UserUpdateWithoutLikesInput {
  id?: StringFieldUpdateOperationsInput
  tel?: StringFieldUpdateOperationsInput
  code?: NullableStringFieldUpdateOperationsInput | null
  role?: NullableStringFieldUpdateOperationsInput | null
  surname?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  createdPosts?: PostUpdateManyWithoutCreatedByInput
  comments?: CommentUpdateManyWithoutCreatedByInput
  groups?: MembershipUpdateManyWithoutUserInput
}

export interface UserUncheckedUpdateWithoutLikesInput {
  id?: StringFieldUpdateOperationsInput
  tel?: StringFieldUpdateOperationsInput
  code?: NullableStringFieldUpdateOperationsInput | null
  role?: NullableStringFieldUpdateOperationsInput | null
  surname?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  createdPosts?: PostUncheckedUpdateManyWithoutCreatedByInput
  comments?: CommentUncheckedUpdateManyWithoutCreatedByInput
  groups?: MembershipUncheckedUpdateManyWithoutUserInput
}

export interface UserCreateWithoutCommentsInput {
  id?: string
  tel: string
  code?: string | null
  role?: string | null
  surname?: string | null
  name?: string | null
  createdPosts?: PostCreateNestedManyWithoutCreatedByInput
  likes?: LikeCreateNestedManyWithoutUserInput
  groups?: MembershipCreateNestedManyWithoutUserInput
}

export interface UserUncheckedCreateWithoutCommentsInput {
  id?: string
  tel: string
  code?: string | null
  role?: string | null
  surname?: string | null
  name?: string | null
  createdPosts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
  likes?: LikeUncheckedCreateNestedManyWithoutUserInput
  groups?: MembershipUncheckedCreateNestedManyWithoutUserInput
}

export interface UserCreateOrConnectWithoutCommentsInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutCommentsInput
}

export interface PostCreateWithoutCommentsInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  picture?: PostCreatepictureInput
  title: string
  description: string
  createdBy: UserCreateNestedOneWithoutCreatedPostsInput
  likes?: LikeCreateNestedManyWithoutPostInput
}

export interface PostUncheckedCreateWithoutCommentsInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  picture?: PostCreatepictureInput
  title: string
  description: string
  userId: string
  likes?: LikeUncheckedCreateNestedManyWithoutPostInput
}

export interface PostCreateOrConnectWithoutCommentsInput {
  where: PostWhereUniqueInput
  create: PostUncheckedCreateWithoutCommentsInput
}

export interface UserUpsertWithoutCommentsInput {
  update: UserUncheckedUpdateWithoutCommentsInput
  create: UserUncheckedCreateWithoutCommentsInput
}

export interface UserUpdateWithoutCommentsInput {
  id?: StringFieldUpdateOperationsInput
  tel?: StringFieldUpdateOperationsInput
  code?: NullableStringFieldUpdateOperationsInput | null
  role?: NullableStringFieldUpdateOperationsInput | null
  surname?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  createdPosts?: PostUpdateManyWithoutCreatedByInput
  likes?: LikeUpdateManyWithoutUserInput
  groups?: MembershipUpdateManyWithoutUserInput
}

export interface UserUncheckedUpdateWithoutCommentsInput {
  id?: StringFieldUpdateOperationsInput
  tel?: StringFieldUpdateOperationsInput
  code?: NullableStringFieldUpdateOperationsInput | null
  role?: NullableStringFieldUpdateOperationsInput | null
  surname?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  createdPosts?: PostUncheckedUpdateManyWithoutCreatedByInput
  likes?: LikeUncheckedUpdateManyWithoutUserInput
  groups?: MembershipUncheckedUpdateManyWithoutUserInput
}

export interface PostUpsertWithoutCommentsInput {
  update: PostUncheckedUpdateWithoutCommentsInput
  create: PostUncheckedCreateWithoutCommentsInput
}

export interface PostUpdateWithoutCommentsInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  picture?: PostUpdatepictureInput
  title?: StringFieldUpdateOperationsInput
  description?: StringFieldUpdateOperationsInput
  createdBy?: UserUpdateOneRequiredWithoutCreatedPostsInput
  likes?: LikeUpdateManyWithoutPostInput
}

export interface PostUncheckedUpdateWithoutCommentsInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  picture?: PostUpdatepictureInput
  title?: StringFieldUpdateOperationsInput
  description?: StringFieldUpdateOperationsInput
  userId?: StringFieldUpdateOperationsInput
  likes?: LikeUncheckedUpdateManyWithoutPostInput
}

export interface MembershipCreateWithoutGroupInput {
  id?: string
  createdAt?: Date
  User?: UserCreateNestedOneWithoutGroupsInput
}

export interface MembershipUncheckedCreateWithoutGroupInput {
  id?: string
  createdAt?: Date
  userId?: string | null
}

export interface MembershipCreateOrConnectWithoutGroupInput {
  where: MembershipWhereUniqueInput
  create: MembershipUncheckedCreateWithoutGroupInput
}

export interface MembershipCreateManyGroupInputEnvelope {
  data: MembershipCreateManyGroupInput[]
  skipDuplicates?: boolean
}

export interface MembershipUpsertWithWhereUniqueWithoutGroupInput {
  where: MembershipWhereUniqueInput
  update: MembershipUncheckedUpdateWithoutGroupInput
  create: MembershipUncheckedCreateWithoutGroupInput
}

export interface MembershipUpdateWithWhereUniqueWithoutGroupInput {
  where: MembershipWhereUniqueInput
  data: MembershipUncheckedUpdateWithoutGroupInput
}

export interface MembershipUpdateManyWithWhereWithoutGroupInput {
  where: MembershipScalarWhereInput
  data: MembershipUncheckedUpdateManyWithoutMembersInput
}

export interface UserCreateWithoutGroupsInput {
  id?: string
  tel: string
  code?: string | null
  role?: string | null
  surname?: string | null
  name?: string | null
  createdPosts?: PostCreateNestedManyWithoutCreatedByInput
  likes?: LikeCreateNestedManyWithoutUserInput
  comments?: CommentCreateNestedManyWithoutCreatedByInput
}

export interface UserUncheckedCreateWithoutGroupsInput {
  id?: string
  tel: string
  code?: string | null
  role?: string | null
  surname?: string | null
  name?: string | null
  createdPosts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
  likes?: LikeUncheckedCreateNestedManyWithoutUserInput
  comments?: CommentUncheckedCreateNestedManyWithoutCreatedByInput
}

export interface UserCreateOrConnectWithoutGroupsInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutGroupsInput
}

export interface GroupCreateWithoutMembersInput {
  id?: string
  createdAt?: Date
}

export interface GroupUncheckedCreateWithoutMembersInput {
  id?: string
  createdAt?: Date
}

export interface GroupCreateOrConnectWithoutMembersInput {
  where: GroupWhereUniqueInput
  create: GroupUncheckedCreateWithoutMembersInput
}

export interface UserUpsertWithoutGroupsInput {
  update: UserUncheckedUpdateWithoutGroupsInput
  create: UserUncheckedCreateWithoutGroupsInput
}

export interface UserUpdateWithoutGroupsInput {
  id?: StringFieldUpdateOperationsInput
  tel?: StringFieldUpdateOperationsInput
  code?: NullableStringFieldUpdateOperationsInput | null
  role?: NullableStringFieldUpdateOperationsInput | null
  surname?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  createdPosts?: PostUpdateManyWithoutCreatedByInput
  likes?: LikeUpdateManyWithoutUserInput
  comments?: CommentUpdateManyWithoutCreatedByInput
}

export interface UserUncheckedUpdateWithoutGroupsInput {
  id?: StringFieldUpdateOperationsInput
  tel?: StringFieldUpdateOperationsInput
  code?: NullableStringFieldUpdateOperationsInput | null
  role?: NullableStringFieldUpdateOperationsInput | null
  surname?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  createdPosts?: PostUncheckedUpdateManyWithoutCreatedByInput
  likes?: LikeUncheckedUpdateManyWithoutUserInput
  comments?: CommentUncheckedUpdateManyWithoutCreatedByInput
}

export interface GroupUpsertWithoutMembersInput {
  update: GroupUncheckedUpdateWithoutMembersInput
  create: GroupUncheckedCreateWithoutMembersInput
}

export interface GroupUpdateWithoutMembersInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
}

export interface GroupUncheckedUpdateWithoutMembersInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
}

export interface PostCreateManyCreatedByInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  picture?: PostCreatepictureInput
  title: string
  description: string
}

export interface LikeCreateManyUserInput {
  id?: string
  createAt?: Date
  postId: string
}

export interface CommentCreateManyCreatedByInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  text: string
  postId?: string | null
}

export interface MembershipCreateManyUserInput {
  id?: string
  createdAt?: Date
  groupId?: string | null
}

export interface PostUpdateWithoutCreatedByInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  picture?: PostUpdatepictureInput
  title?: StringFieldUpdateOperationsInput
  description?: StringFieldUpdateOperationsInput
  comments?: CommentUpdateManyWithoutPostInput
  likes?: LikeUpdateManyWithoutPostInput
}

export interface PostUncheckedUpdateWithoutCreatedByInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  picture?: PostUpdatepictureInput
  title?: StringFieldUpdateOperationsInput
  description?: StringFieldUpdateOperationsInput
  comments?: CommentUncheckedUpdateManyWithoutPostInput
  likes?: LikeUncheckedUpdateManyWithoutPostInput
}

export interface PostUncheckedUpdateManyWithoutCreatedPostsInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  picture?: PostUpdatepictureInput
  title?: StringFieldUpdateOperationsInput
  description?: StringFieldUpdateOperationsInput
}

export interface LikeUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput
  createAt?: DateTimeFieldUpdateOperationsInput
  post?: PostUpdateOneRequiredWithoutLikesInput
}

export interface LikeUncheckedUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput
  createAt?: DateTimeFieldUpdateOperationsInput
  postId?: StringFieldUpdateOperationsInput
}

export interface LikeUncheckedUpdateManyWithoutLikesInput {
  id?: StringFieldUpdateOperationsInput
  createAt?: DateTimeFieldUpdateOperationsInput
  postId?: StringFieldUpdateOperationsInput
}

export interface CommentUpdateWithoutCreatedByInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  text?: StringFieldUpdateOperationsInput
  Post?: PostUpdateOneWithoutCommentsInput
}

export interface CommentUncheckedUpdateWithoutCreatedByInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  text?: StringFieldUpdateOperationsInput
  postId?: NullableStringFieldUpdateOperationsInput | null
}

export interface CommentUncheckedUpdateManyWithoutCommentsInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  text?: StringFieldUpdateOperationsInput
  postId?: NullableStringFieldUpdateOperationsInput | null
}

export interface MembershipUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  Group?: GroupUpdateOneWithoutMembersInput
}

export interface MembershipUncheckedUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  groupId?: NullableStringFieldUpdateOperationsInput | null
}

export interface MembershipUncheckedUpdateManyWithoutGroupsInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  groupId?: NullableStringFieldUpdateOperationsInput | null
}

export interface CommentCreateManyPostInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  blocked?: boolean
  text: string
  userId: string
}

export interface LikeCreateManyPostInput {
  id?: string
  createAt?: Date
  userId: string
}

export interface CommentUpdateWithoutPostInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  text?: StringFieldUpdateOperationsInput
  createdBy?: UserUpdateOneRequiredWithoutCommentsInput
}

export interface CommentUncheckedUpdateWithoutPostInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  blocked?: BoolFieldUpdateOperationsInput
  text?: StringFieldUpdateOperationsInput
  userId?: StringFieldUpdateOperationsInput
}

export interface LikeUpdateWithoutPostInput {
  id?: StringFieldUpdateOperationsInput
  createAt?: DateTimeFieldUpdateOperationsInput
  user?: UserUpdateOneRequiredWithoutLikesInput
}

export interface LikeUncheckedUpdateWithoutPostInput {
  id?: StringFieldUpdateOperationsInput
  createAt?: DateTimeFieldUpdateOperationsInput
  userId?: StringFieldUpdateOperationsInput
}

export interface MembershipCreateManyGroupInput {
  id?: string
  createdAt?: Date
  userId?: string | null
}

export interface MembershipUpdateWithoutGroupInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  User?: UserUpdateOneWithoutGroupsInput
}

export interface MembershipUncheckedUpdateWithoutGroupInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  userId?: NullableStringFieldUpdateOperationsInput | null
}

export interface MembershipUncheckedUpdateManyWithoutMembersInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  userId?: NullableStringFieldUpdateOperationsInput | null
}

export enum UserScalarFieldEnum {
  id = 'id',
  tel = 'tel',
  code = 'code',
  role = 'role',
  surname = 'surname',
  name = 'name',
}
export enum FileScalarFieldEnum {
  id = 'id',
  filename = 'filename',
  mimetype = 'mimetype',
  encoding = 'encoding',
  uri = 'uri',
}
export enum PostScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  blocked = 'blocked',
  picture = 'picture',
  title = 'title',
  description = 'description',
  userId = 'userId',
}
export enum LikeScalarFieldEnum {
  id = 'id',
  createAt = 'createAt',
  postId = 'postId',
  userId = 'userId',
}
export enum CommentScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  blocked = 'blocked',
  text = 'text',
  postId = 'postId',
  userId = 'userId',
}
export enum GroupScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
}
export enum MembershipScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  userId = 'userId',
  groupId = 'groupId',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}
