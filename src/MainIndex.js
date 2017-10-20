import React, {Component} from 'react';
class MainIndex extends Component {

	render() {
		return (
			<div>
				<textarea rows='1' cols='50'>
					Please enter your words here!
				</textarea>
				<button onClick={this.onClickButton}>Find sentence!</button>
				<textarea rows='3' cols='50'>
					Please enter your words here!
				</textarea>
			</div>
		);
	}
}
export default MainIndex;