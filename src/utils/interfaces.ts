/////////////////////////////////////////////////////////////////
/////////////////////////// REDUCERS ////////////////////////////
/////////////////////////////////////////////////////////////////
export interface RootReducerInterface {
	UserReducer: UserReducerInterface
	ControllerReducer: ControllerReducerInterface
	FinanceReducer: FinanceReducerInterface
}

export interface UserReducerInterface {
	user: User
}

export interface ControllerReducerInterface {
	drawerIsOpen: boolean
	historyIsOpen: boolean
}

export interface FinanceReducerInterface {
	stocks: StocksData
	currencies: CurrenciesData
	bitcoin: BitcoinData
}
/////////////////////////////////////////////////////////////////
//////////////////////// ACTION CREATORS ////////////////////////
/////////////////////////////////////////////////////////////////
export type UserLoginInterface = (user: User) => { type: string; payload: User }
export type UserLogoutInterface = () => { type: string }
export type OpenDrawerInterface = () => { type: string }
export type CloseDrawerInterface = () => { type: string }
export type OpenHistoryInterface = () => { type: string }
export type CloseHistoryInterface = () => { type: string }
export type SetFinanceDataInterface = (data: any) => { type: string; payload: User }
export type ClearFinanceDataInterface = () => { type: string }
/////////////////////////////////////////////////////////////////
/////////////////////////// MODEL ///////////////////////////////
/////////////////////////////////////////////////////////////////
export interface User {
	name: string
	email: string
	password: string
}

export interface Currency {
	name: string
	buy: number
	sell: number
	variation: number
}

export interface Cryptocurrency {
	name: string
	format: string[]
	last: number
	buy?: number
	sell?: number
	variation: number
}

export interface Stock {
	name: string
	location: string
	points?: number
	variation: number
}

export type StocksData = any
export type CurrenciesData = any
export type BitcoinData = any
