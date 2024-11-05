import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchResultsScreen, HomeScreen } from '../screens';

const HomeNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='HomeScreen' component={HomeScreen}/>
    <Stack.Screen name='SearchResultsScreen' component={SearchResultsScreen}/>
 
   </Stack.Navigator>
  )
}

export default HomeNavigator