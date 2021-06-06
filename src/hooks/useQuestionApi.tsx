import { useState, useEffect } from "react";

import questionApi from "../api/questionApi";
import { QuestionType } from "../api/types";

type useQuestionApiReturnType = {
  count: number;
  total: number;
  question: QuestionType | null;
  onNextQuestion: () => void;
};

const useQuestionApi = (): useQuestionApiReturnType => {
  const [total, setTotal] = useState<number>(0);
  const [count, setCounter] = useState<number>(0);
  const [question, setQuestion] = useState<QuestionType | null>(null);

  const onNextQuestion = (): void => {
    const counter = count + 1;
    setCounter(counter);
    setQuestion(questionApi.getQuestion(counter));
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
      const total = questionApi.getTotalNumberOfQuestions();
      setTotal(total);
    }
    fetchTotalNumberOfQuestion();
  }, []);

  return { count, total, question, onNextQuestion };
};

export default useQuestionApi;
