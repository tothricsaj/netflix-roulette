import * as React from 'react'
import Movieitem from '../Movieitem/Movieitem';

interface Props {

}

const Moviecontainer: React.FC<Props> = (props) => {
    return (
        <div className="moviecontainer">
            Moviecontainer
            <Movieitem />
            <Movieitem />
            <Movieitem />
        </div>
    )
}

export default Moviecontainer