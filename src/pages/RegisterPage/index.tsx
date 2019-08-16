import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RootReducerInterface, UserLoginInterface } from '../../utils/interfaces'
import { userLogin } from '../../redux/ActionCreators/UserActions'
import RegisterForm from '../../components/RegisterForm'
import Paper from '@material-ui/core/Paper'

const RegisterPage: React.FC<Props> = (props) => (
	<div className='formPage'>
		<Paper className='formPaper' elevation={ 12 }>
			<RegisterForm userLogin={ props.userLogin } />
		</Paper>
	</div>
)

const mapStateToProps = (state: RootReducerInterface) => ({})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ userLogin }, dispatch)
export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(RegisterPage)

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
	userLogin: UserLoginInterface
}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
