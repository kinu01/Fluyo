import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './navigation/navigationParamList';
import { ExerciseScreen } from '../screens';

const Stack = createStackNavigator<MainStackParamList>();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
      initialRouteName="Exercise">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Exercise"
        component={ExerciseScreen}
      />
    </Stack.Navigator>
  );
}
