// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Internships from './pages/Internships';
import ApplyInternship from './pages/InternshipDetail';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyCertificate from './pages/VerifyCertificate';
import About from './pages/About';
import InternshipDetail from './pages/InternshipDetail';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/internships/:id" element={<InternshipDetail />} />

        <Route path="/internships/apply" element={<ApplyInternship />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>
      <Footer />
      <ChatBot />
    </Router>
  );
}

export default App;