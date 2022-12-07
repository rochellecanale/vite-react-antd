import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TestComponent extends Component {
	constructor(props) {
		super(props)

		this.state = {
			count: 0
		}
	}

	componentDidMount() {
		console.log(this.state)
	}

	render() {
		return (
			<div>
				<h3>New Component</h3>
				<div>{this.props.users}</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		users: state
	}
}

export default connect(mapStateToProps)(TestComponent)