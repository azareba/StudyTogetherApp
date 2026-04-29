import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Sentry from '@sentry/react-native';

const ChatsScreen = () => {
  return (
    // <View>
    //   <Text>ChatsScreen</Text>
    // </View>
    <SafeAreaView >
      <Text>ChatsScreen</Text>

      <Button title='Try!' onPress={ () => { Sentry.captureException(new Error('First error')) }}/>
    </SafeAreaView>
  )
}

export default ChatsScreen;