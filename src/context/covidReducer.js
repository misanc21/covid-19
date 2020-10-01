import {
    GET_SUMMARY_DATA,
    SELECT_COUNTRY
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case GET_SUMMARY_DATA :
            return({
                ...state,
                summary: action.payload.Global,
                countries: action.payload.Countries
            })
        case SELECT_COUNTRY:
            return({
                ...state,
                selectedCountry: action.payload
            })
        default: 
        return state
    }
}