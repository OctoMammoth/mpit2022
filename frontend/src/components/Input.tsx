import React from 'react'
import {TextInput, View} from 'react-native'
import {ColorScheme} from '../colors'
import Text from './Text'

type Props = {
   placeholder?: string
   error?: boolean
   state?: string
   setState?: any
   label?: string
   hint?: string
	icon?: any
}

const Input = ({placeholder, error, setState, state, label, hint, icon}) => {
   const ColorSheet = ColorScheme()

   return (
      <View>
         {label ? <Text style={{fontSize: 16}}>{label}</Text> : null}
         <View
            style={{
               flexDirection: 'row',
               alignItems: 'center',
               paddingHorizontal: 14,
               marginVertical: 4,
               paddingVertical: 10,
               backgroundColor: ColorSheet.inputBackgroundColor,
               borderRadius: 8,
               borderColor: error
                  ? ColorSheet.error
                  : ColorSheet.inputBorderColor,
               borderWidth: 1,
            }}>
            {icon ? (
               <View
                  style={{
                     width: 24,
                     height: 24,
                     backgroundColor: ColorSheet.inputIconColor,
                     marginRight: 8,
                  }}>
                  {/* <Icon> */}
               </View>
            ) : null}
            <TextInput
               style={{padding: 0}}
               placeholderTextColor={ColorSheet.placeholderText}
               placeholder={placeholder}
               value={state}
               onChangeText={text => {
                  if (setState) setState(text)
               }}
            />
         </View>
         {hint ? (
            <Text
               transparent
               style={{color: error ? ColorSheet.error : undefined}}>
               Hint text
            </Text>
         ) : null}
      </View>
   )
}

export default Input
