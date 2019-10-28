import React, {Component} from 'react';
import Header from './components/header/Headers'
import Filters from './components/filters/Filters'
import DataHotels from './services/dataHotels'

import './App.css';
import Moment from 'moment';

class App extends Component{
  constructor(){
    super();

    const date = new Date();
    const dateFormat = Moment(date).format("YYYY-MM-DD");
    const nextDateFormat = Moment(date).add(1,'month').format("YYYY-MM-DD");
    this.state = {
      getData: true,
      hotels: [],
      hotelsFilters: [],
      filters:{
        dateFrom:dateFormat,
        dateTo: nextDateFormat,
        country: 'select',
        price: 'select',
        rooms: 'select'
      }
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
    
  }

  handleFilterChange(payload){
    const hotelsFilters = DataHotels.filterHotels(this.state.hotels, payload);
    this.setState({
      filters: payload,
      hotelsFilters: hotelsFilters

    })
    console.log(this.state);
  }

  componentDidMount(){
    DataHotels.getData().then(hotels =>{
      this.setState({
        hotels: hotels, 
        hotelsFilters: hotels, 
        getData: false
      }) 
    });
      
    
  }

  render(){
    return(
      <fragment>
        <Header hotels={this.state.hotelsFilters} filters={this.state.filters} onFilterChange={this.handleFilterChange}/>
        <Filters filters={this.state.filters} onFilterChange={this.handleFilterChange}/>
        {/* {this.state.hotelsLoaded ? <Hotel /> : <div>NO SE ENCONTRO HOTELES</div> } */}

      </fragment>
    )
  }
}

export default App;
