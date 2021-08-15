import * as actionTypes from './cartItemActionTypes';

const initialState = []

const cartItemReducers = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return [
                ...state, action.payload
            ]
        case actionTypes.REMOVE_FROM_CART:
            return state.filter(cartItem => cartItem !== action.payload)
        case actionTypes.CLEAR_CART:
            return state = []
        default:
            return state
    }
}

export default cartItemReducers