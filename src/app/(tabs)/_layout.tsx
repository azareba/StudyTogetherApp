import { View, Text } from 'react-native'
import React from 'react'
import { NativeTabs } from 'expo-router/unstable-native-tabs'
import { Redirect } from "expo-router"
import { useAuth } from '@clerk/expo'

const TabsLayout = () => {
     const { isSignedIn, isLoaded } = useAuth()
    
      if (!isLoaded) {
        return null
      }
    
      if (!isSignedIn) {
        return <Redirect href={'/(auth)'} />
      }
    
  return (
    <NativeTabs>
      <NativeTabs.Trigger name='index'>
        <NativeTabs.Trigger.Label>Chats</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf='message' md="chat" selectedColor={"#AA6373"}/>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name='explore'>
        {/* <NativeTabs.Trigger.Badge>9+</NativeTabs.Trigger.Badge> */}
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf='safari' md="explore"/>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name='profile'>
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf='person.fill' md="person"/>
      </NativeTabs.Trigger>



    </NativeTabs>
  )
}

export default TabsLayout