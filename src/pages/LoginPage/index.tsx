import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RootReducerInterface } from '../../utils/interfaces'
import { userLogin } from '../../redux/ActionCreators/UserActions'
import LoginForm from '../../components/LoginForm'
import Paper from '@material-ui/core/Paper'

const LoginPage: React.FC<Props> = (props) => (
	<div className='formPage'>
		<Paper className='formPaper' elevation={ 12 }>
			<LoginForm userLogin={ props.userLogin } />
		</Paper>
	</div>
)

const mapStateToProps = (state: RootReducerInterface) => ({})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ userLogin }, dispatch)
export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(LoginPage)

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// INTERFACES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {
	userLogin: any
}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
