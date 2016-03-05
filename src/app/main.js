import { Button, Card, CardText } from 'react-mdl';
import * as ReactDOM from 'react-dom';

var e = document.getElementsByTagName("main")[0];

if (!e) {
	throw new Error("main not found!");
}

ReactDOM.render(
	<Card></Card>
	, e);
