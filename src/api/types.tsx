export enum QuestionType {
  MULTIPLE_CHOICE = "multiple-choice",
  FILL_IN_THE_BLANKS = "fill-in-the-blanks",
}

export type FillInTheBlanksType = {
  id: number;
  instructions: string;
  question: string;
  choices: string[];
  answers: string[];
};

export type MultipleChoiceType = {
  id: number;
  question: string;
  choices: string[];
  answer: string;
};

export type SetQuestions = MultipleChoiceType[] | FillInTheBlanksType[];
export type SingleQuestion = MultipleChoiceType | FillInTheBlanksType;
export type QuestionsPool = {
  id: number;
  questionType: QuestionType;
  questions: SetQuestions;
};
