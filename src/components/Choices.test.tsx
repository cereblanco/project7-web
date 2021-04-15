import React from "react";
import ReactDOM from "react-dom";

import Choices, { ChoicesProps } from "./Choices";

describe("Choices", () => {
  let testComponent: React.ReactElement;
  const testProps: ChoicesProps = {
    choices: ["Jose Rizal", "Andres Bonifacio", "Grabriela Silang"],
    onChange: jest.fn(),
  };

  beforeEach(() => {
    testComponent = <Choices {...testProps} />;
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(testComponent, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
