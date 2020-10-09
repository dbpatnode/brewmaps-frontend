import React, { Component } from 'react'

export default class Registration extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
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
        console.log("form submitted")
        e.preventDefault()
    }

    render() {
        return (
            <div className="signup-login">
                <form onSubmit={this.handleSubmit}>
                    
                    <input
                    type="name" 
                    name="name" 
                    placeholder="Name"
                    value={this.state.name} 
                    onChange={this.handleChange} 
                    required
                    />

                    <input 
                    type="username" 
                    name="username" 
                    placeholder="Username"
                    value={this.state.username} 
                    onChange={this.handleChange} 
                    required
                    />

                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    required
                    />

                    <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    required
                    />

                    <input 
                    type="password" 
                    name="password_confirmation" 
                    placeholder="Password Confirmation" 
                    value={this.state.password_confirmation} 
                    onChange={this.handleChange} 
                    required
                    />

                    <button type= "submit"> Sign Up </button>

                </form>
            </div>
        )
    }
}