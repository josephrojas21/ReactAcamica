import React, { Component } from 'react'

export default class Categories extends Component {
    render() {
        const {nombre} = this.props
        return (
            <div>
               <h1>hola {nombre}</h1>
            </div>
        )
    }
}
