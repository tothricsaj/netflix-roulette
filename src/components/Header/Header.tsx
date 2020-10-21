import * as React from 'react'
import './Header.scss'

interface HeaderProps {

}

export const Header = (props: HeaderProps) => {
  return (
    <div className="header">
      <div className="header__cover">
        <div className="header__cover--black"></div>
      </div>
      <p className="header__logo">
        <span>netflix</span>roulette
      </p>

      <button className="button button--grey header__addMovieButton">+ add movie</button>

      <div className="header__searchWrapper">
        <h2 className="header__title">Find your movie</h2>
        <div className="header__searchWrapper__inputContainer">
          <input
            className="input header__input input--darkGrey"
            type="text"
            placeholder="What do you want to watch?" />

          <button className="button button--magenta header__searchButton">
            Search
          </button>
          </div>
      </div>
    </div>
  )
}