import React from 'react'
import {StyleSheet, View, Text as RNText} from 'react-native'
import Layout from '../../components/Layout'
import Text from '../../components/Text'
import Button from '../../components/Button'
import Input from '../../components/Input'
import {
   CodeField,
   Cursor,
   useBlurOnFulfill,
   useClearByFocusCell,
} from 'react-native-confirmation-code-field'
import {ColorScheme} from '../../colors'
import { VERIFY } from '../../graphql/User/mutation'
import { useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Verify = ({navigation, route: { params : { status, tel }}}) => {
   const [value, setValue] = React.useState('')
   const ref = useBlurOnFulfill({value, cellCount: 4})
   const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
   })

   const [verify] = useMutation(VERIFY)

   const ColorSheet = ColorScheme()

   const styles = StyleSheet.create({
      root: {flex: 1, padding: 20},
      title: {textAlign: 'center', fontSize: 30},
      codeFieldRoot: {marginTop: 20},
      cell: {
         width: 48,
         height: 48,
         lineHeight: 46,
         fontSize: 24,
         borderWidth: 2,
         borderColor: ColorSheet.inputBorderColor,
         borderRadius: 4,
         textAlign: 'center',
      },
      focusCell: {
         borderColor: ColorSheet.switchBackground,
      },
   })

   return (
      <Layout style={{paddingBottom: 64}}>
         {/* <View style={{width: 32, height: 32, backgroundColor: 'indigo'}}>
            
         </View> */}
         <View style={{flex: 1}} />
         <Text bold style={{textAlign: 'center', fontSize: 24}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
         </Text>
         <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={4}
            rootStyle={[styles.codeFieldRoot, {marginHorizontal: 24}]}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
               <RNText
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
               </RNText>
            )}
         />
         {/* <Input placeholder={"пароль"}/> */}
         <View style={{flex: 1}} />
         <Button
            bold
            text={'Войти'}
            style={{marginBottom: 8}}
            onPress={() => {
                verify({
                    variables: {
                        tel,
                        code: value
                    },
                    onCompleted: async data => {
                        console.log(data)
                        if (data.verify.token) {
                            await AsyncStorage.setItem("token", data.verify.token)
                            navigation.reset({
                                index: 0,
                                routes: [{name: 'Main'}]
                          })
                        }
                    }
                })
            //    navigation.push('TestZone')
            }}
         />
         {/* <Button bold type={2} text={'Зарегистрироваться'} /> */}
      </Layout>
   )
}

export default Verify
