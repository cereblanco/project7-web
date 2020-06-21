import React from "react";

export type AnswerProps = {
  answer: string;
  showAnswer: boolean;
  isCorrect?: boolean;
};

const Answer: React.FC<AnswerProps> = ({ answer, showAnswer }: AnswerProps) => {
  return <h4>{showAnswer ? answer : null}</h4>;
};

export default Answer;
