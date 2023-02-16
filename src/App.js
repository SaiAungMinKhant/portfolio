import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from "./components/Skills";
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
