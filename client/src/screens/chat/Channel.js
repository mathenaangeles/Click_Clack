import React from 'react';

const Channel = ({id,name,participants,onClick}) =>{
    const isClicked = () =>{
        onClick(id)
    }
    return(
        <div className="channel-item" onClick={isClicked}>
            <div>{name}</div>
            <span>{participants}</span>
        </div>
    );
}
export default Channel;