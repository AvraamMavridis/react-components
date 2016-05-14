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
					<Tabs>
							<Tab label="Something">

									Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus turpis vel fringilla bibendum. Aliquam in enim mollis, fermentum sem a, ornare arcu. Curabitur malesuada ex id felis rhoncus venenatis. Donec vestibulum, lacus id molestie placerat, nibh urna pharetra orci, ut vestibulum magna odio vel justo. Ut non vulputate justo. Cras at tortor a sem imperdiet accumsan. Aliquam lacinia facilisis metus faucibus tincidunt. Pellentesque sollicitudin ac tellus convallis sodales. Donec mattis nibh interdum condimentum semper.

							</Tab>
							<Tab label="Something Else">

								<Button label="I am a button" />
								<br></br>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus turpis vel fringilla bibendum. Aliquam in enim mollis, fermentum sem a, ornare arcu. Curabitur malesuada ex id felis rhoncus venenatis. Donec vestibulum, lacus id molestie placerat, nibh urna pharetra orci, ut vestibulum magna odio vel justo. Ut non vulputate justo. Cras at tortor a sem imperdiet accumsan. Aliquam lacinia facilisis metus faucibus tincidunt. Pellentesque sollicitudin ac tellus convallis sodales. Donec mattis nibh interdum condimentum semper.
							</Tab>
					</Tabs>
			</div>
		</div>);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
