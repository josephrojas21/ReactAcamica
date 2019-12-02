import React from 'react';
import { Link,useHistory } from 'react-router-dom'

 const Header = (props) => {

    const {nombre,handleOnClick,handleOnkey} = props;

    return (
        <div>
            <h1>Proyecto News Room {nombre}</h1>
            <button name={1} onClick={handleOnClick}><Link name={1} to='/news/category/politica'>Politica</Link></button>
            <button name={2} onClick={handleOnClick}><Link name={2} to='/news/category/internacional'>Internacional</Link></button>
            <button name={3} onClick={handleOnClick}><Link name={3} to='/news/category/tecnologia'>Tecnologia</Link></button>
            <button name={4} onClick={handleOnClick}><Link name={4} to='/news/category/espectaculos'>Espectaculos</Link></button>
            <button name={5} onClick={handleOnClick}><Link name={5} to='/news/category/deportes'>Deportes</Link></button>
            <input type="search" onKeyUp={handleOnkey}></input>
        </div>
    )

}

export default Header
