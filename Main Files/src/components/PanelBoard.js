import React from 'react';
import Panel from './Panel';

const PanelBoard = ({fighters}) => {
    return(
        <div>
            {
                fighters.map((user, i) => {
                    return(
                        <Panel 
                        key={fighters[i].id} 
                        name={fighters[i].name}
                        picture={fighters[i].picture}
                        description={fighters[i].description}
                        width={fighters[i].width}
                        color={fighters[i].color}
                    />);
                })
            }
        </div>
    );
}

export default PanelBoard;