
export interface User {
  name: string;
  contact: string; // Email or Phone
}

export interface StudyMaterial {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'link' | 'image';
  url: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  questions: Question[];
}

export interface QuizAttempt {
  quizId: string;
  quizTitle: string;
  score: number;
  totalQuestions: number;
  date: string;
}

export interface QuizResult {
    quiz: Quiz;
    userAnswers: (number | null)[];
    score: number;
    timeTaken: number;
}
