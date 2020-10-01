import React, { useReducer } from 'react';
import CovidContext from './covidContext'
import covidReducer from './covidReducer'

import axios from 'axios'

import {
    GET_SUMMARY_DATA
} from '../types'

const CovidState = props => {
    const InitialState = {
        countries: [],
        summary: {}
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

    return (
        <CovidContext.Provider
            value={{
                countries: state.countries,
                summary: state.summary,
                getSummaryFunc
            }}
        >
            {props.children}
        </CovidContext.Provider>
    );
}
 
export default CovidState;