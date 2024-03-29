import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, NavBar } from "../src/components/base";
import { routes, HomePage, AboutPage, ProjectsPage } from './pages';

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <NavBar />
          <Routes>
            <Route>
              <Route index element={<HomePage />} />
              <Route path={routes.HOME} element={<HomePage />} />
              <Route path={routes.ABOUT} element={<AboutPage />} />
              <Route path={routes.PROJECTS} element={<ProjectsPage />} />
            </Route>
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
