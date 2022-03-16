import { useState } from 'react';
import Toast from 'react-native-toast-message';
import errors from '../constants/errors';
import useExercise from './useExercise';

export type Result = 'correct' | 'wrong';

const useExerciseResult = () => {
  const [selectedWord, setSelectedWord] = useState<string>();
  const [result, setResult] = useState<Result>();

  const { loading, currentExercise, onNextExercise } = useExercise();

  const onContinue = () => {
    if (result) {
      setSelectedWord(undefined);
      setResult(undefined);
      onNextExercise();
      return;
    }

    if (!selectedWord) {
      Toast.show(errors.Please_select_a_word);
      return;
    }

    if (selectedWord === currentExercise?.translationWord) {
      setResult('correct');
      return;
    }
    setResult('wrong');
  };

  return {
    currentExercise,
    loading,
    result,
    answer: currentExercise?.translationWord,
    selectedWord,
    onContinue,
    setSelectedWord,
  };
};

export default useExerciseResult;
