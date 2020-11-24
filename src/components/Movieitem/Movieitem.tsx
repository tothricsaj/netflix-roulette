import * as React from 'react'
import './Movieitem.scss'
import { Movie } from '../../common/movie/movie';

interface MovieItemProps {
    movie: Movie
}

export const Movieitem = (props: MovieItemProps) => {
  const classNameWithImg = `movieitem__coverImage ${props.movie.coverImagePath}`

  return (
    <div className="movieitem">
      <div className="dotIcon"></div>
      <div 
        className={classNameWithImg}
      ></div>
      <div className="movieitem__infoBox">
        <p className="title">{props.movie.title}</p>
        <p className="releaseDate">{props.movie.releaseDate}</p>
        <p className="movieType">{props.movie.type}</p>
      </div>
    </div>
  )
}