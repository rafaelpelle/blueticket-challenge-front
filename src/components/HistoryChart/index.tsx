import * as React from 'react'
import { primaryColor } from '../../utils/theme'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Dialog, DialogContent, Typography } from '@material-ui/core'
import CustomTooltip from './CustomTooltip'

const HistoryChart: React.FC<Props> = (props) => {
	const handleClose = () => {
		props.onClose()
	}

	return (
		<Dialog fullWidth maxWidth='md' open={ props.isOpen } onClose={ handleClose }>
			<DialogContent style={ dialogStyle }>
				<Typography align='center' color='primary' style={ nameStyle }>
					HISTÓRICO DE VALORES
				</Typography>
				<Typography
					align='center'
					color='primary'
					variant='overline'
					style={ subHeaderStyle }
				>
					ATUALIZADO A CADA 30 SEGUNDOS
				</Typography>
				<div style={ chartContainerStyle }>
					<ResponsiveContainer>
						<LineChart data={ props.history }>
							<XAxis dataKey='date' />
							<YAxis />
							<Tooltip
								content={
									<CustomTooltip
										payload={ Tooltip.payload }
										label={ Tooltip.label }
										active={ Tooltip.active }
									/>
								}
							/>
							<Line
								type='monotone'
								dataKey='value'
								stroke={ primaryColor }
								strokeWidth={ 3 }
								isAnimationActive={ true }
								animationEasing='ease-in-out'
								animationDuration={ 300 }
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default HistoryChart

/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const dialogStyle = {
	padding: '2em',
}
const chartContainerStyle = {
	width: '100%',
	marginLeft: '-10px',
	marginTop: '5px',
	height: 200,
}
const nameStyle = {
	fontWeight: 700,
	fontSize: '1.25em',
}
const subHeaderStyle = {
	margin: '0 auto',
	display: 'block',
	marginBottom: '2.5em',
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	isOpen: boolean
	onClose: any
	history: Array<{ date: string; value: number }>
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps

type State = OwnState
