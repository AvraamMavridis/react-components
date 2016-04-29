require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/button';

export class App extends React.Component {
	render() {
		return (<div>
			<div className="well">
				<h3>Buttons</h3>
				<Button label="I am a button" />
				<br></br>
				<br></br>
				<Button disabled={ true } label="I am a disabled button" />
				<br></br>
			</div>
		</div>);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
