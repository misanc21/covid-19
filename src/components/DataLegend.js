import React from 'react';
import { makeStyles,Typography, Paper } from '@material-ui/core';
import NumberFormat from 'react-number-format';

const DataLegend = ({msg, value}) => {
    const classes = useStyles()
    return (
        <Paper xs={12} className={classes.subData} elevation={0}>
            <Typography variant="h5" className={classes.subDataLegend}>{msg}</Typography>
            <div className={classes.seperator}/>
            <NumberFormat value={value} thousandSeparator={true} displayType={'text'} className={classes.subDataText}/>
        </Paper>
    );
}

const useStyles = makeStyles((theme) => ({
    subData: {
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'rew nowrap',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexFlow: 'column wrap'
        }
    },
    subDataLegend:{
        color: '#ff9800',
        fontWeight: 'bold',
        width: '15rem',
        textAlign: 'center'
    },
    seperator : {
        width: '15px',
        height:'2px',
        backgroundColor: '#ff9800',
        marginRight: '3px',
        marginLeft: '3px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none' 
        }
    },
    subDataText : {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#0d47a1',
        width: '15rem',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '1rem'
        }
    }
  }));
 
export default DataLegend