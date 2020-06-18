export type QuizDeckProps = {
  key: number;
  question: string;
  choices: string[];
  answer?: string;
};

export type Question = {
  id: number;
  question: string;
  choices: string[];
};
