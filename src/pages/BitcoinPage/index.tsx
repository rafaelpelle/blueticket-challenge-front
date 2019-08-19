import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootReducerInterface, BitcoinData, HistoryData } from '../../utils/interfaces'
import Typography from '@material-ui/core/Typography'
import BitcoinBoard from './BitcoinBoard'

const CryptoPage: React.FC<Props> = (props) => (
	<div style={ containerStyle }>
		<Typography variant='h4' color='primary' align='center' style={ headerStyle }>
			COTAÇÃO DO BITCOIN
		</Typography>
		{ props.bitcoin && (
			<div style={ gridStyle }>
				{ Object.keys(props.bitcoin).map((key: string) => (
					<BitcoinBoard
						cryptocurrency={ props.bitcoin[key] }
						key={ key }
						keyName={ key }
						history={ props.history }
					/>
				)) }
			</div>
		) }
	</div>
)

const mapStateToProps = (state: RootReducerInterface) => ({
	bitcoin: state.FinanceReducer.bitcoin,
	history: state.FinanceReducer.history,
})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch)
export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(CryptoPage)

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
	bitcoin: BitcoinData
	history: HistoryData
}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps

type State = OwnState
