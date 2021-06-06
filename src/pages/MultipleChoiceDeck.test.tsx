import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MultipleChoiceType } from "../api/types";
import MultipleChoiceDeck from "./MultipleChoiceDeck";
import questionApi from "../api/questionApi";

describe("MultipleChoiceDeck", () => {
  let testComponent: React.ReactElement;
  let fetchQuestionStub: jest.SpyInstance;

  const questions: MultipleChoiceType[] = [
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
    fetchQuestionStub = jest
      .spyOn(questionApi, "fetchQuestion")
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
    expect(fetchQuestionStub).toHaveBeenCalledTimes(1);

    expect(screen.getByText("1 / 2")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "submit" })).toBeInTheDocument();
  });

  it("retrieves and displays next item", () => {
    render(testComponent);
    expect(fetchQuestionStub).toHaveBeenCalledTimes(1);
    userEvent.click(screen.getByRole("button", { name: "submit" }));
    userEvent.click(screen.getByRole("button", { name: "next" }));
    expect(screen.getByText("2 / 2")).toBeInTheDocument();
  });

  it("shows final score", () => {
    render(testComponent);
    expect(fetchQuestionStub).toHaveBeenCalledTimes(1);
    userEvent.click(screen.getByRole("button", { name: "submit" }));
    userEvent.click(screen.getByRole("button", { name: "next" }));
    userEvent.click(screen.getByRole("button", { name: "submit" }));
    userEvent.click(screen.getByRole("button", { name: "next" }));
    expect(screen.getByText("Your final score is")).toBeInTheDocument();
  });
});
