import { LOG_USER } from '../constants/action-types'

const initialState = {
    isLogged: false
}

function rootReducer(state = initialState, action) {
    
    switch(action.type){
        case LOG_USER:
            return {
                ...state,
                isLogged: action.payload,
            }
        default:
            return state
    }
    
};

export default rootReducer