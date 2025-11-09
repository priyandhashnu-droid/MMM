
import React from 'react';
import { Link } from 'react-router-dom';
import { QUIZZES } from '../constants';

const QuizListPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Available Quizzes</h2>
        <p className="text-gray-600 mt-2">Select a quiz to begin.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {QUIZZES.map((quiz) => (
          <div key={quiz.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-xl font-bold text-primary-800 mb-2">{quiz.title}</h3>
            <p className="text-gray-600 flex-grow">{quiz.description}</p>
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
              <span>{quiz.questions.length} Questions</span>
              <span>{quiz.duration} Mins</span>
            </div>
            <Link
              to={`/quiz/${quiz.id}`}
              className="mt-6 block w-full bg-primary-600 text-white text-center py-2 rounded-md font-semibold hover:bg-primary-700 transition-colors"
            >
              Start Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizListPage;
