import React from 'react';
import logo from './clear_logo_type.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
             Clear Login
        </p>
        <form>
             <p>Adresse electroonique</p>
             <input placeholder="example@lscmltd.com"></input>
             <p>Mot de passe</p>
             <input type="password"></input> <p></p>
             <button>valider</button>
        </form>
       
      </header>
    </div>
  );
}

export default App;
