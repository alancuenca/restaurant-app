import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import FoodMenu from './components/FoodMenu/FoodMenu';
import Footer from './components/Footer/Footer'
import About from './components/About/About';
import Events from './components/Events/Events';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Hero />
        <About />
        <FoodMenu />
        <Testimonials />
        <Events />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
