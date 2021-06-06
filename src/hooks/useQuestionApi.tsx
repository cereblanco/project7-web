import { useState, useEffect } from "react";

import questionApi from "../api/questionApi";
import { QuestionType } from "../api/types";

type useQuestionApiReturnType = {
  currentCount: number;
  totalQuestions: number;
  question: QuestionType | null;
  onNextQuestion: () => void;
};

const useQuestionApi = (): useQuestionApiReturnType => {
  const [currentCount, setCurrentCount] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [question, setQuestion] = useState<QuestionType | null>(null);

  const onNextQuestion = (): void => {
    const nextItem: number = currentCount + 1;
    setCurrentCount(nextItem);
    setQuestion(questionApi.getQuestion(nextItem));
  };

  useEffect(() => {
    function fetchQuestion(): void {
      const question = questionApi.getQuestion(0);
      setQuestion(question);
    }
    fetchQuestion();
  }, []);

  useEffect(() => {
    function fetchTotalNumberOfQuestion(): void {
      const totalQuestions = questionApi.getTotalNumberOfQuestions();
      setTotalQuestions(totalQuestions);
    }
    fetchTotalNumberOfQuestion();
  }, []);

  return { currentCount, totalQuestions, question, onNextQuestion };
};

export default useQuestionApi;
