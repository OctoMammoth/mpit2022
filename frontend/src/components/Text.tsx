import React from 'react'
import {Text as TextComponent, TextStyle} from 'react-native'
// import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme'
import { ColorScheme } from '../colors'

type Props = {
   children: any
   bold?: boolean
   transparent?: boolean
   style?: TextStyle
}

const Text = ({children, style, bold, transparent}: Props) => {
   const ColorSheet = ColorScheme()

   return (
      <TextComponent
         style={{
            fontFamily: bold ? 'SourceSansPro-Bold' : 'SourceSansPro-Regular',
            color: transparent ? ColorSheet.textTransparentColor : ColorSheet.textColor,
            ...style,
         }}>
         {children}
      </TextComponent>
   )
}
export default Text