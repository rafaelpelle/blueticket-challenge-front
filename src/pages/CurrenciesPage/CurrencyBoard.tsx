import * as React from 'react'
import { Currency, HistoryData } from '../../utils/interfaces'
import { handleMoneyFormat, valueToPercentage, parseCurrencyName } from '../../utils/stringParser'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import HistoryChart from '../../components/HistoryChart'

const CurrencyBoard: React.FC<Props> = (props) => {
	const currency: Currency =
		props.history[props.history.length - 1].value.currencies[props.keyName]
	const { name, buy, sell, variation } = currency
	const [historyIsOpen, setHistoryIsOpen] = React.useState(false)

	const toggleHistoryIsOpen = () => {
		setHistoryIsOpen(!historyIsOpen)
	}

	const getHistory = () => {
		return props.history.map((entry: any) => ({
			date: entry.date,
			value: entry.value.currencies[props.keyName].buy,
		}))
	}

	return (
		<Paper elevation={ 6 } onClick={ toggleHistoryIsOpen } style={ paperStyle }>
			<Typography align='center' color='primary' style={ nameStyle }>
				{ parseCurrencyName(name) }
			</Typography>
			<Typography style={ fontContainerStyle }>
				<span style={ labelStyle }>Compra: </span>
				<span style={ valueStyle }>{ handleMoneyFormat(buy, 'BRL') }</span>
			</Typography>
			<Typography style={ fontContainerStyle }>
				<span style={ labelStyle }>Venda: </span>
				<strong style={ valueStyle }>{ handleMoneyFormat(sell, 'BRL') }</strong>
			</Typography>
			<Typography style={ fontContainerStyle }>
				<span style={ labelStyle }>Variação: </span>
				<strong
					style={
						variation > 0 ? positiveStyle : variation < 0 ? negativeStyle : valueStyle
					}
				>
					{ valueToPercentage(variation) }
				</strong>
			</Typography>

			<HistoryChart
				isOpen={ historyIsOpen }
				onClose={ toggleHistoryIsOpen }
				history={ getHistory() }
			/>
		</Paper>
	)
}

export default CurrencyBoard

/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const paperStyle = {
	padding: '2em',
	cursor: 'pointer',
}
const nameStyle = {
	fontWeight: 700,
	fontSize: '1.5em',
	marginBottom: '1em',
}
const fontContainerStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0.3em 0',
}
const valueStyle = {
	fontSize: '1.2em',
	fontWeight: 600,
}
const labelStyle = {
	...valueStyle,
	opacity: 0.6,
}
const positiveStyle = {
	...valueStyle,
	color: '#4caf50',
}
const negativeStyle = {
	...valueStyle,
	color: 'red',
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	keyName: string
	history: HistoryData
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps

type State = OwnState
