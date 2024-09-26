import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Default_Header.js';
import Footer from './Default_Footer.js';

import Home from './Home.js';
import Projects from './Projects.js';
import About from './About.js';
import Contact from "./Contact.js";

import './App.css';

function App() {
  return (
    <body>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </body>
  );
}

export default App;
