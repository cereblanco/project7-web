import { useState } from "react";

type useScoreReturnType = {
  score: number;
  incrementScore: ({ value }: { value: number }) => void;
};

const useScore = (): useScoreReturnType => {
  const [score, setScore] = useState<number>(0);

  const incrementScore = ({ value = 1 }: { value: number }): void => {
    const newScore = score + value;
    setScore(newScore);
  };

  return { score, incrementScore };
};

export default useScore;
