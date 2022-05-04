import {useQuery} from '@apollo/client'
import React from 'react'
import {ImageBackground, ScrollView, View} from 'react-native'
import Layout from '../../components/Layout'
import Text from '../../components/Text'
import {FIND_UNIQUE_POST} from '../../graphql/Post/query'

const PostPage = ({
   navigation,
   route: {
      params: {id},
   },
}) => {
   const {data, refetch} = useQuery(FIND_UNIQUE_POST, {
      variables: {
         where: {
            id,
         },
      },
   })

   return (
      <Layout style={{paddingTop: 24, paddingHorizontal: 20}}>
         <Text
            bold
            style={{textAlign: 'center', fontSize: 24, marginBottom: 24}}>
            Новости
         </Text>
         <ScrollView>
            <View style={{marginTop: 8}}>
               <Text bold style={{fontSize: 12}}>
                  3Limbs.ru
               </Text>
            </View>
            {data?.findUniquePost?.picture[0] ? (
               <ImageBackground
                  source={{uri: data?.findUniquePost?.picture[0]}}
                  style={{
                     paddingVertical: 8,
                     marginVertical: 8,
                     width: '100%',
                     height: 180,
                  }}
               />
            ) : null}
            <Text bold style={{paddingVertical: 4}}>
               {data?.findUniquePost?.title}
            </Text>
            <Text>{data?.findUniquePost?.description}</Text>
            <Text
               bold
               style={{
                  marginTop: 32,
                  marginBottom: 8
               }}>
               Коментарии:
            </Text>
            {data?.findUniquePost?.comments?.map(e => {
               return (
                  <Text>
                     <Text bold>{e.createdBy.name}</Text> : <Text>{e.text}</Text>
                  </Text>
               )
            })}
         </ScrollView>
      </Layout>
   )
}

export default PostPage
