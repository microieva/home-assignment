import React, { useState, useEffect } from 'react';
import Home from './Home';
import UserDetails from './UserDetails';
import '../styles/App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(response => response.json())
            .then(data => {
            setUsers(data)
      })
    }, [])
    console.log(useState)

    return (
        
        <Router>
            <div className='App'>
            
            </div>
            <Switch>
                <Route exact path='/users/:id' 
                    component={()=><UserDetails users={users}/>}
                />
                <Route exact path='/' 
                    component={()=><Home users={users}/>} 
                />
              </Switch>
        </Router>
    )
}

export default App;