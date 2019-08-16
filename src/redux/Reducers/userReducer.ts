import { UserReducerInterface } from '../../utils/interfaces'

const INITIAL_STATE: UserReducerInterface = {
	user: null,
}

export default (state: UserReducerInterface = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case 'USER_LOGGED_OUT':
			return { ...INITIAL_STATE }
		default:
			return state
	}
}
