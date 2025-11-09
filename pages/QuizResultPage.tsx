
import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { QuizResult } from '../types';
import Button from '../components/Button';

const QuizResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as QuizResult | null;

  if (!state) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">No result found.</h2>
        <Button onClick={() => navigate('/quizzes')}>Go to Quizzes</Button>
      </div>
    );
  }

  const { quiz, userAnswers, score, timeTaken } = state;
  const percentage = Math.round((score / quiz.questions.length) * 100);
  const timeMinutes = Math.floor(timeTaken / 60);
  const timeSeconds = timeTaken % 60;


  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-primary-800 mb-2">Quiz Completed!</h2>
        <p className="text-center text-gray-600 mb-6">Here's your result for "{quiz.title}"</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-8">
            <div className="bg-primary-100 p-4 rounded-lg">
                <p className="text-sm font-semibold text-primary-700">SCORE</p>
                <p className="text-3xl font-bold text-primary-900">{score} / {quiz.questions.length}</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-sm font-semibold text-green-700">PERCENTAGE</p>
                <p className="text-3xl font-bold text-green-900">{percentage}%</p>
            </div>
             <div className="bg-yellow-100 p-4 rounded-lg">
                <p className="text-sm font-semibold text-yellow-700">TIME TAKEN</p>
                <p className="text-3xl font-bold text-yellow-900">{String(timeMinutes).padStart(2, '0')}:{String(timeSeconds).padStart(2, '0')}</p>
            </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Review Answers</h3>
        <div className="space-y-6">
          {quiz.questions.map((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return (
              <div key={question.id} className="p-4 border rounded-lg">
                <p className="font-semibold text-lg mb-4">{index + 1}. {question.text}</p>
                <div className="space-y-2">
                  {question.options.map((option, optIndex) => {
                    let optionClass = "p-3 rounded-md border";
                    if(optIndex === question.correctAnswer) {
                       optionClass += " bg-green-100 border-green-300 text-green-800 font-semibold";
                    } else if (optIndex === userAnswer && !isCorrect) {
                       optionClass += " bg-red-100 border-red-300 text-red-800";
                    } else {
                       optionClass += " bg-gray-50 border-gray-200";
                    }

                    return <div key={optIndex} className={optionClass}>{option}</div>
                  })}
                </div>
                {!isCorrect && userAnswer !== null && (
                   <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-400">
                    <p className="font-semibold text-red-800">Your answer: {question.options[userAnswer]}</p>
                   </div>
                )}
                 <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400">
                    <p className="font-semibold text-blue-800">Explanation:</p>
                    <p className="text-blue-700">{question.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 text-center">
            <Link to="/quizzes">
                <Button>Take Another Quiz</Button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizResultPage;
