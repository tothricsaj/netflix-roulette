import * as React from 'react'
import Movieitem from '../Movieitem/Movieitem'
import './Moviecontainer.scss'
import { Movie } from '../../common/types/movie'

interface Props {
    movieList: Movie[]
}

const Moviecontainer: React.FC<Props> = (props) => {

  enum MovieTabs {
    ALL = 'all',
    DOCUMENTARY ='documentary',
    COMEDY = 'comedy',
    HORROR = 'horror',
    CRIME = 'crime'
  }

  const tabs = [
    {id: MovieTabs.ALL, label: 'All'},
    {id: MovieTabs.DOCUMENTARY, label: 'Documentary'},
    {id: MovieTabs.COMEDY, label: 'Comendy'},
    {id: MovieTabs.HORROR, label: 'Horror'},
    {id: MovieTabs.CRIME, label: 'Crime'},
  ]

  const [currentTab, setCurrentTab] = React.useState<MovieTabs>(MovieTabs.ALL)
  const [listedMovies, setListedMovies] = React.useState(props.movieList)

  const setMoviesList = (id: any) => setCurrentTab(id)

  React.useEffect(() => {
    let tmpList = []

    for(const movie of props.movieList) {
      if(currentTab === movie.type || currentTab === 'all') tmpList.push(movie) 
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
            tabs.map(movie => (<div 
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

export default Moviecontainer