
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QUIZZES } from '../constants';
import { Quiz, QuizAttempt } from '../types';
import Button from '../components/Button';

const QuizPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  
  useEffect(() => {
    const foundQuiz = QUIZZES.find((q) => q.id === id);
    if (foundQuiz) {
      setQuiz(foundQuiz);
      setTimeLeft(foundQuiz.duration * 60);
      setUserAnswers(new Array(foundQuiz.questions.length).fill(null));
    } else {
      navigate('/quizzes');
    }
  }, [id, navigate]);
  
  const handleSubmit = useCallback(() => {
      if (!quiz) return;

      let score = 0;
      for(let i=0; i < quiz.questions.length; i++){
          if(userAnswers[i] === quiz.questions[i].correctAnswer) {
              score++;
          }
      }

      const attempt: QuizAttempt = {
          quizId: quiz.id,
          quizTitle: quiz.title,
          score: score,
          totalQuestions: quiz.questions.length,
          date: new Date().toISOString()
      };
      
      const history: QuizAttempt[] = JSON.parse(localStorage.getItem('mmm-quiz-history') || '[]');
      history.unshift(attempt);
      localStorage.setItem('mmm-quiz-history', JSON.stringify(history));

      navigate('/quiz/result', { state: { quiz, userAnswers, score, timeTaken: (quiz.duration*60 - timeLeft) } });

  }, [quiz, userAnswers, navigate, timeLeft]);


  useEffect(() => {
    if (timeLeft <= 0 && quiz) {
      handleSubmit();
      return;
    }

    if (!quiz) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quiz, handleSubmit]);

  if (!quiz) {
    return <div>Loading quiz...</div>;
  }

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const goToNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-2xl font-bold text-primary-800">{quiz.title}</h2>
          <div className={`text-xl font-bold px-4 py-2 rounded-md ${timeLeft < 60 ? 'text-red-600 bg-red-100' : 'text-gray-700 bg-gray-100'}`}>
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
        </div>
        
        <div>
          <p className="text-lg text-gray-600 mb-2">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{currentQuestion.text}</h3>
          
          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200
                  ${userAnswers[currentQuestionIndex] === index 
                    ? 'bg-primary-100 border-primary-500 ring-2 ring-primary-300' 
                    : 'bg-white border-gray-300 hover:bg-primary-50 hover:border-primary-400'}`}
              >
                <span className="font-medium">{option}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-8 pt-6 border-t">
          <Button variant="secondary" onClick={goToPrevious} disabled={currentQuestionIndex === 0}>
            Previous
          </Button>
          
          {currentQuestionIndex === quiz.questions.length - 1 ? (
             <Button variant="primary" onClick={handleSubmit}>Submit Quiz</Button>
          ) : (
            <Button variant="primary" onClick={goToNext}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
