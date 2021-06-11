import React from "react";

import { Box, Container } from "@material-ui/core";
// import MultipleChoiceDeck from "./pages/MultipleChoiceDeck";
import FillInTheBlanksDeck from "./pages/FillInTheBlanksDeck";

const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box my={10}>
        <FillInTheBlanksDeck />
      </Box>
    </Container>
  );
};

export default App;
