import {
    GET_SUMMARY_DATA
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case GET_SUMMARY_DATA :
            return({
                ...state,
                summary: action.payload.Global,
                countries: action.payload.Countries
            })
        default: 
        return state
    }
}