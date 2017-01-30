import React, { Component, PropTypes } from 'react';

class MessageCard extends Component {
	static propTypes = {
		msg: PropTypes.string.isRequired
	};

	getInitialState() {
		return {};
	}

	render() {
		return (<div>
			<section className="front">
				{this.props.msg}
			</section>
		</div>);
	}
}

export default MessageCard;