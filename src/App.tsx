import React from "react";
import GlobalStyle from "./GlobalStyle";
import QuizDeck from "./pages/QuizDeck";

const App: React.FC = () => {
  const data = {
    question: "What comes first",
    choices: ["Chicken", "Egg"],
    answer: "Chicken",
  };

  return (
    <>
      <GlobalStyle />
      <QuizDeck {...data} />
    </>
  );
};

export default App;
