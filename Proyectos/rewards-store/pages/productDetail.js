import React from 'react'
import  DesktopNavbar  from "../components/desktopNavbar";
import { Container} from '@material-ui/core';
import { getProducts } from "../ducks/reducers/productReducer";
import { getUser } from "../ducks/reducers/userReducer";
import { withRouter } from 'next/router'
import DetailProduct from './../components/detailProduct'
import productsService from './../services/getData'



const productDetail = (props) => {

  const product = props.products.find( product => product._id === props.router.query.title );

  const handleOnClick = () =>{
    productsService.redeemProduct(product._id)
        .then(res => {
          console.log(res);
          //productsService
            
        },(error) => console.log(error))
}

  
    return (
      <>
        <title>Rewards Store</title>
        <div>
          <DesktopNavbar {...props} />
          <Container fixed>
            <DetailProduct product={product} handleOnClick={handleOnClick}/>
          </Container>
        </div>
      </>
    )
}

productDetail.getInitialProps = async ({ reduxStore }) => {
    const products = await reduxStore.dispatch(getProducts());
    const user = await reduxStore.dispatch(getUser());
  
    return { products, user };
  };

export default withRouter(productDetail)
