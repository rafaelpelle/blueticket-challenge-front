import { combineReducers } from 'redux'
import { RootReducerInterface } from '../../utils/interfaces'
import UserReducer from './userReducer'
import ControllerReducer from './controllerReducer'

const rootReducer = combineReducers<RootReducerInterface>({
	UserReducer,
	ControllerReducer,
})

export default rootReducer
