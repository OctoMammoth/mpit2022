import React from 'react'
import Navigation from './navigation'
import Toast from 'react-native-toast-message'
import toastConfig from './toast.config.js'

import {ApolloProvider} from '@apollo/client'
import client from './apollo'

const App = () => {
   return (
      <ApolloProvider client={client}>
         <Navigation />
         <Toast config={toastConfig} />
      </ApolloProvider>
   )
}

export default App