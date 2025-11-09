
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Logo } from './Logo';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  const handleLogoClick = () => {
    navigate('/');
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
          <Logo className="h-10 w-10 text-primary" />
          <h1 className="text-xl md:text-2xl font-bold text-primary-800">MMM Study Circle</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-sm font-medium text-gray-600">Welcome, {user?.name}</span>
          <button
            onClick={handleLogout}
            className="bg-primary-600 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-primary-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
