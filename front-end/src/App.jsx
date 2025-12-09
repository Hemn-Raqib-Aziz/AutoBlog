import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import AboutMe from './pages/AboutMe';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;