import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import './App.css';

function App() {
  return (
    <body>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
