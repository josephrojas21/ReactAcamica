import React from 'react'
import { Container, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import  DesktopNavbar  from "../components/desktopNavbar";
import { getProducts } from "../ducks/reducers/productReducer";
import { getUser } from "../ducks/reducers/userReducer";
import { withRouter } from 'next/router'

const useStyles = makeStyles({
  root: {
    maxWidth: 570,
    marginTop: 100,
    marginLeft: '25%',
    //border:  '1px solid black',
    borderRadius: '10 px',

  },
});


const productDetail = (props) => {
  const classes = useStyles();

  const product = props.products.find( product => product._id === props.router.query.title );
  console.log(product);

  
    return (
      <>
        <title>Rewards Store</title>
        <div>
          <DesktopNavbar {...props} />
          <Container fixed>
            <Card className={classes.root}>
                <CardMedia
                  component="img"
                  height="250"
                  image={product.img.url}
                  title={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {product.category}
                  </Typography>
                </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  {`Price:${product.cost}`}
                </Button>
                <Button size="small" color="primary">
                  Purchase
                </Button>
              </CardActions>
            </Card>
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
