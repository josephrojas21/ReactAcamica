import React from "react";
import { getProducts } from "../ducks/reducers/productReducer";
import { getUser } from "../ducks/reducers/userReducer";
import { ProductCard } from "../components/productCard";
import  DesktopNavbar  from "../components/desktopNavbar";
import { Container } from '@material-ui/core';
// import { StyledSidenav } from "../styles/styledSidenav";

const Home = props => {
  return(
    <>
      <title>Rewards Store</title>
      <DesktopNavbar {...props} />
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
  const user = await reduxStore.dispatch(getUser());

  return { products, user };
};

export default Home;
