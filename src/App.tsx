import React from 'react';
import './styles/App.css';
import { Home } from './pages/home';
import { render } from '@testing-library/react';
import { Route } from 'react-router';

function App() {
  
  return (
    <div className="App">
      <Route path="/" element={<Home />} />
      <Home />
    </div>
  );
}

export default App;
