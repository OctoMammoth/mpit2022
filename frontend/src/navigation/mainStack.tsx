import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import {MainTabs} from './tabs'

import {Colors} from '../colors'
import { RootStackParamList } from './rootStackParamList'
import { useColorScheme } from 'react-native'

import TestZone from '../pages/TestZone'
import Jitsi from '../pages/Jitsi/index.js'
import UploadImage from '../pages/UploadImage'
import Auth from '../pages/Auth'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootStackNav = () => {
   const isDarkMode = useColorScheme() === 'dark'
   // const ColorSheet = isDarkMode ? Colors.dark : Colors.light

   return (
      <Stack.Navigator
         screenOptions={{
            headerStyle: {
               // backgroundColor: ColorSheet.backgroundColor,
            },
            headerShadowVisible: false,
            headerTitleStyle: {
               // color: ColorSheet.textColor,
            },
            headerTitleAlign: 'center',
            headerShown: false,
            // headerTintColor: ColorSheet.textColor,
         }}>
            <Stack.Screen
               name="Auth"
               component={Auth}
            />
            <Stack.Screen
               name="TestZone"
               component={TestZone}
            />
            <Stack.Screen
               name="Jitsi"
               component={Jitsi}
            />
            <Stack.Screen
               name="UploadImage"
               component={UploadImage}
            />
         <Stack.Group
            screenOptions={{
               presentation: 'transparentModal',
               animation: 'fade_from_bottom',
               headerShown: false,
            }}>
            
         </Stack.Group>
      </Stack.Navigator>
   )
}