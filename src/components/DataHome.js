import React, {useContext, useEffect} from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import CovidContext from '../context/covidContext'

import DataTitle from './DataTitle'
import DataLegend from './DataLegend'

const DataHome = () => {
    const classes = useStyles()
    const covidCon = useContext(CovidContext)
    const {
        summary,
        getSummaryFunc
    } = covidCon

    const {TotalConfirmed, TotalRecovered, TotalDeaths, NewConfirmed, NewDeaths, NewRecovered} = summary
    useEffect(() => {
        getSummaryFunc()
    //eslint-disable-next-line
    }, [])

    return (
        <Grid item xs={12} className={classes.root}>
            <DataTitle msg="Total confirmed cases to date" value={TotalConfirmed}/>
            <DataLegend msg="Total recovered" value={TotalRecovered}/>
            <DataLegend msg="Total Deaths" value={TotalDeaths}/>
            <DataTitle msg="New confirmed today" value={NewConfirmed}/>
            <DataLegend msg="New recovered" value={NewRecovered}/>
            <DataLegend msg="New Deaths" value={NewDeaths}/>
        </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom:'4rem'
    },
  }));
 
export default DataHome;