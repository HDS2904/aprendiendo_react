import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Aprendiendo React desde 0 a Experto</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/HDS2904/aprendiendo_react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositorio en GitHub con los temas divididos en als diferentes ramas
        </a>
      </header>
    </div>
  );
}

export default App;
