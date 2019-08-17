import * as React from 'react'
import { Stock } from '../../utils/interfaces'
import { handleMoneyFormat, valueToPercentage, parseCurrencyName } from '../../utils/stringParser'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const CurrencyBoard: React.FC<Props> = (props) => {
	const { name, location, points, variation } = props.stock

	return (
		<Paper elevation={ 6 } style={ paperStyle }>
			<Typography align='center' color='primary' style={ currencyNameStyle }>
				{ name }
			</Typography>
			<Typography style={ fontContainerStyle }>
				<span style={ labelStyle }>Local: </span>
				<span style={ valueStyle }>{ location }</span>
			</Typography>
			{ points && (
				<Typography style={ fontContainerStyle }>
					<span style={ labelStyle }>Pontos: </span>
					<strong style={ valueStyle }>{ points.toFixed(2) }</strong>
				</Typography>
			) }
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
	stock: Stock
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps

type State = OwnState
