import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";

import Answer from "./Answer";
import Choices from "./Choices";

const DEFAULT_POINTS_PER_QUESTION = 1;

export type QuestionProps = {
  id: number;
  question: string;
  choices: ReadonlyArray<string>;
  answer: string;
  onNextQuestion: () => void;
  onSubmitQuestion: (score: number) => void;
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
    const point = isCorrect ? DEFAULT_POINTS_PER_QUESTION : 0;
    setIsCorrect(isCorrect);
    setIsActive(false);
    onSubmitQuestion(point);
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
        <Typography variant="h4" align="left">
          {question}
        </Typography>
      </Box>
      <br />
      <Grid container justifyContent="space-between" height="100%">
        <Grid item>
          <Choices choices={choices} onChange={onChange} disabled={!isActive} />
        </Grid>
        <Grid item alignSelf="center" flex="shrink" paddingRight={10}>
          <Answer text={answer} visible={!isActive} isCorrect={isCorrect} />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="flex-end"
        alignItems="flex-end"
        paddingY={5}
      >
        {activeBtn}
      </Grid>
    </>
  );
};

export default Question;
