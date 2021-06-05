import React, { useState, useEffect } from "react";

import { Box, Paper, Typography } from "@material-ui/core";

import qapi from "../api/questionApi";
import { QuestionType } from "../api/types";

import Question from "../components/multiplechoice/Question";
import Result from "../components/scores/Result";

const MultipleChoiceDeck: React.FC = () => {
  const [total, setTotal] = useState<number>(0);
  const [count, setCounter] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [question, setQuestion] = useState<QuestionType | null>(null);

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
    if (count === total - 1) {
      setIsCompleted(true);
    }
    const counter = count + 1;
    setCounter(counter);
    setQuestion(qapi.getQuestion(counter));
  };

  const onSubmitQuestion = (increment: number): void => {
    if (count <= total - 1) {
      setScore(score + increment);
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
              onNextQuestion={onNextQuestion}
              onSubmitQuestion={onSubmitQuestion}
            />
          ) : null}
        </Box>
      </Box>
    </Paper>
  );
};

export default MultipleChoiceDeck;
