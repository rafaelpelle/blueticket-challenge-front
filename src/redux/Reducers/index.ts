import { combineReducers } from 'redux'
import { RootReducerInterface } from '../../utils/interfaces'
import UserReducer from './userReducer'

const rootReducer = combineReducers<RootReducerInterface>({
	UserReducer,
})

export default rootReducer
