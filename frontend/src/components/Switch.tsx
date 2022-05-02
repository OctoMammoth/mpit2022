import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import Animated, {
   withSpring,
   interpolateColor,
   useAnimatedStyle,
   useDerivedValue,
   withTiming,
   useSharedValue,
} from 'react-native-reanimated'
import {ColorScheme} from '../colors'

const Switch = ({setState}) => {
   const [theme, setTheme] = React.useState(false)

   const ColorSheet = ColorScheme()

   const progress = useDerivedValue(() => {
      return withTiming(theme ? 1 : 0)
   })

   const rBackgroundColor = useAnimatedStyle(() => {
      const backgroundColor = interpolateColor(
         progress.value,
         [0, 1],
         [ColorSheet.switchBackground, ColorSheet.inputIconColor],
      )

      return {
         backgroundColor,
      }
   })

   const offset = useSharedValue(0)

   const customSpringStyles = useAnimatedStyle(() => {
      return {
         transform: [
            {
               translateX: withSpring(offset.value, {
                  damping: 100,
                  stiffness: 250,
               }),
            },
         ],
      }
   })

   return (
      <TouchableOpacity
         activeOpacity={1}
         onPress={React.useCallback(() => {
            if (setState) setState(!theme)
            setTheme(!theme)
            offset.value = theme ? 0 : 20
         }, [theme])}>
         <Animated.View
            style={[
               {width: 44, height: 24, borderRadius: 24, padding: 2},
               rBackgroundColor,
            ]}>
            <Animated.View
               style={[
                  {
                     width: 20,
                     height: 20,
                     backgroundColor: 'white',
                     borderRadius: 10,
                  },
                  customSpringStyles,
               ]}></Animated.View>
         </Animated.View>
      </TouchableOpacity>
   )
}

export default Switch
