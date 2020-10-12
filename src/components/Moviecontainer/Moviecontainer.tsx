import * as React from 'react'
import Movieitem from '../Movieitem/Movieitem';
import './Moviecontainer.scss'
import { Movie } from '../../common/types/movie';
import App from '../../App';

interface Props {
    movieList: Movie[]
}

const Moviecontainer: React.FC<Props> = (props) => {

  const selectType = (e: React.MouseEvent<HTMLButtonElement>) => {

    Array.from(e.currentTarget.children).forEach(elem => {
      elem.classList.remove('current')
    })

    e.target.classList.add('current')

  }

  return (
    <div className="moviecontainer">
      <header>
        <div
          className="moviecontainer_typeSelector"
          onClick={(e: any) => selectType(e)}
        >
          <div className="button button--slector current">All</div>
          <div className="button button--slector">Documentary</div>
          <div className="button button--slector">Comedy</div>
          <div className="button button--slector">Horror</div>
          <div className="button button--slector">crime</div>
        </div>
        <div className="moviecontainer_sortSelector">
          <label htmlFor="sortSelector">
              sorted by
              <select name="sortSelector" className="button button--slector">
                  <option className="button button--slector">release date</option>
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