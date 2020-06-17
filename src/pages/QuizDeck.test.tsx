import React from "react";
import ReactDOM from "react-dom";
import { render, screen, within } from "@testing-library/react";

import QuizDeck, { QuizDeckProps } from "./QuizDeck";

describe("QuizDeck", () => {
  const testProps: QuizDeckProps = {
    question: "What comes first?",
    choices: ["Chicken", "Egg"],
    answer: "Chicken",
  };

  const testComponent = <QuizDeck {...testProps}></QuizDeck>;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(testComponent, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render correctly", () => {
    render(testComponent);
    expect(screen.getByText("What comes first?")).toBeInTheDocument();
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(testProps.choices.length);
    listItems.forEach((item, index) => {
        const { getByText } = within(item)
        expect(getByText(testProps.choices[index])).toBeInTheDocument();
    });
    expect(screen.getByRole("heading", {name: "Chicken"})).toBeInTheDocument();
  });
});
