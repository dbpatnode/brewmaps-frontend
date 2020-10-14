import React, {Component} from 'react';
// import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
import './App.css';
import NavBar from './components/NavBar.js'
import Login from './components/auth/Login.js'
import Registration from './components/auth/Registration.js'
import MapContainer from './containers/MapContainer.js'
import Home from './components/Home'
import FavoriteContainer from './containers/FavoriteContainer.js'
import NoteContainer from './containers/NoteContainer.js'
import IndividualBreweryShowPage from './components/BreweryShowPage'
import BreweryCollection from './components/BreweryCollection'





class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
      allBreweries:[],
      breweries: [],
      favorites: []
    }
    
   

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }  



  componentDidMount() {
    this.checkLoginStatus()
    localStorage.clear()
    
    // if(!localStorage.getItem("allBreweries")){
      axios.get('http://localhost:3000/breweries',{withCredentials: true})
      .then(resp => {

        this.setState({
          allBreweries: resp.data,
          breweries: resp.data
        })
        localStorage.setItem("allBreweries", 
        JSON.stringify(resp.data))
      })
  }

  checkLoginStatus() {
    axios.get("http://localhost:3000/logged_in", { withCredentials: true })
    .then(resp => {
      console.log('FUCK', resp.data)
      if (resp.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN", 
          user: resp.data.user
        })
        console.log("newFuck",resp.data)
      } else if(!resp.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN", 
          user: {}
        })
      }
    }).catch(error => {
      console.log("check login error", error)
    })
    }

  handleLogout(){
    console.log("hello")
    this.setState({
      loggedInStatus:"NOT_LOGGED_IN",
      user:{}
    })
  }

  handleLogin(data) {
    // debugger
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

    addFavorite = (brewery) => {
      debugger
      if (!this.state.favorites.includes(brewery)){
          this.setState({
              favorites: [...this.state.favorites, brewery]
            
          })
          axios.post("http://localhost:3000/favorites", {user_id: this.state.user.id, brewery_id: brewery.id}, { withCredentials: true })
          .then(resp => {
            console.log(resp)
          })}
    }
  
  render() {
    console.log(this.state.allBreweries)
    return (
      // <div className="App">
        <Router>
        <div>
        <NavBar 
        user={this.state.user}
        loggedInStatus= {this.state.loggedInStatus}
        handleLogout= {this.handleLogout}
        />
        <Route 
            exact 
            path="/" 
            render={props => (

              <Home {...props}
              handleLogout= {this.handleLogout}
              handleLogin= {this.handleLogin}  
              
              loggedInStatus={this.state.loggedInStatus} 
              />
            )}
            />

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
              <Registration 
              {...props}
              handleLogin= {this.handleLogin}
              loggedInStatus={this.state.loggedInStatus} 
              />
              )}
            />

            <Route
            path="/login"
            render= {props => (
              <Login 
              {...props}
              handleLogin= {this.handleLogin}
              loggedInStatus={this.state.loggedInStatus} 
              />
              )}
              />

            <Route
            path="/map"
            render= {props => (
            <MapContainer 
              {...props}
              handleLogin= {this.handleLogin}
              // addFavorite={this.addFavorite}
              loggedInStatus={this.state.loggedInStatus} 
            />
            )}
            />

            <Route
            path="/favorites"
            render= {props => (
 
            <FavoriteContainer 
              {...props}
              favorites={this.state.favorites}
              addFavorite={this.addFavorite}
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

            <Route
            path="/brewery/:BreweryId"
            render= {(props) => {

            const BreweryId = props.match.params.BreweryId
            const brewery =this.state.allBreweries.find(e => e.id === parseInt(BreweryId))

            return brewery ?
            <IndividualBreweryShowPage
            brewery ={brewery} 
              {...props}
              handleLogin= {this.handleLogin}
              loggedInStatus={this.state.loggedInStatus}
              addFavorite={this.addFavorite} 
            />
            :
            "Loading..."
            }}
            />

            <Route
            path="/breweries"
            render= {(props) => {

            const breweries = this.state.allBreweries
            return breweries ?
            <BreweryCollection 
              breweries = {breweries}
              {...props}
              addFavorite={this.addFavorite}
              handleLogin= {this.handleLogin}
              loggedInStatus={this.state.loggedInStatus} 
            />
            :
            "Loading..."
            }}
            />


        </div>
        </Router>
   

    );
  }
}

export default App