export type QuestionType = {
  id: number;
  question: string;
  choices: string[];
  answer: string;
};

export type QuestionApiResponse = QuestionType | null;
