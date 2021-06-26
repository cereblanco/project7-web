import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import ReactDOM from "react-dom";

import questionApi from "../api/questionApi";
import { MultipleChoiceType } from "../api/types";
import MultipleChoiceDeck from "./MultipleChoiceDeck";

describe("MultipleChoiceDeck", () => {
  let testComponent: React.ReactElement;
  let fetchSetQuestionsStub: jest.SpyInstance;

  const questions: ReadonlyArray<MultipleChoiceType> = [
    {
      id: 1,
      question: "Question 1",
      choices: ["Choice 1", "Choice 2", "Choice 3"],
      answer: "Choice 1",
    },
    {
      id: 2,
      question: "Question 2",
      choices: ["Choice 1", "Choice 2", "Choice 3"],
      answer: "Choice 2",
    },
  ];

  beforeEach(() => {
    fetchSetQuestionsStub = jest
      .spyOn(questionApi, "fetchSetQuestions")
      .mockReturnValue(questions);
    testComponent = <MultipleChoiceDeck />;
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(testComponent, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("shows first question from api", () => {
    render(testComponent);
    expect(fetchSetQuestionsStub).toHaveBeenCalledTimes(1);

    expect(screen.getByText("1 / 2")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "submit" })).toBeInTheDocument();
  });

  it("retrieves and displays next item", () => {
    render(testComponent);
    expect(fetchSetQuestionsStub).toHaveBeenCalledTimes(1);
    userEvent.click(screen.getByRole("button", { name: "submit" }));
    userEvent.click(screen.getByRole("button", { name: "next" }));
    expect(screen.getByText("2 / 2")).toBeInTheDocument();
  });

  it("shows correct final score", () => {
    render(testComponent);
    expect(fetchSetQuestionsStub).toHaveBeenCalledTimes(1);
    // picks correct answer
    const correctAnswer = screen.getByRole("radio", { name: "Choice 1" });
    userEvent.click(correctAnswer);
    expect(correctAnswer).toBeChecked();
    userEvent.click(screen.getByRole("button", { name: "submit" }));
    userEvent.click(screen.getByRole("button", { name: "next" }));

    // selects wrong answer
    const wrongAnswer = screen.getByRole("radio", { name: "Choice 1" });
    userEvent.click(wrongAnswer);
    expect(wrongAnswer).toBeChecked();
    userEvent.click(screen.getByRole("button", { name: "submit" }));
    userEvent.click(screen.getByRole("button", { name: "next" }));

    // Score should be 1/2
    expect(screen.getByText("Your final score is")).toBeInTheDocument();
    expect(screen.getByText("1 / 2")).toBeInTheDocument();
  });
});
