import React, { FC } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface DescriptionProps {
  children: string;
}

const Description: FC<DescriptionProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{children}</Text>
    </View>
  );
};

export default Description;
