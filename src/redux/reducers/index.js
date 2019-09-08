import { ADD_USER } from '../constants/action-types'

const initialState = {
    isLogged: false
};

function rootReducer(state = initialState, action) {
    
    if (action.type === ADD_USER) {
        state.isLogged = action.payload
    }
    return state;

};

export default rootReducer;