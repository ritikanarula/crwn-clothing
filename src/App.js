import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
      <Header />
      <HomePage></HomePage>
    </div>
  );
}

export default App;
