import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {ProductCard} from './productCard'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 950,
    height: 550,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function TransitionsModal({isOpen,handleClose,user}) {
    
  const classes = useStyles();
  const [open, setOpen] = React.useState(isOpen);
  const history = user.redeemHistory.slice(0,100)
  console.log(user);
  
  
  useEffect(() => {
    setOpen(isOpen)
  });

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">History</ListSubheader>
                </GridListTile>
                { history.map(product => (
                <GridListTile key={product.createDate}>
                    <img src={product.img.url} alt={product.name} />
                    <GridListTileBar
                    title={product.name}
                    subtitle={<span>price: {product.cost}</span>}
                    actionIcon={
                        <IconButton aria-label={`info about ${product.title}`} className={classes.icon}>
                        <InfoIcon />
                        </IconButton>
                    }
                    />
                </GridListTile>
                ))}
          </GridList>
          {/* <List>
          {user.redeemHistory.length > 0 ? (
            user.redeemHistory.map(product => (
              <ProductCard
                key={product.createDate}
                product={product}
                isRedeem={true}
              />
            ))
          ) : (
            <p>No se ha Comprado ningun producto aun</p>
          )}
          </List> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}