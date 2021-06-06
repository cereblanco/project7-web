import React, { useState } from "react";

import { Box, Paper, Typography } from "@material-ui/core";
import Question from "../components/multiplechoice/Question";
import Result from "../components/scores/Result";

import { MultipleChoiceType, QuestionType } from "../api/types";
import useQuestionApi from "../hooks/useQuestionApi";
import useScore from "../hooks/useScore";

const DEMO_QUESTION_ID = 1;
const DEMO_QUESTION_TYPE = QuestionType.MULTIPLE_CHOICE;

const MultipleChoiceDeck: React.FC = () => {
  const { currentCount, totalQuestions, currentQuestion, onNextQuestion } =
    useQuestionApi({
      questionId: DEMO_QUESTION_ID,
      questionType: DEMO_QUESTION_TYPE,
    });
  const { score, incrementScore } = useScore();
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const onNext = (): void => {
    if (currentCount === totalQuestions - 1) {
      setIsCompleted(true);
    }
    onNextQuestion();
  };

  const onSubmit = (point: number): void => {
    if (currentCount <= totalQuestions - 1) {
      incrementScore({ value: point });
    }
  };

  if (isCompleted) {
    return <Result score={score} total={totalQuestions} />;
  }

  return (
    <Paper>
      <Box minHeight="80vh" padding={4}>
        <Box textAlign="right">
          <Typography variant="h3">
            {" "}
            {currentCount + 1} / {totalQuestions}{" "}
          </Typography>
        </Box>
        <br />
        <Box marginBottom={2}>
          {currentQuestion ? (
            <Question
              {...(currentQuestion as MultipleChoiceType)}
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
