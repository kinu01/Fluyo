import firestore from '@react-native-firebase/firestore';

export const exercises = 'exercises';

//firestore
export const db = firestore();
export const exercisesRef = db.collection(exercises);

export const arrayUnion = firestore.FieldValue.arrayUnion;
export const arrayRemove = firestore.FieldValue.arrayRemove;
export const increment = firestore.FieldValue.increment;

export const runTransaction = db.runTransaction;

export default function FirebaseRefs(id: string) {
  return {
    exerciseRef: exercisesRef.doc(id),
    getUID: exercisesRef.doc().id,
  };
}
