import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Default_Header.js';
import Footer from './Default_Footer.js';

import Home from './Home.js';
import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact.js';

import Volume_by_Speed from './projects/Volume_By_Speed.js';
import Photo_Sort from './projects/Photo_Sort.js';
import Zero_Four__Tech from './projects/Zero_Four__Tech.js';

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
          <Route path="/projects/volume_by_speed" element={<Volume_by_Speed/>}></Route>
          <Route path="/projects/photo_sort" element={<Photo_Sort/>}></Route>
          <Route path="/projects/Zero_Four__Tech" element={<Zero_Four__Tech/>}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </body>
  );
}

export default App;
