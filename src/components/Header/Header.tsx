import * as React from 'react'
import './Header.scss'

interface Props {

}

const Header: React.FC<Props> = (props) => {
    return (
        <div className="header">
            <div className="header_cover">
                <div className="header_cover--black"></div>
            </div>
            <p className="header_logo">
                <span>netflix</span><span>roulette</span>
            </p>

            <button className="header_addMovieButton">+ add movie</button>

            <div className="header_searchWrapper">
                <h2 className="header_title">Find your movie</h2>
                <div className="header_searchWrapper_inputContainer">
                    <input
                        className="header_input"
                        type="text"
                        placeholder="What do you want to watch?" />

                    <button className="header_searchButton">
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header