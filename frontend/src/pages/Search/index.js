import React from 'react'
import {ActivityIndicator} from 'react-native'
import Layout from '../../components/Layout'
import Text from '../../components/Text'
import Input from '../../components/Input'
import WebView from 'react-native-webview'

const Search = ({navigation}) => {
   const [state, setState] = React.useState(true)
   const [text, setText] = React.useState('')
   const [search, setSearch] = React.useState('')
   let jsCode = `
    document.getElementsByClassName('HH-Supernova-Search-Container supernova-navi-search-wrapper supernova-navi-search-wrapper_expanded supernova-navi-search-wrapper_search-page ')[0].style.display = 'none';
    document.getElementsByClassName('footer--AGgS1QnFH5Vv6tYWS4_F HH-Supernova-Footer')[0].style.display = 'none';
    document.getElementsByClassName('banner-place-wrapper_show-on-l')[0].style.display = 'none';
    document.getElementsByClassName('banner-place-wrapper_show-on-m')[0].style.display = 'none';
    document.getElementsByClassName('banner-place-wrapper_show-on-s')[0].style.display = 'none';
    document.getElementsByClassName('banner-place-wrapper_show-on-xs')[0].style.display = 'none';
    `
   return (
      <Layout style={{paddingBottom: 0, paddingHorizontal: 0, paddingTop: 4}}>
         <Input
            placeholder={'Поиск'}
            style={{marginHorizontal: 20}}
            state={text}
            setState={setText}
            onSubmitEditing={() => {setSearch(text)}}
         />
         <WebView
            containerStyle={{
               display: state ? 'none' : undefined,
            }}
            javaScriptEnabled={true}
            injectedJavaScript={jsCode}
            onLoad={() => {
               setState(true)
            }}
            onLoadEnd={() => {
               setState(false)
            }}
            style={{flex: 1, width: search ? '100%' : undefined}}
            source={{
               uri: `https://hh.ru/search/vacancy?area=80&fromSearchLine=true&text=${search}`,
            }}
            renderLoading={<ActivityIndicator></ActivityIndicator>}
            bounces={false}
         />
      </Layout>
   )
}

export default Search
