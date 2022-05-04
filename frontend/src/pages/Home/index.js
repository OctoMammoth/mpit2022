import React from 'react'
import {View} from 'react-native'
import Layout from '../../components/Layout'
import Text from '../../components/Text'

const Home = ({navigation}) => {
   return (
      <Layout style={{paddingBottom: 64, alignItems: 'center'}}>
          <Text>
              Home
          </Text>
      </Layout>
   )
}

export default Home
