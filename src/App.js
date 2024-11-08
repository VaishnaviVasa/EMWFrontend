import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import MainContent from './MainContent';
import Navbar from './Navbar';
import AssessmentPage from './AssessmentPage';
import ViedoRecommendation from './Viedo';
import MoodTracker from './Mood';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Define the routes for MainContent and AssessmentPage */}
          <Route path="/" element={<MainContent />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/recommendations" element={<ViedoRecommendation />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
