import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        const {nombre,handleOnClick} = this.props
        return (
            <div>
               <h1>hola {nombre}</h1>
               <button name={1} onClick={handleOnClick}> <Link to='/news/category/politica'>Politica</Link></button>
               <button name={2} onClick={handleOnClick}>Internacional</button>
               <button name={3} onClick={handleOnClick}>Tecnologia</button>
               <button name={4} onClick={handleOnClick}>Espectaculos</button>
               <button name={5} onClick={handleOnClick}>Deportes</button>

            </div>
        )
    }
}
