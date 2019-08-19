import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootReducerInterface, CurrenciesData, HistoryData } from '../../utils/interfaces'
import Typography from '@material-ui/core/Typography'
import CurrencyBoard from './CurrencyBoard'

const CurrenciesPage: React.FC<Props> = (props) => {
	const currencies: CurrenciesData = props.history[props.history.length - 1].value.currencies

	return (
		<div style={ containerStyle }>
			<Typography variant='h4' color='primary' align='center' style={ headerStyle }>
				COTAÇÃO DAS MOEDAS
			</Typography>
			{ currencies && (
				<div style={ gridStyle }>
					{ Object.keys(currencies).map((key: string) => (
						<CurrencyBoard key={ key } keyName={ key } history={ props.history } />
					)) }
				</div>
			) }
		</div>
	)
}

const mapStateToProps = (state: RootReducerInterface) => ({
	history: state.FinanceReducer.history,
})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch)
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
	history: HistoryData
}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps

type State = OwnState
