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
            
            <section class="hero is-success">
                <div class="hero-body">
                    <div class="columns">
                        <div class="column">
                            <Filter 
                            isDate = {true}
                            date = {filters.dateFrom}
                            icon = "sign-in-alt"
                            name = "dateFrom"
                            onDateChange = {this.handleDateChange}/>
                        </div>
                        <div class="column">
                            <Filter 
                            isDate = {true}
                            date = {filters.dateTo}
                            icon = "sign-in-alt"
                            name = "dateTo"
                            onDateChange = {this.handleDateChange}/>
                        </div>
                        <div class="column">
                            <Filter 
                            isDate = {false}/>
                        </div>
                        <div class="column">
                            <Filter isDate={false}/>
                        </div>
                        <div class="column">
                            <Filter isDate={false}/>
                        </div>
                    </div>
                </div>
            </section>     
        )
    }
}

export default Filters;