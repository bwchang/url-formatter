import React from 'react';

import { reduce } from "underscore";
import { Button, Alert } from 'react-bootstrap';

export class UrlInput extends React.Component {
	constructor(props) {
		super();
		this.state = { url: "" }
	}

	onTextChange = (e) => {
		this.setState({ url: e.target.value })
	};

	onSubmit = () => {
		if (this.state.url.split("?").length !== 2) {
			this.setState({ error: "Invalid URL: expecting exactly 1 ? at the start of the query." });
			return;
		}
		const query = this.state.url.split("?")[1]
		var splitParam;
		const obj = reduce(query.split("&"), (memo, param) => {
			splitParam = param.split("=");
			if (splitParam.length !== 2) {
				this.setState({ error: "Invalid URL: expecting each parameter to be a key value pair separated by =." });
				return;
			}
			if (!splitParam[0] || !splitParam[1]) {
				this.setState({ error: "Invalid URL: expecting each key and value to be present." });
				return;
			}
			memo[splitParam[0]] = splitParam[1];
			return memo;
		}, {});
		if (!obj || Object.keys(obj).length === 0) {
			this.setState({ error: "Invalid URL: expecting at least one parameter." });
			return;
		}
		this.props.onSubmit(obj, this.state.url.split("?")[0]);
	}

  render() {
    const alert = (<Alert variant="danger">{ this.state.error }</Alert>);
    return (<div className="urlInput">
      { this.state.error && alert }
      <div className="form-group">
        <label htmlFor="inputUrl" className="plainText">Paste URL here:</label><br/>
        <textarea className="form-control" id="inputUrl" rows="12" onChange={ this.onTextChange } />
      </div>
      <Button size="lg" className="submitButton" block disabled={ !this.state.url } onClick={ this.onSubmit }>Submit</Button>
    </div>);
	}
}
