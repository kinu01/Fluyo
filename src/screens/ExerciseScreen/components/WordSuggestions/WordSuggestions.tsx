import React, { FC, useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button } from '../../../../components';
import { Exercise } from '../../../../types/exerciseTypes';
import { Result } from '../../../../hooks/useExerciseResult';
import styles from './styles';

interface WordSuggestionsProps {
  result?: Result;
  onWordPress?: (word: string) => void;
  exercise?: Exercise;
}

const WordSuggestions: FC<WordSuggestionsProps> = ({
  result,
  onWordPress,
  exercise,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>();

  useEffect(() => {
    if (!result) {
      setSelectedIndex(undefined);
    }
  }, [result]);

  const onSuggestionItemPress = (index: number) => {
    setSelectedIndex(index);

    if (exercise?.suggestions?.length) {
      onWordPress?.(exercise?.suggestions[index]);
    }
  };

  const renderSuggestionItem = (word: string, index: number) => {
    const isSelected = index === selectedIndex;
    return (
      <Button
        onPress={() => onSuggestionItemPress(index)}
        buttonType={isSelected ? 'empty' : undefined}
        key={word}>
        {word}
      </Button>
    );
  };

  return (
    <View
      pointerEvents={result ? 'none' : 'auto'}
      style={[styles.container, !!result && styles.resultContainer]}>
      {exercise?.suggestions?.map(renderSuggestionItem)}
    </View>
  );
};

export default WordSuggestions;
