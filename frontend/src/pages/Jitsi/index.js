import React, {useState} from 'react'
import {ActivityIndicator, Dimensions} from 'react-native'
import WebView from 'react-native-webview'
import Layout from '../../components/Layout'

const {width} = Dimensions.get('screen')

//https://mpit.3limbs.ml/DistinctivePeaksCombineUpwards#config.disableDeepLinking=true
const Jitsi = ({
   route: {
      params: {id},
   },
}) => {
   const [state, setState] = useState(true)
   let jsCode = ``
   return (
      <Layout style={{paddingBottom: 0, paddingHorizontal: 0, paddingTop: 0}}>
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
            style={{flex: 1, width}}
            source={{
               uri: `https://mpit.3limbs.ml/${id}#config.disableDeepLinking=true`,
            }}
            renderLoading={<ActivityIndicator></ActivityIndicator>}
            bounces={false}
         />
      </Layout>
   )
}

export default Jitsi
