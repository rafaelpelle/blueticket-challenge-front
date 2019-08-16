import * as React from 'react'
import { Currency } from '../../utils/interfaces'
import { handleMoneyFormat, valueToPercentage } from '../../utils/stringParser'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const CurrencyBoard: React.FC<Props> = (props) => {
	const { name, buy, sell, variation } = props.currency

	return (
		<Paper elevation={ 6 } style={ paperStyle }>
			<Typography align='center' color='primary' style={ currencyNameStyle }>
				{ name }
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
				<strong style={ valueStyle }>{ valueToPercentage(variation) }</strong>
			</Typography>
		</Paper>
	)
}

export default CurrencyBoard

/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const paperStyle = {
	padding: '2em',
}
const currencyNameStyle = {
	fontWeight: 700,
	fontSize: '1.5em',
	marginBottom: '1em',
}
const fontContainerStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0.5em 0',
}
const labelStyle = {
	fontSize: '1.2em',
	fontWeight: 600,
	opacity: 0.6,
}
const valueStyle = {
	fontSize: '1.2em',
	fontWeight: 600,
	// opacity: 0.6,
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	currency: Currency
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps

type State = OwnState
