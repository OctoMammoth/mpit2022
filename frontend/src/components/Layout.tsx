import React from 'react'
import {SafeAreaView, ViewStyle} from 'react-native'
import { ColorScheme } from '../colors'

type Props = {
   children: any
   style: ViewStyle
}

const Layout = ({children, style}: Props) => {
   return (
      <SafeAreaView
         style={{
            backgroundColor: ColorScheme().backgroundColor,
            height: '100%',
            paddingHorizontal: 20,
            paddingTop: 60,
            ...style,
         }}>
         {children}
      </SafeAreaView>
   )
}

export default Layout
