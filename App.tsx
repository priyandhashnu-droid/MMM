
import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import StudyMaterialsPage from './pages/StudyMaterialsPage';
import QuizListPage from './pages/QuizListPage';
import QuizPage from './pages/QuizPage';
import QuizResultPage from './pages/QuizResultPage';
import AboutPage from './pages/AboutPage';
import QuizHistoryPage from './pages/QuizHistoryPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Main />
      </HashRouter>
    </AuthProvider>
  );
};

const Main: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {!isLoginPage && user && <Header />}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/materials" element={<ProtectedRoute><StudyMaterialsPage /></ProtectedRoute>} />
          <Route path="/quizzes" element={<ProtectedRoute><QuizListPage /></ProtectedRoute>} />
          <Route path="/quiz/:id" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
          <Route path="/quiz/result" element={<ProtectedRoute><QuizResultPage /></ProtectedRoute>} />
          <Route path="/history" element={<ProtectedRoute><QuizHistoryPage /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
        </Routes>
      </main>
      {!isLoginPage && user && <Footer />}
    </div>
  );
};

interface ProtectedRouteProps {
  // Fix: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default App;
