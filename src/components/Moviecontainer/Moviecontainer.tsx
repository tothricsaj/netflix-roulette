import * as React from 'react'
import { Movieitem } from '../Movieitem/Movieitem'
import './Moviecontainer.scss'
import { Movie } from '../../common/types/movie'
import {MOVIE_TABS, TABS} from './constants'

interface MovieContainerProps {
    movieList: Movie[]
}

export const MovieContainer = (props: MovieContainerProps) => {

  const [currentTab, setCurrentTab] = React.useState<MOVIE_TABS>(MOVIE_TABS.ALL)
  const [listedMovies, setListedMovies] = React.useState(props.movieList)

  const setMoviesList = (id: any) => setCurrentTab(id)

  React.useEffect(() => {
    let tmpList = []

    for(const movie of props.movieList) {
      if(currentTab === movie.type || currentTab === MOVIE_TABS.ALL) tmpList.push(movie) 
    }

    setListedMovies(tmpList)
  }, [currentTab])

  return (
    <div className="moviecontainer">
      <header>
        <div
          className="moviecontainer_typeSelector"
        >
          {
            TABS.map(movie => (<div 
                className={'button button--selector ' + (movie.id === currentTab ? 'current' : '')}
                onClick={() => setMoviesList(movie.id)}
              >
                {movie.label}
              </div>)
            )
          }
        </div>
        <div className="moviecontainer_sortSelector">
          <label htmlFor="sortSelector">
              sorted by
              <select name="sortSelector" className="button button--selector">
                  <option className="button button--selector">release date</option>
              </select>
          </label>
        </div>
      </header>
      <div className="moviecontainer_resultCount">{listedMovies.length} movie found</div>
      <div className="moviecontainer_movieList">
        {listedMovies.map(el => <Movieitem movie={el} />)}
      </div>
    </div>
  )
}