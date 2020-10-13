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


  return (
    <div className="moviecontainer">
      <header>
        <div
          className="moviecontainer_typeSelector"
        >
          <div className="button button--selector current">All</div>
          <div className="button button--selector">Documentary</div>
          <div className="button button--selector">Comedy</div>
          <div className="button button--selector">Horror</div>
          <div className="button button--selector">crime</div>

          {
            tabs.map(movie => {
              return <div className='button button--selector'>{movie.label}</div>
            })
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
      <div className="moviecontainer_resultCount">{props.movieList.length} movie found</div>
      <div className="moviecontainer_movieList">
        {
          props.movieList.map((el, i) => {

            return <Movieitem 
              movie={el}
            />
          })
        }
      </div>
    </div>
  )
}

export default Moviecontainer