import React from 'react';
import {
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import styles from './styles';

type ButtonType = 'primary_variant' | 'secondary' | 'empty';

interface ButtonProps extends TouchableOpacityProps {
  onPress?: () => void;
  children?: JSX.Element | string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  removeBorder?: boolean;
  buttonType?: ButtonType;
}

export default function Button({
  onPress,
  children,
  containerStyle,
  titleStyle,
  removeBorder = false,
  buttonType,
  ...otherProps
}: ButtonProps) {
  const extraContainerStyle: {
    [key in ButtonType]: StyleProp<ViewStyle | TextStyle>;
  } = {
    primary_variant: styles.primaryVariantContainer,
    secondary: styles.secondaryContainer,
    empty: styles.emptyContainer,
  };

  const extraTextStyle: {
    [key in ButtonType]: StyleProp<ViewStyle | TextStyle>;
  } = {
    primary_variant: styles.secondarytitle,
    secondary: styles.secondarytitle,
    empty: styles.emptyTitle,
  };

  const renderChildren = () => {
    if (typeof children === 'string') {
      return (
        <Text
          style={[
            styles.title,
            !!buttonType && extraTextStyle[buttonType],
            titleStyle,
          ]}
          {...otherProps}>
          {children}
        </Text>
      );
    } else {
      return children;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.container,
        !!buttonType && extraContainerStyle[buttonType],
        removeBorder && styles.removeBorderContainer,
        containerStyle,
      ]}
      {...otherProps}>
      {renderChildren()}
    </TouchableOpacity>
  );
}
