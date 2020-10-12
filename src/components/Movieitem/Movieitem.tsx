import * as React from 'react'
import './Movieitem.scss'
import { Movie } from '../../common/types/movie';

interface Props {
    movie: Movie
}

const Movieitem: React.FC<Props> = (props) => {
  const classNameWithImg = `movieitem_coverImage ${props.movie.coverImagePath}`

  return (
    <div className="movieitem">
      <div className="dotIcon"></div>
      <div 
        className={classNameWithImg}
      ></div>
      <div className="movieitem_infoBox">
        <p className="title">{props.movie.title}</p>
        <p className="releaseDate">{props.movie.releaseDate}</p>
        <p className="movieType">{props.movie.type}</p>
      </div>
    </div>
  )
}

export default Movieitem
