import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [content, setContent] = useState('data still loading...');

  axios.get('/api').then(response => {
    setContent(response.data.response)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {content}
        </p>
      </header>
    </div>
  );
}

export default App;
