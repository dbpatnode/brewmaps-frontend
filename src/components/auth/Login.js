import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            loginErrors: "",
            allFavorites: []
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(e) {
        e.preventDefault()
        const {username, password} = this.state

        axios.post("http://localhost:3000/sessions", {
            username: username,
            password: password
        },
        { withCredentials: true }
        )
        .then(resp => {
            if (resp.data.status === "created") {
            this.props.history.push("/map")
            this.props.handleLogin(resp.data)
            console.log(resp.data)
            }
        })
        .catch(error => {
            console.log("login error", error)
            // this.setState({ 
            //     isInvalid: true
            // })
        })
        // e.preventDefault()
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit}>

                    <input 
                    type="username" 
                    name="username" 
                    placeholder="Username"
                    value={this.state.username} 
                    onChange={this.handleChange} 
                    required
                    />
                    <br />

                    <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    required
                    />
                    <br />

                    <button className= "login-signup-buttons" type= "submit"> Login </button>
                    {this.state.isInvalid && <div>Invalid Username or Password</div>}
            
                </form>
                <br/>

                <Link to='/'>homepage</Link> {"  🍻  "}
                <Link to='/signup'>signup </Link>
            </div>
        )
    }
}