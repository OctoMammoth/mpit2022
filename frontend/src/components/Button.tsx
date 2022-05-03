import React, {useCallback, useState} from 'react'
import {TextStyle, TouchableOpacity, ViewStyle} from 'react-native'
import {ColorScheme} from '../colors'
import Text from './Text'

type Props = {
   text: string
   style?: ViewStyle
   textStyle?: TextStyle
   type?: 1 | 2 | 3 | 4
   disabled?: boolean
   onPress?: () => void
   bold?: boolean
}

const Button = ({
   text,
   style,
   textStyle,
   type = 1,
   disabled,
   onPress,
   bold,
}) => {
   const [isPressedIn, setPressedIn] = useState(false)

   const ColorSheet = ColorScheme()

   return (
      <TouchableOpacity
         disabled={disabled}
         activeOpacity={1}
         style={[
            {
               borderWidth: 1,
               borderRadius: 8,
            },
            disabled
               ? {
                    backgroundColor: ColorSheet.buttons[type - 1].disabled,
                    borderColor: ColorSheet.buttons[type - 1].disabledBorder,
                 }
               : {
                    backgroundColor: isPressedIn
                       ? ColorSheet.buttons[type - 1].onPress
                       : ColorSheet.buttons[type - 1].backgroundColor,
                    borderColor: isPressedIn
                       ? ColorSheet.buttons[type - 1].onPressBorder
                       : ColorSheet.buttons[type - 1].border,
                 },
            style,
         ]}
         onPress={onPress}
         onPressIn={useCallback(() => {
            setPressedIn(true)
         }, [isPressedIn])}
         onPressOut={useCallback(() => {
            setPressedIn(false)
         }, [isPressedIn])}>
         <Text
            bold
            style={{
               textAlign: 'center',
               fontSize: 14,
               paddingVertical: bold ? 12 : 8,
               color: disabled
                  ? ColorSheet.buttons[type - 1].disabledText
                  : isPressedIn
                  ? ColorSheet.buttons[type - 1].onPressText
                  : ColorSheet.buttons[type - 1].text,
               ...textStyle,
            }}>
            {text}
         </Text>
      </TouchableOpacity>
   )
}

export default Button
