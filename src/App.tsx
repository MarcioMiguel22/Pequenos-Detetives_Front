import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PuzzlesPage from './pages/PuzzlesPage';
import ResultPage from './pages/ResultPage';
import DetectivePuzzlesPage from './pages/DetectivePuzzlesPage';
import ChallengeRiddlesPage from './pages/ChallengeRiddlesPage';
import MysteryGamePage from './pages/MysteryGamePage';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/puzzles" element={<Navigate to="/puzzles/1" replace />} />
              <Route path="/puzzles/:id" element={<PuzzlesPage />} />
              <Route path="/detective" element={<Navigate to="/detective/1" replace />} />
              <Route path="/detective/:id" element={<DetectivePuzzlesPage />} />
              <Route path="/challenge-riddles" element={<Navigate to="/challenge-riddles/1" replace />} />
              <Route path="/challenge-riddles/:id" element={<ChallengeRiddlesPage />} />
              <Route path="/result" element={<ResultPage />} />
              <Route path="/mystery-game" element={<MysteryGamePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
