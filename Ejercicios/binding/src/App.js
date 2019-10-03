import React, { Component, Fragment } from 'react';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      campo: ''
    }
  }
  
  

  render() {
    const { campo } = this.state
    return (
      <Fragment>
        <div className="container">

          <h5 className="grey-text text-darken-3">Primer ejercicio</h5>
          <div className="input-field">
            <p>ingrese texto</p>
            <input value={campo} onChange={(e)=> this.setState({ campo: e.target.value })} />
          </div>
          
            <p>este es tu texto {campo}</p>
          
        </div>
      </Fragment>

    )
  }

}

export default App;
