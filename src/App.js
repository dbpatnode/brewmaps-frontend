import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import MapContainer from './containers/MapContainer.js'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route path="/map" component={MapContainer}/>
        </Switch>
      </BrowserRouter>
      </div>

      {/* <div>
        <MapContainer />
      </div> */}
    </div>

  );
}

export default App;


// import React from 'react';
// import Login from './components/Login'
// import Home from './components/Home'
// import {Route, Switch, Link, NavLink, withRouter} from 'react-router-dom'
// import './App.css'

// state={
//   user:{
//     id:0,
//     username:""
//   },
//   allArt:[]
// }

// handleLogin = (e, userInfo) =>{
//   e.preventDefault()

//   fetch('http://localhost:3000/login',{
//    method:"POST",
//    headers:{
//      'Content-Type':'application/json'
//    },
//    body:JSON.stringify(userInfo)
//  })
//  .then(res => res.json())
//  .then(json => {
//    if(!json.error){
//      this.setState({user:{id:json.id, username:json.username}, allArt:json.arts}, () => {
//        this.props.history.push('/paintings')
//      })
//    }else {
//      alert(json.error)
//    }
//  })
//  .catch(err => console.log(err))
// }

// export default withRouter(App)