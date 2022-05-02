import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {ColorScheme} from '../colors'

type Props = {
   id: any,
   setState: any,
   state: any
}

const Checkbox = ({id, setState, state}: Props) => {
   const ColorSheet = ColorScheme()

   return (
      <TouchableOpacity
         activeOpacity={1}
         style={{
            width: 18,
            height: 18,
            borderWidth: 1,
            borderColor: id === state ? ColorSheet.switchActive : ColorSheet.inputBorderColor,
            backgroundColor: ColorSheet.inputBackgroundColor,
            borderRadius: 9,
            alignItems: 'center',
            justifyContent: 'center',
         }}
         onPress={() => {
             setState(id)
         }}>
         <View
            style={{
               width: 8,
               height: 8,
               backgroundColor: id === state ? ColorSheet.switchActive : ColorSheet.inputBorderColor,
               borderRadius: 4,
            }}
         />
      </TouchableOpacity>
   )
}

export default Checkbox
