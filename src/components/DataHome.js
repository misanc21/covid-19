import React, {useContext, useEffect} from 'react';
import CovidContext from '../context/covidContext'

import Data from './Data'


const DataHome = () => {
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
        <Data totConfirmed={TotalConfirmed} totRecovered={TotalRecovered} totDeaths={TotalDeaths} newConfirmed={NewConfirmed} newRocovered={NewRecovered} newDeaths={NewDeaths}/>
    );
}

 
export default DataHome;