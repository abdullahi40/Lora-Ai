import React from "react";

import {
  Blog,
  Footer,
  Possibility,
  Header,
  Features,
  WhatGPT3,
} from "./containers";

import { Brand, Cta, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
