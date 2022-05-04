import React from 'react'
import {View} from 'react-native'
import Layout from '../../components/Layout'
import Text from '../../components/Text'
import Button from '../../components/Button'
import Input from '../../components/Input'
import {useMutation} from '@apollo/client'
import {AUTH} from '../../graphql/User/mutation'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Auth = ({navigation}) => {
   const [tel, setTel] = React.useState(null)

   const [auth] = useMutation(AUTH)

   return (
      <Layout style={{paddingBottom: 64}}>
         {/* <View style={{width: 32, height: 32, backgroundColor: 'indigo'}}>
            
         </View> */}
         <View style={{flex: 1}} />
         <Text bold style={{textAlign: 'center', fontSize: 24}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
         </Text>
         <Input
            state={tel}
            setState={setTel}
            label={'Номер телефона'}
            icon={() => {
               return <Text style={{marginRight: 4}}>+7</Text>
            }}
            placeholder={'9999999999'}
            style={{marginBottom: 4, marginTop: 32}}
         />
         {/* <Input placeholder={"пароль"}/> */}
         <View style={{flex: 1}} />
         <Button
            bold
            text={'Получить код'}
            style={{marginBottom: 8}}
            onPress={() => {
               try {

                  auth({
                     variables: {
                        tel
                     },
                     onCompleted: (data) => {
                        console.log(data)
                        navigation.push('Verify', {status: data.auth.status, tel})
                     },
                  })
               } catch (err) {
                  throw err
               }
            }}
            // onPress={() => {
            //    AsyncStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsMnFycHk1eTAwMDQxYWpnend6NjFpZ3MiLCJpYXQiOjE2NTE2MTk3NDB9.RbaY_9AhGI8DbzmW4mIF-MIJRvwBRCBmtHIyI9kDfFY")
            //    navigation.navigate('Main')
            // }}
         />
         {/* <Button bold type={2} text={'Зарегистрироваться'} /> */}
      </Layout>
   )
}

export default Auth
