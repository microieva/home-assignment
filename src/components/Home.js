import React from 'react';
import { Link } from 'react-router-dom';
import User from './User'
import Button from './Button'

const Home = ({users}) => {

  const userList = users.map((user, i) => {
    return (
      <div key={i}>
        {/* <Link to={`/users/${i+1}`}>  */}
          <User 
            key={i}
            name={user.name}
            username={user.username}
            website={user.website}
            button={()=> <Link to={`/users/${i+1}`}>
                          <Button name="MORE DETAILS"/>
                        </Link>
                  }
          />
        {/* </Link> */}
      </div>
    )
  })    
    
    return (
        <div className='App'>
          <h1>Integrify Home Assignment</h1>
          <h2>Total number of users: {users.length}</h2>
          <div className='app-container'>
            <div className='list-wrapper'>
              {users.length > 0 ? userList : <h1>Loading ....</h1>}
            </div>
          </div>
        </div>
    )
  
}

export default Home;
