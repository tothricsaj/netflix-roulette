import * as React from 'react'
import cn from 'classnames/bind';
import style from './Header.module.scss'
import {ButtonAccent} from '../../common/style/style'


const cx = cn.bind(style)

interface ButtonProps {
  btnTxt: string,
  accent?: ButtonAccent,
  extendedClasses?: string[]
}

const Button = ({btnTxt, accent, extendedClasses}: ButtonProps) => (
<button className={cx(accent ? `button--${accent}` : 'button', extendedClasses)}>{btnTxt}</button>
)

interface HeaderProps {

}

export const Header = (props: HeaderProps) => {
  return (
    <div className={style.header}>
      <div className={style.header__cover}>
        <div className={cx({
          [`header__cover--black`]: true
        })}></div>
      </div>
      <p className={style.header__logo}>
        <span>netflix</span>roulette
      </p>

      <Button 
        btnTxt='+ add movie'
        accent="grey"
        extendedClasses={['header__addMovieButton']} />

      <div className={style.header__searchWrapper}>
        <h2 className={style.header__title}>Find your movie</h2>
        <div className={style.header__searchWrapper__inputContainer}>
          <input
            className={cx({
              header__input: true,
              [`input--dark-grey`]: true
            })}
            type="text"
            placeholder="What do you want to watch?" />

          <Button
           btnTxt='search'
           accent='magenta'
           extendedClasses={['header__searchButton']} />

        </div>
      </div>
    </div>
  )
}