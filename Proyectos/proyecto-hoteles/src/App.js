import React, {Component,Fragment} from 'react';
import Header from './components/header/Headers'
import Filters from './components/filters/Filters'
import DataHotels from './services/dataHotels'
import Hotels from './components/hotels/hotels.js'

import './App.css';
import Moment from 'moment';

class App extends Component{
  constructor(){
    super();

    const date = new Date();
    const dateFormat = Moment(date).format("YYYY-MM-DD");
    const nextDateFormat = Moment(date).add(1,'month').format("YYYY-MM-DD");
    this.state = {
      getData: false,
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
        getData: true
      }) 
    });
    
  }

  render(){
    const {getData,hotelsFilters, filters } = this.state
    
    return(
      <Fragment>
        <Header hotels={hotelsFilters} filters={filters} onFilterChange={this.handleFilterChange}/>
        <Filters filters={filters} onFilterChange={this.handleFilterChange}/>
        <section className="section" style={ {marginTop: '1em'} }>
          <div className="container">
              <div className="columns is-multiline">
                {getData ? 
                    <Hotels   hotels={hotelsFilters} />
                  :
                  <div>
                    <h1>No hay hoteles disponibles</h1>
                  </div>
                }
              </div>
          </div>
         </section>
        {/* {this.state.hotelsLoaded ? <Hotel /> : <div>NO SE ENCONTRO HOTELES</div> } */}
      </Fragment>
    )
  }
}

export default App;
