import questions from "./questions";
import { QuestionType } from "./types";

//TODO: Replace this with real backend
function getQuestion(index: number): QuestionType | null {
  if (index <= questions.length) {
    return questions[index];
  }
  return null;
}

function getTotalNumberOfQuestions(): number {
  return questions.length;
}

export default { getQuestion, getTotalNumberOfQuestions };
