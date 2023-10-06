import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../src/components/base";
import { HomePage, ContactPage } from './pages';

function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>
    <div>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
