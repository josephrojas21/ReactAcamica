import React from 'react';
import { Link,withRouter } from 'react-router-dom'
import {Navbar,Nav,Button,Form ,FormControl} from 'react-bootstrap'

 const Header = ({handleOnClick,handleOnkey,handleChange,getNews}) => {
    
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand >Proyecto News Room </Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="mr-4" onClick={getNews} to='/'>Home</Link>
            <Link name={1} className="mr-4" onClick={handleOnClick} to='/news/category/politica'>Politica</Link>
            <Link name={2} className="mr-4" onClick={handleOnClick} to='/news/category/internacional'>Internacional</Link>
            <Link name={3} className="mr-4" onClick={handleOnClick} to='/news/category/tecnologia'>Tecnologia</Link>
            <Link name={4} className="mr-4" onClick={handleOnClick} to='/news/category/espectaculos'>Espectaculos</Link>
            <Link name={5} className="mr-4" onClick={handleOnClick} to='/news/category/deportes'>Deportes</Link>
          </Nav>
          <Form inline onSubmit={handleOnkey} >
            <FormControl type="text"  onChange={handleChange} placeholder="Search" className="mr-sm-2" />
            <Button onClick={handleOnkey} variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>
    )

}

export default withRouter(Header);
