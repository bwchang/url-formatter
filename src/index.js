import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { UrlInput } from "./urlInput";
import { ParameterEditor } from "./parameterEditor";

class Formatter extends React.Component {
	constructor(props) {
		super();
		this.state = { urlSubmitted: false }
	}

	onUrlSubmit = (params, url) => {
		this.setState({ urlSubmitted: true, params, url })
	};

  onEditorSubmit = () => {
  };

  onEditorCancel = () => {
    this.setState({ urlSubmitted: false })
  };

  	render() {
  		const urlInput = (<UrlInput onSubmit={ this.onUrlSubmit }/>);
      const parameterEditor = (<ParameterEditor params={ this.state.params } url={ this.state.url } onCancel={ this.onEditorCancel } />);

    	return (
        <div className="formatter">
          { this.state.urlSubmitted ? parameterEditor : urlInput }
        </div>
      );
  	}
}

// ========================================

ReactDOM.render(
  <Formatter />,
  document.getElementById('root')
);
