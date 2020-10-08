import * as React from 'react'
import './Movieitem.scss'

interface Props {
    title: string,
    releaseDate: number,
    type: string,
    coverImagePath: string
}

const Movieitem: React.FC<Props> = (props) => {
    return (
        <div className="movieitem">
            <div className="dotIcon"></div>
            <div className="movieitem_coverImage"></div>
            <div className="movieitem_infoBox">
                <p className="title">Test Title</p>
                <p className="releaseDate">Test date</p>
                <p className="movieType">Test tpye</p>
            </div>
        </div>
    )
}

export default Movieitem
