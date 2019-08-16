import { UserInterface } from '../../../utils/interfaces'

export const userLogin = (user: UserInterface) => ({
	type: 'USER_LOGGED_IN',
	payload: user,
})

export const userLogout = () => ({
	type: 'USER_LOGGED_OUT',
})
