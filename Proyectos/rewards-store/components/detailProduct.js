import React from 'react'
import { Container, Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 570,
      marginTop: 100,
      marginLeft: '25%',
      //border:  '1px solid black',
      borderRadius: '10 px',
  
    },
  });

const DetailProduct = ({product,handleOnClick}) => {
    const classes = useStyles();

    

    return (
        <>
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
                <Button onClick={handleOnClick} size="small" color="primary">
                  Purchase
                </Button>
              </CardActions>
            </Card>
        </>
    )
}

export default DetailProduct
