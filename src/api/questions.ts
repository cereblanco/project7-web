import { QuestionType, QuestionsPool } from "./types";

const questions: ReadonlyArray<QuestionsPool> = [
  {
    id: 1,
    questionType: QuestionType.MULTIPLE_CHOICE,
    questions: [
      {
        id: 276,
        question: "Which among the choices is the correct phrasal verb?",
        choices: ["result to", "result in", "result with"],
        answer: "result in",
      },
      {
        id: 277,
        question: "Which among the choices is the correct phrasal verb?",
        choices: ["share to", "share with", "share from"],
        answer: "share with",
      },
      {
        id: 278,
        question: "Which among the choices is the correct phrasal verb?",
        choices: ["sympathize with", "sympathize at", "sympathize to"],
        answer: "sympathize with",
      },
      {
        id: 279,
        question: "Which among the choices is the correct phrasal verb?",
        choices: ["believe at", "believe in", "believe on"],
        answer: "believe in",
      },
      {
        id: 280,
        question: "Which among the choices is the correct phrasal verb?",
        choices: ["made of", "made at", "made to"],
        answer: "made of",
      },
      {
        id: 281,
        question: "Which among the choices is the correct phrasal verb?",
        choices: ["agree on a plan", "agree to a plan", "agree at a plan"],
        answer: "agree on a plan",
      },
      {
        id: 282,
        question: "Which among the choices is the correct phrasal verb?",
        choices: ["compare to", "compare on", "compare from"],
        answer: "compare to",
      },
      {
        id: 283,
        question: "Which among the choices is the correct phrasal verb?",
        choices: ["conform to", "conform on", "conform in"],
        answer: "conform to",
      },
      {
        id: 284,
        question: "Which among the choices is the correct phrasal verb?",
        choices: ["rely on", "rely to", "rely in"],
        answer: "rely on",
      },
      {
        id: 285,
        question: "Which among the choices is the correct phrasal verb?",
        choices: ["dispose of", "dispose to", "dispose in"],
        answer: "dispose of",
      },
      {
        id: 286,
        question: "Which among the choices is the correct phrasal verb?",
        choices: [
          "take advantage of",
          "take advantage to",
          "take advantage on",
        ],
        answer: "take advantage of",
      },
      {
        id: 287,
        question: "Which among the choices is the correct phrasal verb?",
        choices: ["taken care of", "taken cared of", "took cared of"],
        answer: "taken care of",
      },
      {
        id: 288,
        question: "Which among the choices is the correct phrasal verb?",
        choices: ["interest in", "interest on", "interest at"],
        answer: "interest in",
      },
      {
        id: 289,
        question: "Which among the choices is the correct phrasal verb?",
        choices: ["cope up with", "cope with", "cope on with"],
        answer: "cope with",
      },
      {
        id: 290,
        question: "Which among the choices is the correct phrasal verb?",
        choices: ["avail of", "avail on", "avail at"],
        answer: "avail of",
      },
    ],
  },
  {
    id: 2,
    questionType: QuestionType.FILL_IN_THE_BLANKS,
    questions: [
      {
        id: 166,
        instructions: `Fill in the blanks with the correct preposition`,
        question: `
        _ Monday, September 5, I have a very important meeting to preside over 
        _ 9:00 in the morning. I have to conduct the meeting 
        _ two hours because I have to fly to Cebu for a training seminar. This training seminar will start 
        _ exactly 3:00 in the afternoon. The seminar will last up to 9:00 
        _ the evening. I have about an hour of rest, and then I have to rush back to the airport for my return flight to Manila. I should make it to the airport 
        _ minutes, or I may miss my flight. My arrival is 
        _ midnight. The invitation to attend a retreat 
        _ the weekend, came 
        _ a very bad time. My schedule is really full. Nevertheless, 
        _ Sunday, my family and I will go to Tagaytay for a well-deserved bonding time. I look forward to the time I spend with my family."
        `,
        choices: ["at", "in", "on"],
        answers: ["at", "in", "at", "in", "in", "at", "on", "at", "on"],
      },
    ],
  },
];

export default questions;
