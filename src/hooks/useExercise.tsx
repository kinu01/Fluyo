import { localizeString } from 'i18n';
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import errors from '../constants/errors';
import { exercisesRef } from '../services';
import { Exercise } from '../types/exerciseTypes';

export type Result = 'correct' | 'wrong';

const useExercise = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentExercise, setCurrentExercise] = useState<Exercise>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeExercises();
    return unsubscribe;
  }, []);

  const subscribeExercises = () => {
    return exercisesRef.onSnapshot(
      snapshots => {
        const data = snapshots.docs.map(doc => ({
          ...(doc.data() as Exercise),
          id: doc.id,
        }));
        setExercises(data);
        if (data.length) {
          setCurrentExercise(data[0]);
        }

        setLoading(false);
      },
      error => {
        setLoading(false);
        console.warn(error);
        Toast.show(errors.failed_to_load_exercise);
      },
    );
  };

  const onRestartExercise = () => {
    setCurrentExercise(exercises[0]);
  };

  const onNextExercise = () => {
    const currentIndex = exercises.findIndex(
      exerciseItem => exerciseItem.id === currentExercise?.id,
    );

    const nextIndex = currentIndex + 1;

    if (currentIndex < 0) {
      onRestartExercise();
      return;
    }

    if (!exercises[nextIndex]) {
      Alert.alert(
        localizeString('Exercise_Complete'),
        localizeString('Do_you_want_to_restart_exercise'),
        [
          {
            onPress: onRestartExercise,
            text: localizeString('Yes'),
          },
          {
            text: localizeString('No'),
          },
        ],
      );
      return;
    }

    setCurrentExercise(exercises[nextIndex]);
  };

  return { loading, currentExercise, onNextExercise };
};

export default useExercise;
