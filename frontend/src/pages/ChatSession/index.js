import React from 'react'
import Layout from '../../components/Layout'
import {useQuery} from '@apollo/client'
import {getConversationBuilder, Session, Chatbox, oneOnOneId} from '@talkjs/react-native'
import {ME} from '../../graphql/User/query'

const ChatSession = ({
   navigation,
   route: {
      params: {
          otherId,
          otherTel
        },
   },
}) => {
   const {data, loading} = useQuery(ME, {
      onCompleted: data => {
         console.log(data)
      },
   })

   const me = {
      id: `${data?.me?.id}`,
      name: `+7${data?.me?.tel}`,
      email: 'alice@example.com',
      role: 'default',
   }

   console.log(data, 'asd')

   const other = {
      id: otherId,
      name: `+7${otherTel}`,
      email: 'Sebastian@example.com',
      role: 'default',
   }

   const conversationBuilder = getConversationBuilder(oneOnOneId(me, other))

   conversationBuilder.setParticipant(me)
   conversationBuilder.setParticipant(other)

   return (
      <Layout style={{paddingTop: 0, paddingHorizontal: 0}}>
         <Session appId="ts38FUPO" me={me}>
            <Chatbox conversationBuilder={conversationBuilder} />
         </Session>
      </Layout>
   )
}

export default ChatSession