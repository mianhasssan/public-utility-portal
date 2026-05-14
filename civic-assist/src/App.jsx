import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Complaint from './pages/Complaint';
import Outage from './pages/Outage';
import Queue from './pages/Queue';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/complaints" element={<Complaint />} />
            <Route path="/outages" element={<Outage />} />
            <Route path="/queues" element={<Queue />} />
            {/* Redirect old paths just in case */}
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/outage" element={<Outage />} />
            <Route path="/queue" element={<Queue />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;