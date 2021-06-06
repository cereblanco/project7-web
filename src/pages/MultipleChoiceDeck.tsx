import React, { useState } from "react";

import { Box, Paper, Typography } from "@material-ui/core";
import Question from "../components/multiplechoice/Question";
import Result from "../components/scores/Result";

import useQuestionApi from "../hooks/useQuestionApi";
import useScore from "../hooks/useScore";

const MultipleChoiceDeck: React.FC = () => {
  const { count, total, question, onNextQuestion } = useQuestionApi();
  const { score, incrementScore } = useScore();
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const onNext = (): void => {
    if (count === total - 1) {
      setIsCompleted(true);
    }
    onNextQuestion();
  };

  const onSubmit = (point: number): void => {
    if (count <= total - 1) {
      incrementScore({ value: point });
    }
  };

  if (isCompleted) {
    return <Result score={score} total={total} />;
  }

  return (
    <Paper>
      <Box minHeight="80vh" padding={4}>
        <Box textAlign="right">
          <Typography variant="h3">
            {" "}
            {count + 1} / {total}{" "}
          </Typography>
        </Box>
        <br />
        <Box marginBottom={2}>
          {question ? (
            <Question
              {...question}
              onNextQuestion={onNext}
              onSubmitQuestion={onSubmit}
            />
          ) : null}
        </Box>
      </Box>
    </Paper>
  );
};

export default MultipleChoiceDeck;
