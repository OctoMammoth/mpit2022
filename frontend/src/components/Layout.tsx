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
            paddingHorizontal: 8,
            paddingTop: 24,
            ...style,
         }}>
         {children}
      </SafeAreaView>
   )
}

export default Layout
