import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Text from '../../components/Text'

const Guides = ({navigation}) => {
   return (
      <Layout style={{paddingBottom: 64}}>
          <Text bold style={{textAlign: 'center', fontSize: 24}}>
            Гайды
         </Text>
         <Text style={{textAlign: 'center', fontSize: 18}}>
            Сейчас идет вебинар
         </Text>
          <TouchableOpacity onPress={() => {
                navigation.navigate("Jitsi", {id:"248v81s"})
            }}
            style={{backgroundColor: '#6775FF', height: 84*2, borderRadius: 4}}>

          </TouchableOpacity>
      </Layout>
   )
}

export default Guides
