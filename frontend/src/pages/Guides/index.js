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
          <TouchableOpacity>

          </TouchableOpacity>
          <Button
            onPress={() => {
                navigation.navigate("Jitsi", {id:"248v81s"})
            }}
            text={"Go to Jitsi"}
          />
      </Layout>
   )
}

export default Guides
