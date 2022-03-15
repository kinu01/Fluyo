import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { HomeScreenProps } from '../../navigators/navigation/navigationScreenProps';

const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
