import React, {useState} from 'react';
import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Header from './components/Header/Header'
import Moviecontainer from './components/Moviecontainer/Moviecontainer';

function App() {
  const [movieList, setMovieList] = useState<Array<object>>([
    {
      title: 'Pulp Ficiton',
      releaseDate: 1992,
      type: 'crime',
      coverImagePath: './coverImages/pulpFiciton.jpeg'
    },
    {
      title: 'Kill Bill',
      releaseDate: 2007,
      type: 'comedy',
      coverImagePath: './coverImages/killBill.jpeg'
    },
    {
      title: 'Pulp Ficiton',
      releaseDate: 1992,
      type: 'crime',
      coverImagePath: './coverImages/pulpFiciton.jpeg'
    },
    {
      title: 'Kill Bill',
      releaseDate: 2007,
      type: 'comedy',
      coverImagePath: './coverImages/killBill.jpeg'
    }
  ])

  return (
    <ErrorBoundary>
      <div className="App">
          <Header />
          <Moviecontainer 
            movieList={movieList}
          />
      </div>
    </ErrorBoundary>
  );
}

export default App;
