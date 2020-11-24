import * as React from 'react'
import cn from 'classnames/bind';
import style from './Header.module.scss'
import {ButtonAccent} from '../../common/style/style'


const cx = cn.bind(style)

interface ButtonProps {
  accent?: ButtonAccent,
  btnTxt: string,
}

const Button = ({accent, btnTxt}: ButtonProps) => (
<button className={cx(accent ? `button--${accent}` : 'button')}>{btnTxt}</button>
)

interface HeaderProps {

}

export const Header = (props: HeaderProps) => {
  return (
    <div className={style.header}>
      <Button accent='magenta' btnTxt='Jó a tested baby' />
      <div className={style.header__cover}>
        <div className={cx({
          [`header__cover--black`]: true
        })}></div>
      </div>
      <p className={style.header__logo}>
        <span>netflix</span>roulette
      </p>

      <button className={cx({
        button: true,
        [`button--grey`]: true,
        header__addMovieButton: true
      })}>+ add movie</button>

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

          <button className={cx({
            button: true,
            [`button--magenta`]: true,
            header__searchButton: true
          })}>
            Search
          </button>
          </div>
      </div>
    </div>
  )
}