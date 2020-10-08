import * as React from 'react'
import Movieitem from '../Movieitem/Movieitem';
import './Moviecontainer.scss'

interface Props {
    movieList: {
        title: string,
        releaseDate: number,
        type: string,
        coverImagePath: string
    }[]
}

const Moviecontainer: React.FC<Props> = (props) => {
    const movieItems = props.movieList.map((el: object, i) => {
        console.log(el.title)

        return <Movieitem 
            title={el.title}
            releaseDate={el.releaseDate}
            type={el.type}
            coverImagePath={el.coverImagePath}
        />
    })

    return (
        <div className="moviecontainer">
            <header>
                <div className="moviecontainer_typeSelector">
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
            <div className="moviecontainer_resultCount">39 movie found</div>
            <div className="moviecontainer_movieList">
            </div>
        </div>
    )
}

export default Moviecontainer