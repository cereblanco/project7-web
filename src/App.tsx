import React from "react";

import { Card, Col, Container, Row } from "react-bootstrap";

import GlobalStyle from "./GlobalStyle";
import QuestionDeck from "./pages/QuestionDeck";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <Container fluid>
        <Row className="p-4">
          <Col>
            <Card className="card-block align-middle">
              <QuestionDeck />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
