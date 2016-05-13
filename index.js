require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import Tab from './components/Tab';
import Tabs from './components/Tabs';

export class App extends React.Component {
	render() {
		return (<div>
			<div className="well">
				<h3>{"<Button/> Component"}</h3>
				<Button label="I am a button" />
				<br></br>
				<br></br>
				<Button disabled={ true } label="I am a disabled button" />
				<br></br>
				<br></br>
				<h3>{"<ButtonGroup/> Component"}</h3>
				<ButtonGroup>
					<Button label="I am a button" />
					<Button label="Another button" />
					<Button label="Yet another button" />
				</ButtonGroup>
				<br></br>
				<br></br>
				<h3>{"<Tabs/> Component"}</h3>
					<Tabs label="something">
							<Tab label="something">somet</Tab>
							<Tab label="something">content</Tab>
					</Tabs>
			</div>
		</div>);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
