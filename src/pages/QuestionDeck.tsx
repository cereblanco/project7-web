import React, { useState, useEffect } from "react";

import { QuestionApiResponse } from "../types";
import qapi from "../api/qapi";
import Question from "../components/Question";

const QuestionDeck: React.FC = () => {
  const [total, setTotal] = useState<number>(0);
  const [count, setCounter] = useState<number>(0);
  const [question, setQuestion] = useState<QuestionApiResponse>(null);

  useEffect(() => {
    function fetchQuestion(): void {
      const question = qapi.getQuestion(0);
      setQuestion(question);
    }
    fetchQuestion();
  }, []);

  useEffect(() => {
    async function fetchTotalNumberOfQuestion(): Promise<void> {
      const total = qapi.getTotalNumberOfQuestions();
      setTotal(total);
    }
    fetchTotalNumberOfQuestion();
  }, []);

  const onNextQuestion = (): void => {
    if (count < total - 1) {
      const counter = count + 1;
      setCounter(counter);
      setQuestion(qapi.getQuestion(counter));
    }
  };

  return (
    <>
      <h1>
        {count + 1} / {total}
      </h1>
      {question ? (
        <Question {...question} onNextQuestion={onNextQuestion} />
      ) : null}
    </>
  );
};

export default QuestionDeck;
