import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
const Error = ({msg}) => {
    const classes = useStyles()
    return (
    <Typography variant="h6" className={classes.titleError} color="secondary">{msg}</Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    titleError: {

    }
  }));
 
export default Error;