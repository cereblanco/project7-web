import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";

import Choices, { ChoicesProps } from "./Choices";

describe("Choices", () => {
  let testComponent: React.ReactElement;
  const testProps: ChoicesProps = {
    choices: ["Jose Rizal", "Andres Bonifacio", "Grabriela Silang"],
    onChange: jest.fn(),
    disabled: false,
  };

  beforeEach(() => {
    testComponent = <Choices {...testProps} />;
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(testComponent, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the choices correctly", () => {
    render(testComponent);
    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(testProps.choices.length);
    testProps.choices.forEach((choice) => {
      expect(screen.getByText(choice)).toBeInTheDocument();
    });
  });
});
