import React from 'react';
import User from './User'

const Home = ({users}) => {

  const userList = users.map((user, i) => {
    return (
      <div key={i}>
          <User 
            id={i}
            name={user.name}
            username={user.username}
            website={user.website}  
          />
      </div>
    )
  })    
    
  return (
      <div className='App'>
          <h1>Integrify Home Assignment | Ieva Vyliaudaite</h1>
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
