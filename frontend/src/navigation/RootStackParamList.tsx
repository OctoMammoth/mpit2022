import type {NativeStackScreenProps} from '@react-navigation/native-stack'

type JsonDataType = {
   fn: string
   fp: string
   i: string
   n: string
   s: string
   t: string
}

export type RootStackParamList = {
   Splash: undefined
   TestZone: undefined
   Jitsi: {
      url: string
   }
   ChatSession: {
      otherId: string,
      otherTel: string
   }
   Auth: undefined
   Verify: {
      tel: string,
      status: string
   }
   UploadImage: undefined
   Main: undefined
}