import userReducer from './user/userReducer'
import {combineReducers} from 'redux'



export default combineReducers({
    EventUser:userReducer,
})