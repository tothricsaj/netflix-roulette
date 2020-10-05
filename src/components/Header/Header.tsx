import * as React from 'react'

interface Props {

}

const Header: React.FC<Props> = (props) => {
    return (
        <div className="header">
            <p className="header_logo">
                <span>netflix</span><span>roulette</span>
            </p>

            <button className="header_addMovieButton">+ add movie</button>

            <h2 className="header_title">Find your movie</h2>

            <input
                className="header_input"
                type="text"
                placeholder="What do you want to watch?" />

            <button className="header_searchButton">
                Search
            </button>
        </div>
    )
}

export default Header