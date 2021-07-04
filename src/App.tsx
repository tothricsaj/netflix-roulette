import React, {useState} from 'react';
import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import { Header } from './components/Header/Header'
import { MovieContainer } from './components/Moviecontainer/Moviecontainer';
import {Movie} from './common/movie/movie'

function App() {
  const [movieList, setMovieList] = useState<Movie[]>([
    {
      title: 'Pulp Ficiton',
      releaseDate: 1992,
      type: 'crime',
      // coverImagePath: './coverImages/pulpFiciton.jpeg'
      coverImagePath: 'pulpFiction'

    },
    {
      title: 'Kill Bill',
      releaseDate: 2007,
      type: 'comedy',
      // coverImagePath: './coverImages/killBill.jpeg'
      coverImagePath: 'killBill'
    },
    {
      title: 'Pulp Ficiton',
      releaseDate: 1992,
      type: 'crime',
      // coverImagePath: './coverImages/pulpFiciton.jpeg'
      coverImagePath: 'pulpFiction'

    },
    {
      title: 'Kill Bill',
      releaseDate: 2007,
      type: 'comedy',
      // coverImagePath: './coverImages/killBill.jpeg'
      coverImagePath: 'killBill'
    },
    {
      title: 'Test Docu',
      releaseDate: 2007,
      type: 'documentary',
      // coverImagePath: './coverImages/killBill.jpeg'
      coverImagePath: 'killBill'
    }
  ])

  return (
    <ErrorBoundary>
      <div className="App">
          <Header />
          < MovieContainer
            movieList={movieList}
          />
      </div>
    </ErrorBoundary>
  );
}

export default App;