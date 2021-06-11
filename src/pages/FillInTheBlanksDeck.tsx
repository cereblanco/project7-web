import {
  Box,
  Button,
  Grid,
  Chip,
  Container,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

import { FillInTheBlanksType, QuestionType } from "../api/types";
// import Result from "../components/scores/Result";
import useQuestionApi from "../hooks/useQuestionApi";
// import useScore from "../hooks/useScore";
import Blank from "../components/FillInTheBlanks/Blank";

const DEMO_QUESTION_ID = 2;
const DEMO_QUESTION_TYPE = QuestionType.FILL_IN_THE_BLANKS;

const BLANK_TOKEN = "_";

enum TokenType {
  WORD = "regular",
  BLANK = "blank",
}

type Tokens = {
  id: number;
  variant: TokenType.WORD | TokenType.BLANK;
  value: string;
};

const tokenizer = (text: string): ReadonlyArray<Tokens> | [] => {
  if (text === undefined) throw "Question text cannot be empty";
  const tokens = text.split(/\s+/);
  return tokens.map((token, index) => {
    if (token === BLANK_TOKEN) {
      return { id: index, variant: TokenType.BLANK, value: "" };
    }
    return { id: index, variant: TokenType.WORD, value: token };
  });
};

const checkAnswer = (userAnswers: Tokens[], correctAnswer: Tokens[]) => {};

const FillInTheBlanksDeck: React.FC = () => {
  const { currentQuestion } = useQuestionApi({
    questionId: DEMO_QUESTION_ID,
    questionType: DEMO_QUESTION_TYPE,
  });
  const [userAnswers, setUserAnswers] = useState({});

  if (!currentQuestion) {
    return null;
  }

  const tokens = tokenizer(currentQuestion.question);
  const onChange = (id: string, value: string): void => {
    const newUserAnswers: Partial<Tokens> = { ...userAnswers, [id]: value };
    setUserAnswers(newUserAnswers);
  };

  return (
    <Container>
      <Paper>
        <Box padding={5} minHeight="5vh">
          <Typography variant="h6">
            {(currentQuestion as FillInTheBlanksType).instructions}.
          </Typography>
          <Typography style={{ fontSize: 18 }} color="textSecondary">
            Choose from the following:{" "}
            {(currentQuestion as FillInTheBlanksType).choices.map(
              (choice, index) => [
                index > 0 && ", ",
                <Chip
                  key={`choice-${index}`}
                  label={`${choice}`}
                  size="medium"
                />,
              ]
            )}
            .
          </Typography>
        </Box>
      </Paper>
      <br />
      <Paper>
        <Box minHeight="80vh" padding={4}>
          <Box textAlign="left" style={{ lineHeight: "3.5rem" }}>
            {tokens.map(({ id, variant, value }: Tokens, index: number) =>
              variant === TokenType.BLANK ? (
                <Blank
                  key={`blank-${id}`}
                  id={`blank-${id}`}
                  value={value}
                  disabled={false}
                  onChange={onChange}
                />
              ) : (
                <span key={`word-${index}`}>{` ${value} `} </span>
              )
            )}
          </Box>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="flex-end"
            paddingY={2}
          >
            <Button
              aria-label="submit"
              variant="contained"
              color="primary"
              size="medium"
            >
              Submit
            </Button>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default FillInTheBlanksDeck;
