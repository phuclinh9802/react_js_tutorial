import React from 'react'

// use separated avatar function and pass in the user prop from its parent 

function Avatar(props) {
    return (
        <img src={props.user.avatarUrl}
            alt={props.user.name}        
        />
    )
}

export default Avatar;