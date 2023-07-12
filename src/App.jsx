import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import React, { lazy, Suspense } from 'react';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/home'));
const Project = lazy(() => import('./pages/projects'));

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          />
          <Route
            path='/projects'
            element={
              <Suspense>
                <Project />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
