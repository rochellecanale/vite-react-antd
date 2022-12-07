import React, { Component } from 'react'
import { Form, Button, Input } from 'antd'
import { connect } from 'react-redux'

class Users extends Component {

	constructor(props) {
		super(props)
		this.state = {
			username: ""
		}
	}

	componentDidMount() {
		
	}

	handleSubmit = () => {
		this.props.dispatch({
			type: 'ADD_USER',
			payload: this.state.username
		})
	}

	handleChange = (e) => {
		this.setState({
			username: e.target.value
		})
	} 

	render() {
		return (
			<div>
				<h1>Users</h1>
				{/* <Form
					name='userForm'
					onFinish={this.handleSubmit}
				>
					<Form.Item
						label="User"
						name="user"
						rules={[
							{ required: true, message: 'Please input a user!' }
						]}
					>
						<Input
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</Form.Item>
				</Form> */}
				<input type="text" value={this.state.username} onChange={this.handleChange}/>
				<button onClick={this.handleSubmit}>Add User</button>

				<ul>
					{ this.props.users ? this.props.users.map(d => (
						<li key={d}>{d}</li>
					)) : null}
				</ul>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log("mapStateToProps", state)
	return {
		users: state
	}
}

export default connect(mapStateToProps)(Users)