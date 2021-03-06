import questionsPool from "./questions";
import { SetQuestions, QuestionsPool, QuestionType } from "./types";

//TODO: Replace this with real backend
const fetchSetQuestions = (
  id: number,
  questionType: QuestionType
): SetQuestions => {
  const pool = questionsPool.find((q: QuestionsPool) => q.id === id);
  if (pool === undefined) {
    throw "No question found!";
  } else if (pool.questionType !== questionType) {
    throw "Question type doesn't match!";
  } else {
    return pool.questions;
  }
};

export default { fetchSetQuestions };
