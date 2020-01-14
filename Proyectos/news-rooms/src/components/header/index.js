import React from 'react';
import { Link,useHistory } from 'react-router-dom'
import {Navbar,Nav,Button,Form ,FormControl} from 'react-bootstrap'

 const Header = (props) => {

    const {handleOnClick,handleOnkey} = props;

    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand ><Link to='/'>Proyecto News Room</Link>  </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link name={1} onClick={handleOnClick}><Link name={1} to='/news/category/politica'>Politica</Link></Nav.Link>
            <Nav.Link name={2} onClick={handleOnClick}><Link name={2} to='/news/category/internacional'>Internacional</Link></Nav.Link>
            <Nav.Link name={3} onClick={handleOnClick}><Link name={3} to='/news/category/tecnologia'>Tecnologia</Link></Nav.Link>
            <Nav.Link name={4} onClick={handleOnClick}><Link name={4} to='/news/category/espectaculos'>Espectaculos</Link></Nav.Link>
            <Nav.Link name={5} onClick={handleOnClick}><Link name={5} to='/news/category/deportes'>Deportes</Link></Nav.Link>
          </Nav>
          <Form inline >
            <FormControl type="search" onKeyUp={handleOnkey} placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>
    )

}

export default Header
