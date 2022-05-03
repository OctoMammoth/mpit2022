import React from 'react'
import {View} from 'react-native'
import Layout from '../../components/Layout'
import Text from '../../components/Text'
import Button from '../../components/Button'
import Input from '../../components/Input'

const Auth = () => {
   return (
      <Layout style={{paddingBottom: 64}}>
         {/* <View style={{width: 32, height: 32, backgroundColor: 'indigo'}}>
            
         </View> */}
         <View style={{flex: 1}} />
         <Text bold style={{textAlign: 'center', fontSize: 24}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
         </Text>
         <Input
            icon={() => {
               return <Text style={{marginRight: 4}}>+7</Text>
            }}
            placeholder={'999 999 99 99'}
            style={{marginBottom: 4, marginTop: 32}}
         />
         {/* <Input placeholder={"пароль"}/> */}
         <View style={{flex: 1}} />
         <Button bold text={'Войти'} style={{marginBottom: 8}} />
         <Button bold type={2} text={'Зарегистрироваться'} />
      </Layout>
   )
}

export default Auth
