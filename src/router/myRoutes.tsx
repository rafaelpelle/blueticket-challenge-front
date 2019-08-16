import * as React from 'react'
import { Redirect, Route } from 'react-router'
import { UserInterface } from '../utils/interfaces'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

const MyRoutes: React.FC<Props> = (props) => {
	const { user } = props
	const locationHash = window.location.hash

	return (
		<div style={ divStyle }>
			<Route
				exact={ true }
				path='/'
				render={ () => (user ? <HomePage /> : <Redirect to='/login' />) }
			/>
			<Route exact={ true } path='/home' render={ () => <Redirect to='/' /> } />
			<Route exact={ true } path='/login' component={ LoginPage } />
			<Route exact={ true } path='/register' component={ RegisterPage } />
			{ /* <Route exact={ true } path='/logout' component={ LogoutPage } /> */ }
		</div>
	)
}
export default MyRoutes

/////////////////////////////////////////////////////////////////
//////////////////////////// STYLES /////////////////////////////
/////////////////////////////////////////////////////////////////
const divStyle = {
	minHeight: '80vh',
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	user: UserInterface
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
