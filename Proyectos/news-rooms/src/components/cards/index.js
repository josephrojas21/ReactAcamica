import React, { Component } from 'react'

export default class Cards extends Component {

    render() {
        const {nombre} = this.props
        
        return (
            <div>
                <h1>hola desde Cards {nombre}</h1>
            </div>
        )
    }
}
