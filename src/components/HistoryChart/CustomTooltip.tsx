import * as React from 'react'
import { handleMoneyFormat } from '../../utils/stringParser'
import { primaryColor } from '../../utils/theme'
import Typography from '@material-ui/core/Typography'

const CustomTooltip: React.FC<Props> = (props) => {
	const { payload, label, active } = props

	if (active) {
		return (
			<div style={ tooltipStyle }>
				<Typography style={ dateStyle }>{ label }</Typography>
				<Typography style={ priceStyle }>
					{ handleMoneyFormat(payload[0].value, 'BRL') }
				</Typography>
			</div>
		)
	} else {
		return null
	}
}
export default CustomTooltip
/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const tooltipStyle = {
	backgroundColor: 'white',
	border: `1px solid ${primaryColor}`,
	borderRadius: '5px',
	padding: '1em',
}
const dateStyle = {
	fontWeight: 500,
	fontSize: '0.9em',
	marginBottom: '0.5em',
}
const priceStyle = {
	fontWeight: 700,
	marginTop: 0,
	fontSize: '0.9em',
	color: primaryColor,
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	payload: any
	label: any
	active: any
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
