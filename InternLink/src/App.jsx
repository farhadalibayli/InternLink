import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { InternshipsPage } from './components/InternshipsPage';
import { ExaminationPage } from './components/ExaminationPage';
import { CareerFairPage } from './components/CareerFairPage';

// 1. Import the i18n configuration
import './utils/i18n'; 
// 2. Import the necessary component from react-i18next
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n'; // Re-import i18n instance

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    // 3. Wrap the entire application with I18nextProvider
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

        {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === 'internships' && <InternshipsPage />}
        {currentPage === 'examination' && <ExaminationPage />}
        {currentPage === 'career-fair' && <CareerFairPage />}
      </div>
    </I18nextProvider>
  );
}