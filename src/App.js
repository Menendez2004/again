import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>¡Bienvenido a mi App React!</h1>
        <p>
          Esta es mi aplicación React personalizada, lista para GitHub.
        </p>
        <p>
          Desarrollada por <strong>Menendez2004</strong> 🚀
        </p>
        <a
          className="App-link"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver en GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
