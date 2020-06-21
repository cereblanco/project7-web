import React, { useState } from "react";
import { Button } from "react-bootstrap";

import Answer from "./Answer";
import Choice from "./Choice";

export type QuestionProps = {
  id: number;
  question: string;
  choices: string[];
  answer: string;
  onNextQuestion: () => void;
};

const Question: React.FC<QuestionProps> = ({
  question,
  choices,
  answer,
  onNextQuestion,
}: QuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedAnswer(e.target.value);
  };

  const onSubmit = (): void => {
    if (selectedAnswer === answer) {
      alert("Correct!");
    }
    setIsActive(false);
  };

  const onNext = (): void => {
    setIsActive(true);
    onNextQuestion();
  };

  const activeBtn = isActive ? (
    <Button variant="danger" onClick={onSubmit}>
      {" "}
      Submit{" "}
    </Button>
  ) : (
    <Button variant="success" onClick={onNext}>
      {" "}
      Next{" "}
    </Button>
  );

  return (
    <>
      <h1>{question}</h1>
      <ul>
        {choices.map((value: string, index: number) => (
          <Choice
            key={index.toString()}
            value={value}
            isChecked={value === selectedAnswer}
            disabled={!isActive}
            onChange={onChange}
          />
        ))}
      </ul>
      <span>
        <Answer answer={answer} showAnswer={!isActive} />
      </span>
      <span>{activeBtn}</span>
    </>
  );
};

export default Question;
