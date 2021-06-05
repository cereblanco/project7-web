import React from "react";

import { Box, Container } from "@material-ui/core";

import MultipleChoiceDeck from "./pages/MultipleChoiceDeck";

const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box my={10}>
        <MultipleChoiceDeck />
      </Box>
    </Container>
  );
};

export default App;
