import React, {useContext} from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import FormCountry from './FormCountry'
import Data from './Data'
import CovidContext from '../context/covidContext'

const Pais = () => {
    const classes = useStyles()
    const covidCon = useContext(CovidContext)
    const {
        selectedCountry
    } = covidCon
    const {TotalConfirmed, TotalRecovered, TotalDeaths, NewConfirmed, NewDeaths, NewRecovered, Country} = selectedCountry
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.titleContainer}>
                    <Typography variant="h3" className={classes.titleText} color="secondary">Select your country to display the info</Typography>
                    <FormCountry />
                </Grid>
                {Object.keys(selectedCountry).length ===0? null :
                    <>
                    <Typography variant="h3" className={classes.titleText} color="secondary">Country: {Country}</Typography>
                    <Data totConfirmed={TotalConfirmed} totRecovered={TotalRecovered} totDeaths={TotalDeaths} newConfirmed={NewConfirmed} newRocovered={NewRecovered} newDeaths={NewDeaths}/>
                    </>
                }
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
        marginLeft: 'auto',
        marginRight:'auto',
        [theme.breakpoints.up('sm')]: {
            fontSize: '8rem'
        }
    },
  }));
 
export default Pais;