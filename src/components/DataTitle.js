import React from 'react';
import { makeStyles,Typography, Paper } from '@material-ui/core';
import NumberFormat from 'react-number-format';

const DataTitle = ({msg, value}) => {
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.data}>{msg}</Typography>
            <NumberFormat value={value} thousandSeparator={true} displayType={'text'} className={classes.dataText}/>
        </Paper>
    );
}
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: '1rem',
      marginTop:'2rem',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'space-evenly',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      backgroundColor: '#ff9800',
      [theme.breakpoints.down('sm')]: {
        flexFlow: 'column wrap',
        }
    },
    data: {
        width:'100%',
        color: 'white',
        fontSize: '3rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
            paddingTop: '1rem',
            paddingBottom: '1rem'
        }
    },
    dataText: {
        minWidth:'20rem',
        backgroundColor: 'white',
        padding: '1rem',
        color: '#ff9800',
        fontWeight: 'bold',
        fontSize: '3rem',
        [theme.breakpoints.down('sm')]: {
            width: '-webkit-fill-available;'
        }
    },
  }));
export default DataTitle;