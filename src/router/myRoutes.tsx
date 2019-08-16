import * as React from 'react'
import { Redirect, Route } from 'react-router'
import { customTheme } from '../utils/theme'
import HomePage from '../pages/HomePage'
import NotLoggedPage from '../pages/NotLoggedPage/'
import LogoutPage from '../pages/LogoutPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import PasswordRecoveryPage from '../pages/PasswordRecoveryPage'
import EmailValidationPage from '../pages/EmailValidationPage'
import TutorialPage from '../pages/TutorialPage/'
import PartnersPage from '../pages/PartnersPage'
import WalletPage from '../pages/WalletPage/'
import AccountPage from '../pages/AccountPage/'
import FaqPage from '../pages/FaqPage/'
import PrivacyPage from '../pages/PrivacyPage/'
import TermsPage from '../pages/TermsPage/'

const MyRoutes: React.FC<Props> = (props) => {
	const { loginInfo } = props
	const locationHash = window.location.hash

	return (
		<div style={ divStyle }>
			<Route exact={ true } path='/' component={ HomePage } />
			<Route exact={ true } path='/home' render={ () => <Redirect to='/' /> } />
			<Route exact={ true } path='/callback/change-password' component={ PasswordRecoveryPage } />
			<Route exact={ true } path='/callback/email-validate' component={ EmailValidationPage } />
			<Route exact={ true } path='/logout' component={ LogoutPage } />
			<Route exact={ true } path='/login' component={ LoginPage } />
			<Route exact={ true } path='/register' component={ RegisterPage } />
			<Route exact={ true } path='/forgotPassword' component={ ForgotPasswordPage } />
			<Route exact={ true } path='/partners' component={ PartnersPage } key={ locationHash } />
			<Route exact={ true } path='/wallet' component={ loginInfo ? WalletPage : NotLoggedPage } />
			<Route
				exact={ true }
				path='/account'
				component={ loginInfo ? AccountPage : NotLoggedPage }
			/>
			<Route exact={ true } path='/tutorial' component={ TutorialPage } />
			<Route exact={ true } path='/faq' component={ FaqPage } />
			<Route exact={ true } path='/privacy' component={ PrivacyPage } />
			<Route exact={ true } path='/terms' component={ TermsPage } />
		</div>
	)
}
export default MyRoutes

/////////////////////////////////////////////////////////////////
//////////////////////////// STYLES /////////////////////////////
/////////////////////////////////////////////////////////////////
const divStyle = {
	minHeight: '80vh',
	backgroundColor: customTheme.colors.backgroundGrey,
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	loginInfo: string
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
