import React, { Component, Fragment } from 'react';

import './App.css';



class App extends Component {

  constructor(){
    super();
    this.state = {
      value: '',
      value2:'',
    }

    this.handleChange = this.handleChange.bind(this)
    this.deleteInput = this.deleteInput.bind(this,'value');
    this.deleteSecondInput = this.deleteSecondInput.bind(this, 'value2');
  }

  handleChange(e){
    const {name, value } = e.target;
    this.setState({[name]: value})
  }

  deleteInput(...arg){
    console.log(arg[0]);
    console.log(arg[1]);
    this.setState({value: ''})
  }

  deleteSecondInput(valor){
    console.log(valor);
    this.setState({value2: ''})
    
  }

  
  
  

  render() {
    const{value, value2} = this.state;
    const copiaDelState = {...this.state, value3:'dede'}
    return (
      <Fragment>
        <div className="container">

          <h5 className="grey-text text-darken-3">Primer ejercicio</h5>
          <div className="input-field">
            <p>ingrese texto</p>
            <input value={copiaDelState.value} onChange={this.handleChange} name="value"/>
            <input value={copiaDelState.value2} onChange={this.handleChange} name="value2" />

          </div>
            <button onClick={this.deleteInput}>
                    borrar
            </button>
            <button onClick={this.deleteSecondInput}>
                    borrar
            </button>
            <p>este es tu texto {value}................ {value2}........{value3}</p>
          
        </div>
      </Fragment>

    )
  }

}

export default App;
