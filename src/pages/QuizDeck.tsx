import React from "react";

import { QuizDeckProps } from "../types";

const QuizDeck: React.FC<QuizDeckProps> = ({
  question,
  choices,
  answer,
}: QuizDeckProps) => {
  return (
    <>
      <h1>{question}</h1>
      <ul>
        {choices.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>{answer}</h2>
    </>
  );
};
export default QuizDeck;
