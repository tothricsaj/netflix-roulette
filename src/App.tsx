import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
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
