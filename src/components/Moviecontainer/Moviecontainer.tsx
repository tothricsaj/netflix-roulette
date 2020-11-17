import * as React from 'react'
import { Movieitem } from '../Movieitem/Movieitem'
import style from './Moviecontainer.module.scss'
import { Movie } from '../../common/types/movie'
import {MOVIE_TABS, TABS} from './constants'
import cn from 'classnames/bind';

const cx = cn.bind(style)

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
    <div className={style.moviecontainer}>
      <header>
        <div
          className={style.moviecontainer__typeSelector}
        >
          {
            TABS.map(movie => (<div 
                className={cx({
                  button: true,
                  [`button--selector`]: true,
                  current: movie.id === currentTab
                })}

                onClick={() => setMoviesList(movie.id)}
              >
                {movie.label}
              </div>)
            )
          }
        </div>
        <div className={style.moviecontainer__sortSelector}>
          <label htmlFor="sortSelector">
              sorted by
              <select name="sortSelector" className="button button--selector">
                  <option className="button button--selector">release date</option>
              </select>
          </label>
        </div>
      </header>
      <div className={style.moviecontainer__resultCount}>{listedMovies.length} movie found</div>
      <div className={style.moviecontainer__movieList}>
        {listedMovies.map(el => <Movieitem movie={el} />)}
      </div>
    </div>
  )
}