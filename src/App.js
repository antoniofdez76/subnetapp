import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );

  
}

export default App;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de inicio de sesión
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Usuario" value={username} onChange={(event) => setUsername(event.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

