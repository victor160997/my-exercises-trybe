import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estado: '',
      primeiroNome: '',
      segundoNome: '',
      descricao: '',
    };
  }


  handleChange({ target }) {
    const { name, value } = target

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <select name='estado' value={this.state.digitado} onChange={this.handleChange}>
          <option value='MG'>MG</option>
          <option value='SP'>SP</option>
          <option value='RO'>RO</option>
          <option value='ES'>ES</option>
          <option value='RJ'>RJ</option>
        </select>
        <input name='primeiroNome'  value={this.state.primeiroNome} onChange={this.handleChange}></input>
        <input name='segundoNome'  value={this.state.segundoNome}  onChange={this.handleChange}></input>
        <textarea name='descricao' value={this.state.descricao} onChange={this.handleChange}></textarea>
      </form>
    );
  }
}

export default Form;