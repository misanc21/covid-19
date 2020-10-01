import React, { useContext, useState } from 'react';
import { makeStyles, TextField, MenuItem, Button } from '@material-ui/core';
import CovidContext from '../context/covidContext'

import Error from './Error'


const FormCountry = () => {
    const classes = useStyles();
    const covidCon = useContext(CovidContext)
    const {
        countries,
        selectCountryFunc
    } = covidCon

    const [country, setCountry] = useState('')
    const [error, setError] = useState(false)

    const handleChange = e => {
        setCountry(e.target.value)
    }
    const handleSumbit = e => {
        e.preventDefault()
        if(country.trim()=== ''){
            setError(true)
            return
        }
        selectCountryFunc(country)
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSumbit}>
            <TextField
                className={classes.select}
                select
                label="Select Country"
                value={country}
                onChange={handleChange}
                helperText="Please select your country"
                >
                {countries.map((c) => (
                    <MenuItem key={c.CountryCode} value={c.CountryCode}>
                    {c.Country}
                    </MenuItem>
                ))}
            </TextField>
            {error ? <Error msg="Selecciona un pais para continuar"/>: null}
            <Button variant="contained" type="submit" className={classes.button}>
                Submit
            </Button>
        </form>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexFlow: 'column wrap',
        justifyContent:'center',
        textAlign:'center',
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        },
    },
    select : {
        margin:'auto!important'
    },
    button: {
        marginTop: '2rem',
        marginBottom: '.5rem',
        backgroundColor: '#ff9800',
        color: 'white',
        fontWeight: 'bold',
        width:'10rem',
        marginLeft:'auto!important',
        marginRight:'auto!important',
        '&:hover':{
            backgroundColor: '#0d47a1',
        }
    },
  }));
 
export default FormCountry;