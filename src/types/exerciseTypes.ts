interface Suggestion {
  id: string;
  word: string;
  translation: string;
}

export interface Exercise {
  id: string;
  tasks?: Suggestion[];
  suggestions?: Suggestion[];
  answer: Suggestion;
}
