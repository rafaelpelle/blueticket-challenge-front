import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Router, Switch } from 'react-router-dom'
import axios from 'axios'
import { FINANCE_KEY, FINANCE_URL } from '../utils/httpClient'
import { RootReducerInterface, User, SetFinanceDataInterface } from '../utils/interfaces'
import { history } from '../router/history'
import MyRoutes from '../router/myRoutes'
import PageHeader from '../components/PageHeader'
import DrawerMenu from '../components/DrawerMenu'
import {
	setStocksData,
	setCurrenciesData,
	setBitcoinData,
} from '../redux/ActionCreators/FinanceActions'

require('./app.css')

const App: React.FC<Props> = (props) => {
	const [user, setUser] = React.useState<User | null>(null)
	const [loading, setLoading] = React.useState(false)

	React.useEffect(() => {
		// listen to the service-worker registration.onupdatefound event on /src/utils/registerSW.ts.
		document.body.addEventListener('updateAvailable', () => location.reload())
		// listen to router's history changes
		history.listen(() => scrollToTheTop())
	}, [])

	React.useEffect(() => {
		if (props.user) {
			setUser(props.user)
			getFinanceData()
		}
	}, [props.user])

	const scrollToTheTop = () => {
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
	}

	const getFinanceData = async () => {
		setLoading(true)
		try {
			// const response = await axios.get(`${FINANCE_URL}?format=json-cors&key=${FINANCE_KEY}`)
			const response = { data: require('../utils/hardcodedData.json') }
			const { setStocksData, setCurrenciesData, setBitcoinData } = props
			const currenciesData = response.data.results.currencies
			delete currenciesData.source
			delete currenciesData.BTC
			setStocksData(response.data.results.stocks)
			setCurrenciesData(currenciesData)
			setBitcoinData(response.data.results.bitcoin)
		} catch (e) {
			console.error(e)
		}
		setLoading(false)
	}

	return (
		<Router history={ history }>
			<div>
				<PageHeader />
				<DrawerMenu />
				<Switch>
					<MyRoutes user={ user } />
				</Switch>
			</div>
		</Router>
	)
}

const mapStateToProps = (state: RootReducerInterface) => ({
	user: state.UserReducer.user,
})
const mapDispatchToProps = (dispatch: any) =>
	bindActionCreators({ setStocksData, setCurrenciesData, setBitcoinData }, dispatch)
export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(App)

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// INTERFACES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
interface OwnState {
	user: User
}

interface OwnProps {}

interface StateProps {
	user: User
}

interface DispatchProps {
	setStocksData: SetFinanceDataInterface
	setCurrenciesData: SetFinanceDataInterface
	setBitcoinData: SetFinanceDataInterface
}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
