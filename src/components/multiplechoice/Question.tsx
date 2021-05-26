import React, { useState } from "react";

import { Box, Button, Grid, Typography } from "@material-ui/core";

import Answer from "./Answer";
import Cheers from "./Cheers";
import Choices from "./Choices";

export type QuestionProps = {
  id: number;
  question: string;
  choices: ReadonlyArray<string>;
  answer: string;
  onNextQuestion: () => void;
  onSubmitQuestion: (increment: number) => void;
};

const Question: React.FC<QuestionProps> = ({
  question,
  choices,
  answer,
  onNextQuestion,
  onSubmitQuestion,
}: QuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(true);

  const onChange = (choice: string): void => {
    setSelectedAnswer(choice);
  };

  const onSubmit = (): void => {
    const isCorrect = selectedAnswer === answer;
    setIsCorrect(isCorrect);
    setIsActive(false);
    onSubmitQuestion(Number(isCorrect));
  };

  const onNext = (): void => {
    setIsActive(true);
    setIsCorrect(false);
    onNextQuestion();
  };

  const activeBtn = isActive ? (
    <Button
      aria-label="submit"
      variant="contained"
      color="primary"
      size="medium"
      onClick={onSubmit}
    >
      Submit
    </Button>
  ) : (
    <Button
      aria-label="next"
      variant="contained"
      color="primary"
      size="medium"
      onClick={onNext}
    >
      Next
    </Button>
  );

  return (
    <>
      <Box marginY={2}>
        <Typography variant="h4" align="justify">
          {question}
        </Typography>
      </Box>
      <br />
      <Grid container>
        <Grid item xs={7}>
          <Choices choices={choices} onChange={onChange} disabled={!isActive} />
        </Grid>
        <Grid item xs={5}>
          <Cheers visible={!isActive} positive={isCorrect} />
          <Answer text={answer} visible={!isActive && !isCorrect} />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container justifyContent="flex-end" alignItems="flex-end">
        {activeBtn}
      </Grid>
    </>
  );
};

export default Question;
