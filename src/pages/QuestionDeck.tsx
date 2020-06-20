import React, { useState, useEffect } from "react";

import { QuestionType } from "../types";
import { getQuestion, getTotalNumberOfQuestions } from "../api/qapi";
import Question from "./Question";

const QuestionDeck: React.FC = () => {
  const total = getTotalNumberOfQuestions();
  const [count, setCounter] = useState<number>(0);
  const [question, setQuestion] = useState<QuestionType>(null);

  useEffect(() => {
    function fetchQuestion(): void {
      const question = getQuestion(0);
      setQuestion(question);
    }
    fetchQuestion();
  }, []);

  const onNextQuestion = (): void => {
    if (count < total - 1) {
      const counter = count + 1;
      setCounter(counter);
      setQuestion(getQuestion(counter));
    }
    setQuestion(null);
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
