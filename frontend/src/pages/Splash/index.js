import React from 'react'
import {View} from 'react-native'
import Layout from '../../components/Layout'
import Logo from '../../svg/logo.js'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = ({navigation}) => {
    setTimeout(async () => {
        if (await AsyncStorage.getItem("token"))
            navigation.replace('Main')
        else
            navigation.replace("Auth")
    }, 2000)

   return (
      <Layout style={{paddingBottom: 64, alignItems: 'center'}}>
         <View style={{flex: 2}} />
            <Logo/>
         <View style={{flex: 3}} />
      </Layout>
   )
}

export default Splash
