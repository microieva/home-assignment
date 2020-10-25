import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button'

const User = (user, {button}) => {
    return (
        <div className='user-container'>
            <div className='circle'>{user.name.charAt(0)}</div>
            <h1 style={{ fontSize: '1.2rem'}}>{user.name}</h1>
            <p style={{ fontStyle: 'italic', color: 'darkgrey' }}>@{user.username}</p>
            <a href={`http://${user.website}`} target="blank">http://{user.website}</a>
            {/* <Button name= "MORE DETAILS"/> */}
            {user.button}
            
        </div>

    )
}

export default User;