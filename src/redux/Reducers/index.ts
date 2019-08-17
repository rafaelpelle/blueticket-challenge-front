import { combineReducers } from 'redux'
import { RootReducerInterface } from '../../utils/interfaces'
import UserReducer from './userReducer'
import ControllerReducer from './controllerReducer'
import FinanceReducer from './financeReducer'

const rootReducer = combineReducers<RootReducerInterface>({
	UserReducer,
	ControllerReducer,
	FinanceReducer,
})

export default rootReducer
