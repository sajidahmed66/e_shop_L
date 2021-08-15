import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

//reducers
import cartItemReducers from "./cartItems/cartItemReducers";

const reducers = combineReducers({
    cartItemReducers: cartItemReducers
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store
