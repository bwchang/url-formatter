import React from 'react';

import { map, each } from "underscore";

import { Table, Form, Button } from 'react-bootstrap';

export class ParameterEditor extends React.Component {
	constructor(props) {
		super();
		this.state = { params: Object.assign({}, props.params), showConvertedUrl: false }
	}

  onChange = (e) => {
    const newParams = { ...this.state.params };
    newParams[e.target.id] = e.target.value;
    this.setState({ params: newParams });
  };

  onSubmit = () => {
    var url = this.props.url ? this.props.url : "";
    var firstParam = true;
    var paramString;
    each(this.state.params, (value, key) => {
      if (firstParam) {
        paramString = `${key}=${value}`;
        firstParam = false;
      } else {
        paramString = `&${key}=${value}`;
      }
      url = url.concat(paramString);
    });
    this.setState({ showConvertedUrl: true, convertedUrl: url });
  };

  renderTable() {
    const rows = map(this.state.params, (value, key) => {
      return (
        <tr key={ `${key}_row` }>
          <td><textarea className="parameterEditorKeyColumn" readOnly value={ key } /></td>
          <td><Form.Control type="text" id={ key } value={ value } onChange={ this.onChange } /></td>
        </tr>
      );
    });
    return (
      <Table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{ rows }</tbody>
      </Table>
    );
  }

  renderConvertedUrl() {
    return (
      <div id="convertedUrl">
        <div>{ this.state.convertedUrl }</div>
      </div>
    );
  }

	render() {
		return (<div className="parameterEditor">
      { this.renderTable() }
      <div id="parameterEditorButtonsContainer">
        <Button id="parameterEditorCancelButton" variant="secondary" size="lg" onClick={ this.props.onCancel }>Go Back</Button>
        <Button id="parameterEditorSubmitButton" variant="primary" size="lg" onClick={ this.onSubmit }>Convert</Button>
      </div>
      { this.state.showConvertedUrl && this.renderConvertedUrl() }
    </div>);
	}
}
