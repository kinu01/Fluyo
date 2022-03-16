import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { Exercise } from '../../../../types/exerciseTypes';
import styles from './styles';

interface TaskSentenceProps {
  exercise?: Exercise;
}

const TaskSentence: FC<TaskSentenceProps> = ({ exercise }) => {
  const sentenceList = useMemo(() => {
    return exercise?.taskSentence?.split(' ');
  }, [exercise?.taskSentence]);

  const renderSentenceWord = (word: string) => {
    const singleWord = word.replace(/\./g, '');
    const isTaskWord = singleWord === exercise?.taskWord;
    return (
      <Text key={word} style={[styles.label, isTaskWord && styles.taskLabel]}>
        {`${word} `}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      {sentenceList?.map(renderSentenceWord)}
    </View>
  );
};

export default TaskSentence;
