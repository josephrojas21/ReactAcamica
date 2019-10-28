import React, {Component} from 'react';
import Filter from './filter'

class Filters extends Component{
    constructor(props){
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        
    }

    handleDateChange(event){
        let payload = this.props.filters;
        payload[event.target.name] = event.target.value;
        this.props.onFilterChange(payload);
    }

    handleOptionChange(event){
        let payload = this.props.filters;
        payload[event.target.name] = event.target.value;
        this.props.onFilterChange(payload);
    }



    render() {
        const { filters } = this.props
        console.log(filters);
        
        return (
            
            <section className="hero is-success">
                <div className="hero-body">
                    <div className="columns">
                        <div className="column">
                            <Filter 
                            isDate = {true}
                            date = {filters.dateFrom}
                            icon = "sign-in-alt"
                            name = "dateFrom"
                            options={[{}]}
                            selected={filters.country}
                            onOptionChange={this.handleOptionChange}
                            onDateChange = {this.handleDateChange}/>
                        </div>
                        <div className="column">
                            <Filter 
                            isDate = {true}
                            date = {filters.dateTo}
                            icon = "sign-in-alt"
                            name = "dateTo"
                            options={[{}]}
                            selected={filters.country}
                            onOptionChange={this.handleOptionChange}
                            onDateChange = {this.handleDateChange}/>
                        </div>
                        <div className="column">
                            <Filter 
                            isDate = {false}
                            options={[{value: 'select', name: 'Todos los paises'},{value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'},{value: 'Uruguay', name:'Uruguay'}]}
                            selected={filters.country}
                            name="country"
                            onOptionChange={this.handleOptionChange}/>
                        </div>
                        <div className="column">
                            <Filter 
                            isDate = {false}
                            options={[{value: 'select', name: 'Cualquier precio'},{value: 1 , name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}]}
                            selected={filters.price}
                            name="price"
                            onOptionChange={this.handleOptionChange}/>
                            
                        </div>
                        <div className="column">
                            <Filter 
                            isDate = {false}
                            options={[{value: 'select', name: 'Cualquier tamaño'},{value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'}]}
                            selected={filters.rooms}
                            icon="globe"
                            name="rooms"
                            onOptionChange={this.handleOptionChange}/>
                        </div>
                    </div>
                </div>
            </section>     
        )
    }
}

export default Filters;