import React from "react";
import ReactDOM from "react-dom";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Question, { QuestionProps } from "./Question";

describe("Question", () => {
  let testComponent: React.ReactElement;
  let mockOnNextQuestion: jest.Mock;

  const testProps: QuestionProps = {
    id: 1,
    question: "Who's the Philippines' national hero?",
    choices: ["Jose Rizal", "Andres Bonifacio", "Grabriela Silang"],
    answer: "Jose Rizal",
    onNextQuestion: jest.fn(),
  };

  beforeEach(() => {
    mockOnNextQuestion = jest.fn();
    testComponent = (
      <Question {...testProps} onNextQuestion={mockOnNextQuestion} />
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
      screen.getByText("Who's the Philippines' national hero?")
    ).toBeInTheDocument();
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(testProps.choices.length);
    listItems.forEach((item, index) => {
      const { getByText } = within(item);
      expect(getByText(testProps.choices[index])).toBeInTheDocument();
    });
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("shows answer and next button, and hides submit button on submit", () => {
    render(testComponent);
    const selectOne = screen.getByRole("radio", { name: "Andres Bonifacio" });
    userEvent.click(selectOne);
    expect(selectOne).toBeChecked();

    expect(
      screen.queryByRole("button", { name: "Next" })
    ).not.toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: "Submit" }));
    const listItems = screen.getAllByRole("listitem");
    listItems.forEach((item, index) => {
      const { getByLabelText } = within(item);
      expect(getByLabelText(testProps.choices[index])).toBeDisabled();
    });
    expect(
      screen.queryByRole("button", { name: "Submit" })
    ).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Next" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Jose Rizal" })
    ).toBeInTheDocument();
    expect(mockOnNextQuestion).not.toHaveBeenCalled();
  });

  it("calls onNextQuestion on next button click", () => {
    render(testComponent);
    userEvent.click(screen.getByRole("button", { name: "Submit" }));
    userEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(mockOnNextQuestion).toHaveBeenCalledTimes(1);
  });
});
