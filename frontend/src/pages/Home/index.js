import React from 'react'
import {ImageBackground, ScrollView, TouchableOpacity, View} from 'react-native'
import Layout from '../../components/Layout'
import Text from '../../components/Text'
import {useQuery} from '@apollo/client'
import {FIND_MANY_POSTS} from '../../graphql/Post/query'
import {ColorScheme} from '../../colors'

const Home = ({navigation}) => {
   const {loading, data} = useQuery(FIND_MANY_POSTS)

   const ColorSheet = ColorScheme()

   return (
      <Layout style={{paddingTop: 24, paddingHorizontal: 0}}>
         <Text
            bold
            style={{textAlign: 'center', fontSize: 24, marginBottom: 24}}>
            Главная
         </Text>
         <ScrollView>
            {loading ? null : (
               <>
                  {data?.findManyPost?.map(e => {
                     return (
                        <TouchableOpacity
                            onPress={() => {navigation.navigate("PostPage", {id: e.id})}}
                           style={{
                              marginBottom: 16,
                              paddingBottom: 8,
                              backgroundColor: ColorSheet.inputBackgroundColor,
                              paddingHorizontal: 20,
                           }}>
                           <View style={{marginTop: 8}}>
                              <Text bold style={{fontSize: 12}}>
                                 3Limbs.ru
                              </Text>
                           </View>
                           {e?.picture[0] ? (
                              <ImageBackground
                                 source={{uri: e.picture[0]}}
                                 style={{
                                    paddingVertical: 8,
                                    marginVertical: 8,
                                    width: '100%',
                                    height: 180,
                                 }}
                              />
                           ) : null}
                           <Text bold style={{paddingVertical: 4}}>
                              {e.title}
                           </Text>
                           <Text>{e.description}</Text>
                        </TouchableOpacity>
                     )
                  })}
               </>
            )}
         </ScrollView>
      </Layout>
   )
}

export default Home
