import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            loginErrors: ""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e) {
        // console.log("handle change", e)
        this.setState({
            [e.target.name]: e.target.value
        })
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
            // console.log("login resp", resp)
            if (resp.data.status === "created") {
            // this.props.handleSuccesfulAuth(resp.data)
            this.props.history.push("/map")
            }
        })
        .catch(error => {
            console.log("login error", error)
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

                </form>
            </div>
        )
    }
}