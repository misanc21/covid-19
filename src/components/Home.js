import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import DataHome from './DataHome'
import mask from '../img/mask.png'


const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.titleContainer}>
                    <Typography variant="h1" className={classes.titleText}color="secondary">What's Happening with</Typography>
                    <Typography variant="h1" className={classes.titleText}color="secondary">Covid-19?</Typography>
                    <img src={mask} alt="mask" className={classes.mask}/>
                    <Typography variant="h1" className={classes.hashtag}color="primary">#WearAMask</Typography>
                </Grid>
                <DataHome />
            </Grid>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    titleContainer: {
        width: '100%',
        textAlign: 'center'
    },
    titleText: {
        marginTop:'1.8rem',
        fontFamily: 'Bebas neue, sans-serif',
        [theme.breakpoints.up('sm')]: {
            fontSize: '8rem'
        }
    },
    mask: {
        maxWidth:'250px',

    },
    hashtag: {
        fontFamily: 'Bebas neue',
        fontSize: '2rem'
    }
  }));
 
export default Home;