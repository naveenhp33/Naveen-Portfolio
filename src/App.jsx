import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      
      {/* Navbar spans full width */}
      <Navbar />

      <div className="app-container">
        {/* Page Content */}
        <main style={{ minHeight: '80vh' }}>
          <Home />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
