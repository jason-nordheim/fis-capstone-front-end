import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { saveToken } from './helpers'

function App() {
  return (
    <div className="App">
      <LoginForm saveToken={saveToken} /> 
    </div>
  );
}

export default App;
