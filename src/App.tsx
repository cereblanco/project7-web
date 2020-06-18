import React from "react";

import { Card, Col, Container, Row } from "react-bootstrap";

import GlobalStyle from "./GlobalStyle";
import QuizDeck from "./pages/QuizDeck";

const App: React.FC = () => {
  const data = {
    key: 1,
    question: "Which came first?",
    choices: ["Chicken", "Egg"],
    answer: "Chicken",
  };

  return (
    <>
      <GlobalStyle />

      <Container fluid>
        <Row className="p-4">
          <Col>
            <Card className="card-block align-middle">
              <QuizDeck {...data} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
