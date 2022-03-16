export interface Exercise {
  id: string;
  taskSentence: string;
  taskWord: string;
  translationSentence: string;
  translationWord: string;
  suggestions?: string[];
}
