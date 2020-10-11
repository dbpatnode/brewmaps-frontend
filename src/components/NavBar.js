import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import logo from './hop_logo.png'


class NavBar extends Component {
    state = {
        users: [],
        name: ""
    }
    
    // logout = () => {
    //     sessionStorage.clear();
    //     window.location.href = '/';
    // }
    
    render() {
        return (
            // <Router>
            <div className="navbar">
                <NavLink to="/"> <img src= {logo} alt= 'beer map logo' className='logo'></img> </NavLink> 
                <NavLink to="/map"> BeerMap </NavLink> 
                <NavLink to="/login"> Login </NavLink> 
                <NavLink to='/signup'> Sign Up </NavLink> 
                <NavLink to='/favorites'> Favorite Breweries</NavLink>
                <NavLink to='/notes'> Brewery Notes</NavLink>
            </div>
            // </Router>
        )
    }
}

export default NavBar