/////////////////////////////////////////////////////////////////
/////////////////////////// REDUCERS ////////////////////////////
/////////////////////////////////////////////////////////////////
export interface RootReducerInterface {
	UserReducer: UserReducerInterface
	ControllerReducer: ControllerReducerInterface
}

export interface UserReducerInterface {
	user: User
}

export interface ControllerReducerInterface {
	drawerIsOpen: boolean
}
/////////////////////////////////////////////////////////////////
//////////////////////// ACTION CREATORS ////////////////////////
/////////////////////////////////////////////////////////////////
export type UserLoginInterface = (user: User) => { type: string; payload: User }
export type UserLogoutInterface = () => { type: string }
export type OpenDrawerInterface = () => { type: string }
export type CloseDrawerInterface = () => { type: string }
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
