import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../../../components';
import { Exercise } from '../../../../types/exerciseTypes';
import styles from './styles';

interface TranslationSentenceProps {
  selectedWord?: string;
  exercise?: Exercise;
}

const TranslationSentence: FC<TranslationSentenceProps> = ({
  selectedWord,
  exercise,
}) => {
  const sentenceList = useMemo(() => {
    return exercise?.translationSentence?.split(' ');
  }, [exercise?.translationSentence]);

  const renderTaskWord = (word: string) => {
    if (selectedWord) {
      return <Button key={word}>{selectedWord}</Button>;
    }
    return (
      <View key={word} style={styles.taskSpaceContainer}>
        <View style={styles.dash} />
      </View>
    );
  };

  const renderSentenceWord = (word: string) => {
    const singleWord = word.replace(/\./g, '');
    const isTaskWord = singleWord === exercise?.translationWord;

    if (isTaskWord) {
      return renderTaskWord(word);
    }
    return (
      <View key={word} style={styles.labelContainer}>
        <Text style={styles.label}>{` ${word} `}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        {sentenceList?.map(renderSentenceWord)}
      </View>
    </View>
  );
};

export default TranslationSentence;
