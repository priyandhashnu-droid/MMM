
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  linkTo: string;
  icon: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, linkTo, icon }) => {
  return (
    <Link to={linkTo} className="block group">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center text-center">
        <div className="bg-primary-100 text-primary p-4 rounded-full mb-4 group-hover:bg-primary-200 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
