export interface Exercise {
  id: string;
  taskSentence: string;
  taskWord: string;
  translationSentence: string;
  translationWord: string;
  suggestions?: string[];
}

export const dummy_exercises: Exercise[] = [
  {
    id: 'ojsos9i9ujns',
    taskSentence: 'The house is small.',
    taskWord: 'house',
    translationSentence: 'Das Haus ist klein.',
    translationWord: 'Haus',
    suggestions: ['folgen', 'Schaf', 'Bereiden', 'Haus'],
  },
  {
    id: 'ojsos9i9ujns',
    taskSentence: 'The gate is blue.',
    taskWord: 'gate',
    translationSentence: 'Das Tor ist blau.',
    translationWord: 'Tor',
    suggestions: ['Hund', 'Buchen', 'Tor', 'Gelb'],
  },
  {
    id: 'ojsos9i9ujns',
    taskSentence: 'He is my friend.',
    taskWord: 'friend',
    translationSentence: 'Er ist mein Freund.',
    translationWord: 'Freund',
    suggestions: ['Bruder', 'Freund', 'Feind', 'Schwester'],
  },
  {
    id: 'ojsos9i9ujns',
    taskSentence: 'He is my friend.',
    taskWord: 'friend',
    translationSentence: 'Er ist mein Freund.',
    translationWord: 'Freund',
    suggestions: ['Bruder', 'Freund', 'Feind', 'Schwester'],
  },
  {
    id: 'ojsos9i9ujns',
    taskSentence: 'The dog is barking.',
    taskWord: 'barking',
    translationSentence: 'Der Hund bellt.',
    translationWord: 'bellt',
    suggestions: ['bellt', 'Essen', 'Schlafen', 'Tanzen'],
  },
];
