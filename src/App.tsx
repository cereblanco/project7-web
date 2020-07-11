import React from "react";

import { Box, Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import QuestionDeck from "./pages/QuestionDeck";

const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
        <Box my={10}>
          <QuestionDeck />
        </Box>   
    </Container>
  );
};

export default App;
