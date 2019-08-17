import * as React from 'react'
import { Redirect, Route } from 'react-router'
import { User } from '../utils/interfaces'
import HomePage from '../pages/HomePage'
import LogoutPage from '../pages/LogoutPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import StocksPage from '../pages/StocksPage'
import CurrenciesPage from '../pages/CurrenciesPage'
import CryptoPage from '../pages/CryptoPage'

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
			<Route exact={ true } path='/logout' component={ LogoutPage } />
			<Route exact={ true } path='/login' component={ LoginPage } />
			<Route exact={ true } path='/register' component={ RegisterPage } />
			<Route
				exact={ true }
				path='/stocks'
				// render={ () => (user ? <StocksPage /> : <Redirect to='/login' />) }
				render={ () => <StocksPage /> }
			/>
			<Route
				exact={ true }
				path='/crypto'
				// render={ () => (user ? <CryptoPage /> : <Redirect to='/login' />) }
				render={ () => <CryptoPage /> }
			/>
			<Route
				exact={ true }
				path='/currencies'
				// render={ () => (user ? <CurrenciesPage /> : <Redirect to='/login' />) }
				render={ () => <CurrenciesPage /> }
			/>
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
	user: User
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
