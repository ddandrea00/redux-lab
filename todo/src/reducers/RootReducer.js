import list from './ListReducers'
import { combineReducers } from 'redux'

// the object returned by this function must have a key named `cart` since `cart`
// will be a *prop* on our Cart container element
const rootReducer = combineReducers({
    list //ES6 short hand for {cart: cart}
})

export default rootReducer