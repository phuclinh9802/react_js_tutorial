import React, { Component } from 'react'
import UserInfo from './UserInfo';

function Comment(props) {
    // comment elements: avatar, userinfo, text

    function formatDate(props) {
        return props.toLocaleTimeString();
    }

    const element = (
        <div className='Comment'>
            <UserInfo user={props.author}/>
            <div className='text'>
                {props.text}
            </div>
            <div className='date'>
                {formatDate(props.date)}
            </div>

        </div>
    )

    return element;
}

export default Comment;