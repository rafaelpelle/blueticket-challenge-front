import * as React from 'react'
import { Currency } from '../../utils/interfaces'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const CurrencyBoard: React.FC<Props> = (props) => {
	const { name, buy, sell, variation } = props.currency

	return (
		<Paper elevation={ 6 } style={ paperStyle }>
			<Typography>{ name }</Typography>
			<Typography>{ buy }</Typography>
			<Typography>{ sell }</Typography>
			<Typography>{ variation }</Typography>
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
