import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../pages/Home'
import { useColorScheme } from 'react-native'
import Icon from '../components/Icon'
import Search from '../pages/Search'
import Guides from '../pages/Guides'
import Chats from '../pages/Chats'
import Profile from '../pages/Profile'

const Tab = createBottomTabNavigator()

export const MainTabs = () => {
   const isDarkMode = useColorScheme() === 'dark'
   const backgroundColor = isDarkMode ? '#18181B' : 'white'
   const textColor = isDarkMode ? 'white' : 'black'

   return (
      <Tab.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor,
            },
            tabBarActiveTintColor: "#4F46E5",
            tabBarInactiveTintColor: "#A1A1AA",
            headerTitleStyle: {
               color: textColor,
            },
            tabBarStyle: {
               backgroundColor,
               borderTopWidth: 0,
               height: 50 + 8,
               paddingTop: 4,
               paddingBottom: 4
            },
            headerShown: false,
         }}>
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarIcon: ({color}) => {
                  return <Icon name="home" size={24} color={color} />
               },
               tabBarLabel: "Главная"
            }}
         />
         <Tab.Screen
            name="Search"
            component={Search}
            options={{
               tabBarIcon: ({color}) => {
                  return <Icon name="search" size={24} color={color} />
               },
               tabBarLabel: "Ваканции"
            }}
         />
         <Tab.Screen
            name="Guides"
            component={Guides}
            options={{
               tabBarIcon: ({color}) => {
                  return <Icon name="ascend" size={24} color={color} />
               },
               tabBarLabel: "Гайды"
            }}
         />
         <Tab.Screen
            name="Chat"
            component={Chats}
            options={{
               tabBarIcon: ({color}) => {
                  return <Icon name="comment" size={24} color={color} />
               },
               tabBarLabel: "Чаты"
            }}
         />
         <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
               tabBarIcon: ({color}) => {
                  return <Icon name="profile" size={24} color={color} />
               },
               tabBarLabel: "Профиль"
            }}
         />
      </Tab.Navigator>
   )
}