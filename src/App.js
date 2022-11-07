import React from 'react';
import './App.css';
import {MyButton} from './index.js'
import {MyRouter} from './assets/router.js'
import {NavLoginRegister} from './components/login_register/NavLoginRegister.js'

function App() {
  return (
    <div className="App">
      <h1>Burguer Queens API Client</h1>
      <NavLoginRegister/>
    </div>
  );
}

export default App;
