import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <h2>Netflix Roulette</h2>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ErrorBoundary>
  );
}

export default App;
