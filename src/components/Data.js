import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';

import DataTitle from './DataTitle'
import DataLegend from './DataLegend'

const Data = ({totConfirmed, totRecovered, totDeaths, newConfirmed, newRocovered, newDeaths }) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} className={classes.root}>
            <DataTitle msg="Total confirmed cases to date" value={totConfirmed}/>
            <DataLegend msg="Total recovered" value={totRecovered}/>
            <DataLegend msg="Total Deaths" value={totDeaths}/>
            <DataTitle msg="New confirmed today" value={newConfirmed}/>
            <DataLegend msg="New recovered" value={newRocovered}/>
            <DataLegend msg="New Deaths" value={newDeaths}/>
        </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom:'4rem'
    },
  }));

export default Data;