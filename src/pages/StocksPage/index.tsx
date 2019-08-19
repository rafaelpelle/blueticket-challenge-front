import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootReducerInterface, StocksData, OpenHistoryInterface } from '../../utils/interfaces'
import { openHistory } from '../../redux/ActionCreators/ControllerActions'
import Typography from '@material-ui/core/Typography'
import StockBoard from './StockBoard'

const StocksPage: React.FC<Props> = (props) => (
	<div style={ containerStyle }>
		<Typography variant='h4' color='primary' align='center' style={ headerStyle }>
			BOLSA DE VALORES
		</Typography>
		{ props.stocks && (
			<div style={ gridStyle }>
				{ Object.keys(props.stocks).map((key: string) => (
					<StockBoard
						stock={ props.stocks[key] }
						openHistory={ props.openHistory }
						key={ key }
					/>
				)) }
			</div>
		) }
	</div>
)

const mapStateToProps = (state: RootReducerInterface) => ({ stocks: state.FinanceReducer.stocks })
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ openHistory }, dispatch)
export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(StocksPage)

/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const containerStyle = {
	maxWidth: '900px',
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
	gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
	gridGap: '30px',
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {
	stocks: StocksData
}

interface DispatchProps {
	openHistory: OpenHistoryInterface
}

type Props = StateProps & DispatchProps & OwnProps

type State = OwnState
