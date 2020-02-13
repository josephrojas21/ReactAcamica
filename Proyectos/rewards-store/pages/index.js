import React, {useState} from "react";
import { getProducts } from "../ducks/reducers/productReducer";
import { getUser } from "../ducks/reducers/userReducer";
import { ProductCard } from "../components/productCard";
import  DesktopNavbar  from "../components/desktopNavbar";
import { Container } from '@material-ui/core';
// import { StyledSidenav } from "../styles/styledSidenav";

const Home = props => {

  const [products,setProducts] =  useState(props.products)
  const productsFilter = props.products

  
  const handleOnChange = (e) =>{
    const {value} = e.target;
    const data = productsFilter

    const newData = data.filter(
      el => el.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    
    setProducts(newData)
  }


  return(
    <>
      <title>Rewards Store</title>
      <DesktopNavbar {...props} handleOnChange={handleOnChange} />
      <Container >
        {products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
      </Container>
    </>
  )
 
};

Home.getInitialProps = async ({ reduxStore }) => {
  const products = await reduxStore.dispatch(getProducts());
  const user = await reduxStore.dispatch(getUser());

  return { products, user };
};

export default Home;
