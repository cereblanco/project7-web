import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { QuestionType } from "../types";
import QuestionDeck from "./QuestionDeck";
import qapi from "../api/qapi";

describe("QuestionDeck", () => {
  let testComponent: React.ReactElement;
  let getQuestionStub: jest.SpyInstance;
  let getTotalNumberOfQuestionsStub: jest.SpyInstance;

  const questions: ReadonlyArray<QuestionType> = [
    {
      id: 1,
      question: "Question 1",
      choices: ["Choice 1.1", "Choice 1.2", "Choice 1.3"],
      answer: "Choice #3",
    },
    {
      id: 2,
      question: "Question 2",
      choices: ["Choice 2.1", "Choice 2.2", "Choice 2.3"],
      answer: "Choice #3",
    },
  ];

  beforeEach(() => {
    getQuestionStub = jest
      .spyOn(qapi, "getQuestion")
      .mockReturnValue(questions[0]);
    getTotalNumberOfQuestionsStub = jest
      .spyOn(qapi, "getTotalNumberOfQuestions")
      .mockReturnValue(questions.length);

    testComponent = <QuestionDeck />;
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(testComponent, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("shows first question from api", () => {
    render(testComponent);
    expect(getQuestionStub).toHaveBeenCalledTimes(1);
    expect(getTotalNumberOfQuestionsStub).toHaveBeenCalledTimes(1);

    expect(screen.getByText("1 / 2")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "submit" })).toBeInTheDocument();
  });

  it("retrieves and displays next item", () => {
    render(testComponent);
    userEvent.click(screen.getByRole("button", { name: "submit" }));
    getQuestionStub.mockReturnValueOnce(questions[1]);
    userEvent.click(screen.getByRole("button", { name: "next" }));
    expect(getQuestionStub).toHaveBeenCalledTimes(2);
    expect(screen.getByText("2 / 2")).toBeInTheDocument();
  });
});
