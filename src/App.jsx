import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { updateMetaTags } from './utils/seo';

function App() {
  useEffect(() => {
    // Initialize SEO tags on app mount
    updateMetaTags({
      title: 'Naveen Kumar S | Fullstack Web Developer Portfolio',
      description: 'Naveen Kumar S - Fullstack Web Developer specializing in React, Node.js, MongoDB, and Python. Explore my portfolio of modern web applications.',
      url: 'https://naveenkumars.com/',
      image: 'https://naveenkumars.com/profile.jpeg'
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
