import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink} from 'react-router-dom';
import axios from 'axios'
import logo from './hop_logo.png'


class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            name: ""
        }
        this.handleLogoutClick= this.handleLogoutClick.bind(this)
    }
    
    handleLogoutClick(){
        axios.delete("http://localhost:3000/logout", { withCredentials: true })
        .then(resp => {
            
            this.props.handleLogout()
            window.location.href = '/';
            
        })
        .catch(error => {
            console.log("logout error", error)
           
        })
        this.functionIx()
    }

    functionIx(){
        this.props.handleLogout()
    }
    

    render() {
        console.log(this.props.user)

       const signup = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-check-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9.854-2.854a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        </svg>

        const login = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
      </svg>

        const logout = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-power" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z"/>
            <path fill-rule="evenodd" d="M7.5 8V1h1v7h-1z"/>
            </svg>

        return (
            // <Router>
            <div className="navbar">
                {this.props.loggedInStatus !== 'NOT_LOGGED_IN' ? (
                
                <nav class="navbar navbar-inverse">
                    <div className= "container-fluid">
                        <div class="navbar-header">
                            <NavLink to='/' className="navbar-brand"> <img src= {logo} alt= 'beer map logo' className='logo'></img> </NavLink> 
                        </div>
                            <a>cheers, {this.props.user.username}!</a>
                            <NavLink to='/map'> BeerMap </NavLink> 
                            <NavLink to='/breweries'> Breweries </NavLink>
                            <NavLink to='/favorites'> Favorite Breweries</NavLink>
                            <NavLink to='/notes'> Brewery Notes</NavLink>
                            <a href="#" onClick={this.handleLogoutClick}> {logout} Logout </a>

                    </div>
                </nav>
                
                )
                : 
                <nav class="navbar navbar-inverse">
                    <div className= "container-fluid">
                        <div class="navbar-header">
                        <NavLink to='/'> <img src= {logo} alt= 'beer map logo' className='logo'></img> </NavLink> 
                        </div>
                        <NavLink to='/login'>{login} Login </NavLink>
                        <NavLink to='/signup'>{signup}Sign Up </NavLink>
                    </div>
                </nav>
                }
            </div>
            // </Router>
        )
    }
}

export default NavBar