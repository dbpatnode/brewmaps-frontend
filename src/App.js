import React, {Component} from 'react';
// import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import axios from 'axios'
import './App.css';
import NavBar from './components/NavBar.js'
import Login from './components/auth/Login.js'
import Registration from './components/auth/Registration.js'
import MapContainer from './containers/MapContainer.js'
import Home from './components/Home'
import FavoriteContainer from './containers/FavoriteContainer.js'
import NoteContainer from './containers/NoteContainer.js'
import Dashboard from './components/Dashboard'

class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }  

  // checkLoginStatus(){
  //   axios.get('http://localhost:3000/logged_in', {withCredentials: true})
  //   .then(resp => {
  //     console.log("logged in?", resp)
  //   })
  //   .catch(error => {
  //     console.log("check login error", error)
  //   })
  // }

  // componentDidMount(){
  //   this.checkLoginStatus()

  // }

  handleLogout(){
    this.setState({
      loggedInStatus:"NOT_LOGGED_IN",
      user:{}
    })
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }
  
  render() {
    return (
      // <div className="App">
        <Router>
        <div>
        <NavBar />
        {/* <Route 
            exact 
            path="/" 
            render={props => (
              <Home {...props} 
              handleLogin= {this.handleLogin}  
              handleLogout= {this.handleLogout}
              loggedInStatus={this.state.loggedInStatus} 
              />
            )}
            /> */}

            {/* <Route 
            exact 
            render={props => (
              <Dashboard {...props} 
              loggedInStatus={this.state.loggedInStatus} />
            )}
            /> */}

            <Route
            path="/signup"
            render= {props => (
              <Registration {...props}
              handleLogin= {this.handleLogin}
              loggedInStatus={this.state.loggedInStatus} 
              />
              )}
            />

            <Route
            path="/login"
            render= {props => (
              <Login {...props}
              handleLogin= {this.handleLogin}
              loggedInStatus={this.state.loggedInStatus} 
              />
              )}
              />

            <Route
            path="/map"
            render= {props => (
            <MapContainer {...props}
              handleLogin= {this.handleLogin}
              loggedInStatus={this.state.loggedInStatus} 
            />
            )}
            />

            <Route
            path="/favorites"
            render= {props => (
            <FavoriteContainer {...props}
              handleLogin= {this.handleLogin}
              loggedInStatus={this.state.loggedInStatus} 
            />
            )}
            />

            <Route
            path="/notes"
            render= {props => (
            <NoteContainer {...props}
              handleLogin= {this.handleLogin}
              loggedInStatus={this.state.loggedInStatus} 
            />
            )}
            />
        </div>
        </Router>
   

    );
  }
}

export default App