import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useSnackbar } from 'notistack'
import { history } from '../../router/history'
import { userLogout } from '../../redux/ActionCreators/UserActions'
import { RootReducerInterface, UserLogoutInterface } from '../../utils/interfaces'

const LogoutPage: React.FC<Props> = (props) => {
	const { enqueueSnackbar } = useSnackbar()

	React.useEffect(() => {
		handleLogout()
	}, [])

	const handleLogout = () => {
		props.userLogout()
		history.push('/login')
		enqueueSnackbar('Você saiu da sua conta. Volte sempre!', { variant: 'success' })
	}

	return <div>Saindo...</div>
}

const mapStateToProps = (state: RootReducerInterface) => ({})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ userLogout }, dispatch)
export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(LogoutPage)
/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {
	userLogout: UserLogoutInterface
}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
