import { localizeString } from 'i18n';
import React, { FC, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components';
import { ExerciseScreenProps } from '../../navigators/navigation/navigationScreenProps';
import Description from './components/Description/Description';
import TaskSentence from './components/TaskSentence/TaskSentence';
import ResultWrapper from './components/ResultWrapper/ResultWrapper';
import TranslationSentence from './components/TranslationSentence/TranslationSentence';
import WordSuggestions from './components/WordSuggestions/WordSuggestions';
import styles from './styles';
import useExerciseResult from '../../hooks/useExerciseResult';

const ExerciseScreen: FC<ExerciseScreenProps> = () => {
  const {
    loading,
    onContinue,
    answer,
    result,
    selectedWord,
    setSelectedWord,
    currentExercise,
  } = useExerciseResult();

  const buttonTitle = useMemo(() => {
    if (selectedWord && !result) {
      return localizeString('CHECK_ANSWER');
    }

    return localizeString('CONTINUE');
  }, [selectedWord, result]);

  if (loading) {
    return <ActivityIndicator style={styles.activityContainer} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Description>{localizeString('Fill_in_the_missing_word')}</Description>
      <TaskSentence exercise={currentExercise} />
      <TranslationSentence
        exercise={currentExercise}
        selectedWord={selectedWord}
      />
      <WordSuggestions
        exercise={currentExercise}
        result={result}
        onWordPress={setSelectedWord}
      />
      <ResultWrapper result={result} answer={answer}>
        <Button
          containerStyle={!selectedWord && styles.continueButtonContainer}
          titleStyle={[
            !selectedWord && styles.continueButtonLabel,
            result === 'correct' && styles.correctButtonLabel,
            result === 'wrong' && styles.wrongButtonLabel,
          ]}
          buttonType={selectedWord && !result ? 'primary_variant' : undefined}
          onPress={onContinue}>
          {buttonTitle}
        </Button>
      </ResultWrapper>
    </SafeAreaView>
  );
};

export default ExerciseScreen;
