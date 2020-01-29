import React from "react";
import { getProducts } from "../ducks/products/reducers/productReducer";
import { ProductCard } from "../components/productCard";
import  DesktopNavbar  from "../components/desktopNavbar";
import { Container } from '@material-ui/core';
// import { StyledSidenav } from "../styles/styledSidenav";

const Home = props => {

  
  return(
    <>
      <title>Rewards Store</title>
      <DesktopNavbar />
      <Container maxWidth="xl">
        {props.products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
      </Container>
    </>
  )
 
};

Home.getInitialProps = async ({ reduxStore }) => {
  const products = await reduxStore.dispatch(getProducts());

  return { products };
};

export default Home;
