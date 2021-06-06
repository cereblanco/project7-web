import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import ReactDOM from "react-dom";

import Question, { QuestionProps } from "./Question";

describe("Question", () => {
  let testComponent: React.ReactElement;
  let mockOnNext: jest.Mock;
  let mockOnSubmit: jest.Mock;

  const testProps: QuestionProps = {
    id: 1,
    question: "Who's the Philippines' national hero?",
    choices: ["Jose Rizal", "Andres Bonifacio", "Grabriela Silang"],
    answer: "Jose Rizal",
    onNextQuestion: jest.fn(),
    onSubmitQuestion: jest.fn(),
  };

  beforeEach(() => {
    mockOnNext = jest.fn();
    mockOnSubmit = jest.fn();
    testComponent = (
      <Question
        {...testProps}
        onNextQuestion={mockOnNext}
        onSubmitQuestion={mockOnSubmit}
      />
    );
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(testComponent, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correct question and the multiple choices", () => {
    render(testComponent);
    expect(
      screen.getByRole("heading", {
        name: "Who's the Philippines' national hero?",
      })
    ).toBeInTheDocument();
    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(testProps.choices.length);
    testProps.choices.forEach((choice) => {
      expect(screen.getByText(choice)).toBeInTheDocument();
    });
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("disables choices when clicking submit button", () => {
    render(testComponent);
    const selectOne = screen.getByRole("radio", { name: "Andres Bonifacio" });
    userEvent.click(selectOne);
    expect(selectOne).toBeChecked();

    expect(screen.queryByText("Next")).not.toBeInTheDocument();
    userEvent.click(screen.getByRole("button"));
    const radios = screen.getAllByRole("radio");

    // disabled choices
    radios.forEach((choice) => {
      expect(choice).toBeDisabled();
    });

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  it("shows next button and displays answer when hitting submit button", () => {
    render(testComponent);
    // selects a choice
    const selectOne = screen.getByRole("radio", { name: "Andres Bonifacio" });
    userEvent.click(selectOne);
    expect(selectOne).toBeChecked();

    // submits the choice
    userEvent.click(screen.getByRole("button", { name: "submit" }));

    // shows correct answer
    expect(mockOnSubmit).toHaveBeenCalled();
    expect(
      screen.getByRole("heading", { name: "Jose Rizal" })
    ).toBeInTheDocument();

    // hides submit button
    expect(
      screen.queryByRole("button", { name: "submit" })
    ).not.toBeInTheDocument();

    // shows next button
    expect(screen.getByRole("button", { name: "next" })).toBeInTheDocument();

    // does not move to next question yet
    expect(mockOnNext).not.toHaveBeenCalled();
  });

  it("calls onNextQuestion when hitting next button", () => {
    render(testComponent);
    // selects a choice
    const selectOne = screen.getByRole("radio", { name: "Andres Bonifacio" });
    userEvent.click(selectOne);
    expect(selectOne).toBeChecked();

    // submits the choice
    userEvent.click(screen.getByRole("button", { name: "submit" }));

    // shows next button
    const nextButton = screen.getByRole("button", { name: "next" });
    expect(nextButton).toBeInTheDocument();

    // calls next question
    userEvent.click(nextButton);
    expect(mockOnNext).toHaveBeenCalledTimes(1);
  });
});
