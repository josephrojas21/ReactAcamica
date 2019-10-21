import React, {Component} from 'react';
import Header from './components/header/Header'
import Filters from './components/filters/Filters'

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      value: '',
      value2:'',
    }

  }

  render(){
    return(
      <fragment>
        <Header/>
        <Filters/>
      </fragment>
    )
  }
}

export default App;
