import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import FormCountry from './FormCountry'

const Pais = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.titleContainer}>
                    <Typography variant="h3" className={classes.titleText} color="secondary">Select your country to display the info</Typography>
                    <FormCountry />
                </Grid>
            </Grid>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minHeight: '100vh'
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
        fontSize: '5rem',
        fontFamily: 'Bebas neue, sans-serif',
        [theme.breakpoints.up('sm')]: {
            fontSize: '8rem'
        }
    },
  }));
 
export default Pais;