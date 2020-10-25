import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router'
import Button from './Button'

const UserDetails = ({users}) => {
    const {id} = useParams()
    let user = users.find(u => u.id === Number(id))
    
    return (
        <div className='details-container'>
            <div className='details'>
                <h1 style={{marginBottom:'1rem'}}>{user.name}</h1>
                <h3>username: <em>{user.username}</em></h3>
                <h3>email: <em>{user.email}</em></h3>
                <h3>phone: <em>{user.phone}</em></h3>
                <h3>company: <em>{user.company.name}</em></h3>
                <h3>website: <em>{user.website}</em></h3>
                <div>
                    <h3>address:</h3>
                    <p>{user.address.street}, {user.address.suite}</p>
                    <p>{user.address.city}</p>
                    <p>{user.address.zipcode}</p>
                </div>
            </div>
            <Link to='/'>
                <Button name = "BACK"/>
            </Link>
            
        </div>
    )
}

export default UserDetails;