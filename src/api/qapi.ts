import questions from "./questions";

type QuestionType = {
    id: number;
    question: string;
    choices: string[];
    answer: string,
};
  
//TODO: Replace this with real backend
export function getQuestion(index: number): QuestionType | null {
    if (index <= questions.length){
        return questions[index];
    }
    return null;
}

export function getTotalNumberOfQuestions(): number {
    return questions.length;
}