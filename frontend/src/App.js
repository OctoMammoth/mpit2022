import React from 'react'
import Navigation from './navigation'
import Toast from 'react-native-toast-message'
import toastConfig from './toast.config.js'

import { ApolloProvider } from '@apollo/client'
import client from './utils/apollo'

// import * as TalkRn from '@talkjs/react-native';

import OneSignal from 'react-native-onesignal';

//OneSignal Init Code
OneSignal.setLogLevel(6, 0);
OneSignal.setAppId("e3a1b34c-4cbf-4117-8e78-3af5c2402a20");
//END OneSignal Init Code

//Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse(response => {
  console.log("Prompt response:", response);
});

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  let notification = notificationReceivedEvent.getNotification();
  console.log("notification: ", notification);
  const data = notification.additionalData
  console.log("additionalData: ", data);
  // Complete with null means don't show a notification.
  notificationReceivedEvent.complete(notification);
});

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log("OneSignal: notification opened:", notification);
});

const App = () => {
   return (
      <ApolloProvider client={client}>
         <Navigation />
         <Toast config={toastConfig} />
      </ApolloProvider>
   )
}

export default App