import * as React from 'react'
import { Redirect, Route } from 'react-router'
import HomePage from '../pages/HomePage'

const MyRoutes: React.FC<Props> = (props) => {
	const locationHash = window.location.hash

	return (
		<div style={ divStyle }>
			<Route exact={ true } path='/' component={ HomePage } />
			<Route exact={ true } path='/home' render={ () => <Redirect to='/' /> } />
			{ /* <Route exact={ true } path='/logout' component={ LogoutPage } />
			<Route exact={ true } path='/login' component={ LoginPage } />
			<Route exact={ true } path='/register' component={ RegisterPage } /> */ }
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

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
