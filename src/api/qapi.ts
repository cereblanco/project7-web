import questions from "./questions";
import { QuestionApiResponse } from "../types";

type QuestionType = {
  id: number;
  question: string;
  choices: string[];
  answer: string;
};

//TODO: Replace this with real backend
function getQuestion(index: number): QuestionApiResponse {
  if (index <= questions.length) {
    return questions[index];
  }
  return null;
}

function getTotalNumberOfQuestions(): number {
  return questions.length;
}

export default { getQuestion, getTotalNumberOfQuestions };
