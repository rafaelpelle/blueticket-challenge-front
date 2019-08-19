import { FinanceReducerInterface } from '../../utils/interfaces'

const INITIAL_STATE: FinanceReducerInterface = {
	stocks: null,
	currencies: null,
	bitcoin: null,
	history: [],
}

export default (state: FinanceReducerInterface = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case 'STOCKS_DATA_OBTAINED':
			return { ...state, stocks: action.payload }
		case 'CURRENCIES_DATA_OBTAINED':
			return { ...state, currencies: action.payload }
		case 'BITCOIN_DATA_OBTAINED':
			return { ...state, bitcoin: action.payload }
		case 'HISTORY_DATA_OBTAINED':
			return { ...state, history: [...state.history, action.payload] }
		case 'FINANCE_DATA_CLEARED':
			return { ...INITIAL_STATE }
		default:
			return state
	}
}
