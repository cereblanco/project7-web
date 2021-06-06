import { Box, Container } from "@material-ui/core";
import React from "react";

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
