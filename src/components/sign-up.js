import React, { Component } from 'react'
import axios from 'axios'
import zxcvbn from 'zxcvbn'
import { Redirect } from 'react-router'
class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			passwordstrength: 0, 
			passwordweak: false,
			redirectTo: null,
			message: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
		console.log(this.state.username);
		console.log(this.state.password);
		var val = this.state.password;
		var result = zxcvbn(val);
		this.setState({passwordstrength: result.score});
		this.setState({passwordweak: false});
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		if (this.state.passwordstrength >=1) {
			axios.post('/user/', {
				username: this.state.username,
				password: this.state.password
			})
				.then(response => {
					console.log(response)
					if (!response.data.errmsg) {
						console.log('successful signup')
						this.setState({ //redirect to login page
							redirectTo: '/login'
						})
					} else {
						console.log('username already taken')
					}
				}).catch(error => {
					console.log('signup error: ')
					console.log(error)
					this.setState({ 
						message: 'Username already taken. Choose a different user name.'
					})
				})
	
		}else{
			this.setState({passwordweak:true})
		}

		//request to server to add a new username/password
			}


render() {
	return (
		<div className="SignupForm">
			<h4>Sign up</h4>
			<form className="form-horizontal">
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="username">Username</label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
					
				</div><br/>
				{this.state.passwordweak ? <p className="label label-error">Password is too weak, choose a new password</p> : ""}
				<div className="form-group ">
					<div className="col-7"></div>
					<button
						className="btn btn-primary col-1 col-mr-auto"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
			</form>
			{this.state.message ? <span className="label label-error">{this.state.message}</span> : ""}
			{this.state.redirectTo && (
				<Redirect to={this.state.redirectTo }/>
			)}
		</div>
		
	)
}
}

export default Signup
