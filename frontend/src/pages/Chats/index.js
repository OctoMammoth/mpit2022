import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import Layout from '../../components/Layout'
import Text from '../../components/Text'
import {useQuery} from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
   getConversationBuilder,
   Session,
   Chatbox,
   oneOnOneId,
} from '@talkjs/react-native'
import {ME} from '../../graphql/User/query'

const Chats = ({navigation}) => {
   const {data, loading} = useQuery(ME, {
      onCompleted: data => {
         console.log(data)
      },
   })

   // const me = {
   //    id: `${data?.me?.id}`,
   //    name: `${data?.me?.tel}`,
   //    email: 'alice@example.com',
   //    role: 'default',
   // }

   // console.log(data,'asd')

   // const other = {
   //    id: `${data?.me?.id=='cl2qcyjte0002pujgek9hchow' ? 'cl2qrpy5y00041ajgzwz61igs' : 'cl2qcyjte0002pujgek9hchow'}`,
   //    name: `${data?.me?.tel=='9991730064' ? '9644254055' : '9991730064'}`,
   //    email: 'Sebastian@example.com',
   //    role: 'default',
   // }

   // const conversationBuilder = getConversationBuilder(
   //    oneOnOneId(me, other),
   // )

   // conversationBuilder.setParticipant(me)
   // conversationBuilder.setParticipant(other)

   return (
      <Layout style={{paddingTop: 24}}>
         <Text bold style={{textAlign: 'center', fontSize: 24}}>
            Чат
         </Text>
         <View style={{marginTop: 24}}>
            {data?.me?.chats?.map(({users}) => {
               let user = users[0].id === data?.me?.id ? users[1] : users[0]
               return (
                  <TouchableOpacity
                     key={user.tel}
                     style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 0.5,
								borderRadius: 8,
								paddingVertical: 4
                     }}
                     onPress={() => {
                        navigation.navigate('ChatSession', {
                           otherId: user.id,
                           otherTel: user.tel,
                        })
                     }}>
                     <View
                        style={{
                           width: 40,
                           height: 40,
                           borderRadius: 20,
                           backgroundColor: 'green',
                           marginLeft: 8,
                        }}
                     />
                     <Text
                        bold
                        style={{
                           paddingVertical: 16,
                           fontSize: 16,
                           flex: 1,
                           marginLeft: 12,
                        }}>
                        +7{user.tel}
                     </Text>
                  </TouchableOpacity>
               )
            })}
         </View>
         {/* <Session appId="ts38FUPO" me={me}>
            <Chatbox conversationBuilder={conversationBuilder} />
         </Session> */}
      </Layout>
   )
}

export default Chats
