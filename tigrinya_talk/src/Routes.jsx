import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import InterpretersPage from './pages/Interpreters';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interpreters" element={<InterpretersPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;