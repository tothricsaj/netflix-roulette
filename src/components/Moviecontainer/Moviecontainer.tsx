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
          {
            tabs.map(movie => {
              let classes = 'button button--selector ' + (movie.id === currentTab ? 'current' : '')
              return (<div 
                className={classes}
                onClick={() => setCurrentTab(movie.id)}
               >
                 {movie.label}
              </div>)
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