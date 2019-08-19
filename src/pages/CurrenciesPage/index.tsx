import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootReducerInterface, CurrenciesData, OpenHistoryInterface } from '../../utils/interfaces'
import { openHistory } from '../../redux/ActionCreators/ControllerActions'
import Typography from '@material-ui/core/Typography'
import CurrencyBoard from './CurrencyBoard'

const CurrenciesPage: React.FC<Props> = (props) => (
	<div style={ containerStyle }>
		<Typography variant='h4' color='primary' align='center' style={ headerStyle }>
			COTAÇÃO DAS MOEDAS
		</Typography>
		{ props.currencies && (
			<div style={ gridStyle }>
				{ Object.keys(props.currencies).map((key: string) => (
					<CurrencyBoard
						currency={ props.currencies[key] }
						openHistory={ props.openHistory }
						key={ key }
					/>
				)) }
			</div>
		) }
	</div>
)
const mapStateToProps = (state: RootReducerInterface) => ({
	currencies: state.FinanceReducer.currencies,
})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ openHistory }, dispatch)
export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(CurrenciesPage)

/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const containerStyle = {
	maxWidth: '800px',
	margin: '0 auto',
	padding: '2em 10px',
}
const headerStyle = {
	fontWeight: 800,
	letterSpaceing: '5px',
	marginBottom: '2em',
}
const gridStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
	gridGap: '30px',
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {
	currencies: CurrenciesData
}

interface DispatchProps {
	openHistory: OpenHistoryInterface
}

type Props = StateProps & DispatchProps & OwnProps

type State = OwnState
