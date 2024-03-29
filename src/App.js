import React from "react";

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import { CTA, Brand, Navbar } from './components'

import './App.css'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />      
      </div>
      <div className="gradient__bg">
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
