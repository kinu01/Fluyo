import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './navigation/navigationParamList';
import { HomeScreen } from '../screens';

const Stack = createStackNavigator<MainStackParamList>();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
      initialRouteName="Home">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}
