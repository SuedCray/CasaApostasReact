import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const name = 'Phelipe'
  //const idade = 20
  //const cidade = ['São Paulo'];
  return (
    <div className="App">
     <nav>
     <h1>Olá {name}</h1>
     </nav>

     <h2>Seja Bem Vindo</h2>

     <div className='Botoes'>
      <button>Apostas</button>
      <button onClick={() => { window.location.href = '/noticias'; }}>Noticias</button>
      <button>Jogos</button>
     <button>Login</button>
     </div>
     <main>
      <div id='img'>
     <img src='https://seeklogo.com/images/C/casa-de-apostas-logo-C07FC8BA87-seeklogo.com.png'></img>
     </div>
     </main>
     

    </div>
  );
}

export default App;
