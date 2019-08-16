import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Router, Switch } from 'react-router-dom'
import { RootReducerInterface, UserInterface } from '../utils/interfaces'
import { history } from '../router/history'
import MyRoutes from '../router/myRoutes'
import PageHeader from '../components/PageHeader'
import DrawerMenu from '../components/DrawerMenu'
// import Footer from '../components/Footer'

require('./app.css')

class App extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { user: null }
	}

	componentDidMount() {
		// listen to the service-worker registration.onupdatefound
		// event on /src/utils/registerSW.ts.
		document.body.addEventListener('updateAvailable', () => location.reload())
		// listen to router's history changes
		history.listen(() => this.scrollToTheTop())
	}

	componentWillReceiveProps(props: Props) {
		this.setState({ user: props.user })
	}

	scrollToTheTop = () => {
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
	}

	render() {
		return (
			<Router history={ history }>
				<div>
					<PageHeader />
					<DrawerMenu />
					<Switch>
						<MyRoutes user={ this.state.user } />
					</Switch>
					{ /* <Footer /> */ }
				</div>
			</Router>
		)
	}
}

const mapStateToProps = (state: RootReducerInterface) => ({
	user: state.UserReducer.user,
})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch)
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
	user: UserInterface
}

interface OwnProps {}

interface StateProps {
	user: UserInterface
}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
