import firestore from '@react-native-firebase/firestore';

export const Timestamp = () => {
  return firestore.Timestamp.now();
};
