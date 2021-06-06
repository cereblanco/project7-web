import { useState, useEffect } from "react";

import questionApi from "../api/questionApi";
import { SingleQuestion, QuestionType, SetQuestions } from "../api/types";

type useQuestionApiReturnType = {
  currentCount: number;
  totalQuestions: number;
  currentQuestion: SingleQuestion | null;
  onNextQuestion: () => void;
};

type useQuestionApiProps = {
  questionId: number;
  questionType: QuestionType;
};

const useQuestionApi = ({
  questionId,
  questionType,
}: useQuestionApiProps): useQuestionApiReturnType => {
  const [currentCount, setCurrentCount] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] =
    useState<SingleQuestion | null>(null);

  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [questions, setQuestions] = useState<SetQuestions>([]);

  useEffect(() => {
    function fetchSetQuestions(): void {
      const questions = questionApi.fetchSetQuestions(questionId, questionType);
      setQuestions(questions);
      setCurrentQuestion(questions[0]);
      setTotalQuestions(questions.length);
    }
    fetchSetQuestions();
  }, [questionId, questionType]);

  const onNextQuestion = (): void => {
    const nextItem: number = currentCount + 1;
    setCurrentCount(nextItem);
    setCurrentQuestion(questions[nextItem]);
  };

  return { currentCount, currentQuestion, totalQuestions, onNextQuestion };
};

export default useQuestionApi;
