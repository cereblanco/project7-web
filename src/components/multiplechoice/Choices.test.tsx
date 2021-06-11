import React from "react";
import ReactDOM from "react-dom";

import Choices, { ChoicesProps } from "./Choices";

describe("Choices", () => {
  const testProps: ChoicesProps = {
    choices: ["Jose Rizal", "Andres Bonifacio", "Grabriela Silang"],
    onChange: jest.fn(),
    disabled: false,
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Choices {...testProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
