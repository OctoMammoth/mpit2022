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
import Verify from '../pages/Verify'
import Splash from '../pages/Splash'
import { MainTabs } from './tabs'
import ChatSession from '../pages/ChatSession'

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
               name="Splash"
               component={Splash}
            />
            <Stack.Screen
               name="ChatSession"
               component={ChatSession}
            />
            <Stack.Screen
               name="Auth"
               component={Auth}
            />
            <Stack.Screen
               name="Verify"
               component={Verify}
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
            <Stack.Screen
               name="Main"
               component={MainTabs}
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