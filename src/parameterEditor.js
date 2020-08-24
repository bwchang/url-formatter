import React from 'react';

import { map, each, all } from "underscore";

import { Table, Form, Button } from 'react-bootstrap';

export class ParameterEditor extends React.Component {
	constructor(props) {
		super();
    const parameters = Object.keys(props.params);
    const macros = [];
    each(parameters, (p) => { macros.push(props.params[p]); });

    const parametersValid = Array.from(Array(parameters.length),(x,i)=>true);
    const macrosValid = Array.from(Array(macros.length),(x,i)=>true);

		this.state = { parameters, macros, parametersValid, macrosValid, showConvertedUrl: false }
	}

  rowValid(value) {
    return !!value && !value.includes("?") && !value.includes("&");
  };

  onChangeParameter = (e) => {
    const newParams = [...this.state.parameters];
    const index = e.target.closest("tr").getAttribute("data-rowid");
    newParams[index] = e.target.value;

    const newParamsValid = [...this.state.parametersValid];
    newParamsValid[index] = this.rowValid(e.target.value);

    this.setState({ parameters: newParams, parametersValid: newParamsValid });
  };

  onChangeMacro = (e) => {
    const newMacros = [...this.state.macros];
    const index = e.target.closest("tr").getAttribute("data-rowid");
    newMacros[index] = e.target.value;

    const newMacrosValid = [...this.state.macrosValid];
    newMacrosValid[index] = this.rowValid(e.target.value);

    this.setState({ macros: newMacros, macrosValid: newMacrosValid });
  };

  onRemoveRow = (e) => {
    const index = e.target.closest("tr").getAttribute("data-rowid");

    const newParams = [...this.state.parameters];
    const newMacros = [...this.state.macros];
    const newParamsValid = [...this.state.parametersValid];
    const newMacrosValid = [...this.state.macrosValid];

    each([ newParams, newMacros, newParamsValid, newMacrosValid ], (arr) => { arr.splice(index, 1); });

    this.setState({ parameters: newParams, parametersValid: newParamsValid, macros: newMacros, macrosValid: newMacrosValid });
  };

  onAddRow = () => {
    const newParams = [...this.state.parameters];
    newParams.push("")
    const newMacros = [...this.state.macros];
    newMacros.push("")
    const newParamsValid = [...this.state.parametersValid];
    newParamsValid.push(false)
    const newMacrosValid = [...this.state.macrosValid];
    newMacrosValid.push(false)

    this.setState({ parameters: newParams, parametersValid: newParamsValid, macros: newMacros, macrosValid: newMacrosValid });
  };

  onSubmit = () => {
    var url = this.props.url ? this.props.url : "";
    var paramString;
    for (var i = 0; i < this.state.parameters.length; i++) {
      paramString = i === 0 ? "?" : "&";
      url = url.concat(paramString.concat(`${this.state.parameters[i]}=${this.state.macros[i]}`));
    };
    this.setState({ showConvertedUrl: true, convertedUrl: url });
  };

  shouldDisableSubmit() {
    return !all(this.state.parametersValid.concat(this.state.macrosValid));
  }

  renderTable() {
    const rows = map(Array.from(Array(this.state.parameters.length),(x,i)=>i), (index) => {
      return (
        <tr key={ index } data-rowid={ index } className={ `row${index % 2}` }>
          <td>
            <Form.Control required type="text"
              className={ this.state.parametersValid[index] ? "" : "invalidInput" }
              value={ this.state.parameters[index] }
              onChange={ this.onChangeParameter }
            />
          </td>
          <td>
            <Form.Control required type="text"
              className={ this.state.macrosValid[index] ? "" : "invalidInput" }
              value={ this.state.macros[index] }
              onChange={ this.onChangeMacro }
            />
          </td>
          <td className={ `text-center removeRow${index % 2}`} >
            <div className="removeButton" onClick={ this.onRemoveRow }>X</div>
          </td>
        </tr>
      );
    });
    return (
      <Table>
        <thead>
          <tr>
            <th id="parameterHeader" className="text-center">Parameter</th>
            <th id="macroHeader" className="text-center">Macro</th>
            <th id="removeHeader" className="text-center">X</th>
          </tr>
        </thead>
        <tbody>
          { rows }
          <tr>
            <td><button id="addButton" className="btn btn-link" onClick={ this.onAddRow }>+ Add Row</button></td>
          </tr>
        </tbody>
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
		return (
      <div className="parameterEditor">
        { this.renderTable() }
        <div id="parameterEditorButtonsContainer">
          <Button id="parameterEditorCancelButton" variant="secondary" size="lg" onClick={ this.props.onCancel }>Back</Button>
          <Button id="parameterEditorSubmitButton" className="submitButton" size="lg" disabled={ this.shouldDisableSubmit() } onClick={ this.onSubmit }>Convert</Button>
        </div>
        { this.state.showConvertedUrl && this.renderConvertedUrl() }
      </div>
    );
	}
}
