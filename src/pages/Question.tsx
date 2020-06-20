import React, { useState } from "react";

import { Button } from "react-bootstrap";

type ChoiceProps = {
  key: string;
  value: string;
  isChecked: boolean;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Choice: React.FC<ChoiceProps> = ({
  key,
  value,
  isChecked,
  disabled,
  onChange,
}: ChoiceProps) => {
  return (
    <li>
      <input
        id={key}
        type="radio"
        name="choices"
        checked={isChecked}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      <label htmlFor={key}>{value}</label>
    </li>
  );
};

type QuestionDeckProps = {
  id: number;
  question: string;
  choices: string[];
  answer: string;
  onNextQuestion: () => void;
};

const Question: React.FC<QuestionDeckProps> = ({
  question,
  choices,
  answer,
  onNextQuestion,
}: QuestionDeckProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showSubmitBtn, setShowSubmitBtn] = useState(true);
  const [showNextBtn, setShowNextBtn] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedAnswer(e.target.value);
  };

  const onSubmit = (): void => {
    if (selectedAnswer === answer) {
      alert("Correct!");
    }
    setShowNextBtn(true);
    setShowSubmitBtn(false);
  };

  const onNext = (): void => {
    setShowSubmitBtn(true);
    setShowNextBtn(false);
    onNextQuestion();
  };

  return (
    <>
      <h1>{question}</h1>
      <ul>
        {choices.map((value: string, index: number) => (
          <Choice
            key={index.toString()}
            value={value}
            isChecked={value === selectedAnswer}
            disabled={!showSubmitBtn}
            onChange={onChange}
          />
        ))}
      </ul>
      <h4>{showNextBtn ? answer : null}</h4>
      {showSubmitBtn ? (
        <span>
          <Button variant="danger" onClick={onSubmit}>
            Submit
          </Button>
        </span>
      ) : null}
      {showNextBtn ? (
        <span>
          <Button variant="success" onClick={onNext}>
            Next
          </Button>
        </span>
      ) : null}
    </>
  );
};

export default Question;
