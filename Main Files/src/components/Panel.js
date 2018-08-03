import React from 'react';
import './Panel.css'

const Panel = ({name, picture, description, width, color}) => {
    return(
        <div className="paninfo" style={{background: `${color}`}}>
            <img alt='fighter' src={require(`./${picture}`)} height='250' width={width}/>
            <h2>{name}</h2>
            <pre>{description}</pre>
        </div>
    );
}

export default Panel;