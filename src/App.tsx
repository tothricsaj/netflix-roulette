import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Header from './components/Header/Header'
import Moviecontainer from './components/Moviecontainer/Moviecontainer';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
          <Header />
          <Moviecontainer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
