import {useColorScheme} from 'react-native'

export const Colors = (
   color: 'gray' | 'primary' | 'warning' | 'success' | 'error',
   level?:
      | 100
      | 200
      | 300
      | 400
      | 500
      | 600
      | 700
      | 800
      | 900
      | 1000
      | undefined,
) => {
   switch (color) {
      case 'gray':
         switch (level) {
            case 100:
               return '#FAFAFA'
            case 200:
               return '#F4F4F5'
            case 300:
               return '#E4E4E7'
            case 400:
               return '#D4D4D8'
            case 500:
               return '#A1A1AA'
            case 600:
               return '#71717A'
            case 700:
               return '#52525B'
            case 800:
               return '#3F3F46'
            case 900:
               return '#27272A'
            default:
               return '#18181B'
         }
      case 'primary':
         switch (level) {
            case 100:
               return '#EEF2FF'
            case 200:
               return '#E0E7FF'
            case 300:
               return '#C7D2FE'
            case 400:
               return '#A5B4FC'
            case 500:
               return '#818CF8'
            case 600:
               return '#6366F1'
            case 700:
               return '#4F46E5'
            case 800:
               return '#4338CA'
            case 900:
               return '#3730A3'
            default:
               return '#312E81'
         }
      case 'warning':
         return '#F79009'
      case 'success':
         return '#04A544'
      default:
         return '#F04438'
   }
}

export const ColorScheme = () => {
   const isDarkMode = useColorScheme() === 'dark'

   if (isDarkMode)
      //Dark Theme
      return {
         // backgroundColor: Colors('gray', 1000),
         backgroundColor: '#151518',
         textColor: Colors('gray', 100),
         textTransparentColor: Colors('gray', 700),
         inputBackgroundColor: Colors('gray', 1000),
         inputBorderColor: Colors('gray', 800),
         inputIconColor: Colors('primary', 600),
         placeholderText: Colors('gray', 500),
         switchBackground: Colors('gray', 900),
         switchActive: Colors('primary', 700),
         error: Colors('error'),
         buttons: [
            {
               backgroundColor: Colors('primary', 700),
               onPress: Colors('primary', 800),
               disabled: Colors('gray', 1000),
               text: 'white',
               onPressText: 'white',
               disabledText: Colors('gray', 800),
               border: Colors('primary', 700),
               onPressBorder: Colors('primary', 800),
               disabledBorder: Colors('gray', 1000),
            },
            {
               backgroundColor: Colors('gray', 900),
               onPress: Colors('gray', 800),
               disabled: Colors('gray', 900),
               text: Colors('gray', 300),
               onPressText: Colors('gray', 600),
               disabledText: Colors('gray', 800),
               border: Colors('gray', 900),
               onPressBorder: Colors('gray', 800),
               disabledBorder: Colors('gray', 900),
            },
            {
               backgroundColor: Colors('gray', 1000),
               onPress: Colors('gray', 900),
               disabled: Colors('gray', 1000),
               text: 'white',
               onPressText: 'white',
               disabledText: Colors('gray', 500),
               border: Colors('gray', 800),
               onPressBorder: Colors('gray', 800),
               disabledBorder: Colors('gray', 900),
            },
            {
               backgroundColor: undefined,
               onPress: undefined,
               disabled: undefined,
               text: Colors('primary', 600),
               onPressText: Colors('primary', 800),
               disabledText: Colors('gray', 800),
               border: 'rgba(0,0,0,0)',
               onPressBorder: 'rgba(0,0,0,0)',
               disabledBorder: 'rgba(0,0,0,0)',
            },
         ],
      }
   //Light Theme
   return {
      // backgroundColor: Colors('gray', 100),
      backgroundColor: 'white',
      textColor: Colors('gray', 1000),
      textTransparentColor: Colors('gray', 700),
      inputBackgroundColor: Colors('gray', 100),
      inputBorderColor: Colors('gray', 300),
      inputIconColor: Colors('primary', 700),
      placeholderText: Colors('gray', 500),
      switchBackground: Colors('gray', 400),
      switchActive: Colors('primary', 700),
      error: Colors('error'),
      buttons: [
         {
            backgroundColor: Colors('primary', 700),
            onPress: Colors('primary', 800),
            disabled: Colors('primary', 400),
            text: 'white',
            onPressText: 'white',
            disabledText: 'white',
            border: Colors('primary', 700),
            onPressBorder: Colors('primary', 800),
            disabledBorder: Colors('primary', 400),
         },
         {
            backgroundColor: Colors('gray', 100),
            onPress: Colors('gray', 200),
            disabled: Colors('gray', 100),
            text: Colors('primary', 700),
            onPressText: Colors('primary', 800),
            disabledText: Colors('primary', 400),
            border: Colors('gray', 100),
            onPressBorder: Colors('gray', 200),
            disabledBorder: Colors('gray', 100),
         },
         {
            backgroundColor: Colors('gray', 100),
            onPress: Colors('gray', 200),
            disabled: 'white',
            text: Colors('gray', 1000),
            onPressText: Colors('gray', 1000),
            disabledText: Colors('gray', 500),
            border: Colors('gray', 300),
            onPressBorder: Colors('gray', 300),
            disabledBorder: Colors('gray', 300),
         },
         {
            backgroundColor: undefined,
            onPress: undefined,
            disabled: undefined,
            text: Colors('primary', 700),
            onPressText: Colors('primary', 800),
            disabledText: Colors('gray', 500),
            border: 'rgba(0,0,0,0)',
            onPressBorder: 'rgba(0,0,0,0)',
            disabledBorder: 'rgba(0,0,0,0)',
         },
      ],
   }
}
