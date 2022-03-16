import { localizeString } from 'i18n';
import React, { FC } from 'react';
import { View, Text, ColorValue } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../../../constants/theme';
import { Result } from '../../../../hooks/useExerciseResult';
import styles from './styles';

interface ResultWrapperProps {
  children: JSX.Element;
  result?: Result;
  answer?: string;
}

const ResultWrapper: FC<ResultWrapperProps> = ({
  children,
  result,
  answer,
}) => {
  const insets = useSafeAreaInsets();

  const containerBackgroundColor: {
    [key in Result]: ColorValue | undefined;
  } = {
    correct: COLORS.successColor,
    wrong: COLORS.errorColor,
  };

  const resultDescription: {
    [key in Result]: string;
  } = {
    correct: localizeString('Great_job_'),
    wrong: `${localizeString('Answer_')} ${answer}`,
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: Math.max(insets.bottom, 16),
          backgroundColor: result && containerBackgroundColor[result],
        },
      ]}>
      {!!result && (
        <Text style={styles.resultDescription}>
          {resultDescription[result]}
        </Text>
      )}
      {children}
    </View>
  );
};

export default ResultWrapper;
