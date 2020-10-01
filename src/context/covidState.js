import React, { useReducer } from 'react';
import CovidContext from './covidContext'
import covidReducer from './covidReducer'

import axios from 'axios'

import {
    GET_SUMMARY_DATA,
    SELECT_COUNTRY
} from '../types'

const CovidState = props => {
    const InitialState = {
        countries: [],
        summary: {},
        selectedCountry: {}
    }

    const [state, dispatch] = useReducer(covidReducer, InitialState)

    const getSummaryFunc = async () =>{
        await axios.get('https://api.covid19api.com/summary')
            .then(res =>{
                console.log(res.data)
                dispatch({
                    type: GET_SUMMARY_DATA,
                    payload: res.data
                })
            })
    }

    const selectCountryFunc = (cc) => {
        const country = state.countries.filter(e=> e.CountryCode === cc)
        dispatch({
            type: SELECT_COUNTRY,
            payload: country[0]
        })
    }

    return (
        <CovidContext.Provider
            value={{
                countries: state.countries,
                summary: state.summary,
                selectedCountry: state.selectedCountry,
                getSummaryFunc,
                selectCountryFunc
            }}
        >
            {props.children}
        </CovidContext.Provider>
    );
}
 
export default CovidState;