import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootReducerInterface, CloseHistoryInterface } from '../../utils/interfaces'
import { closeHistory } from '../../redux/ActionCreators/ControllerActions'
import { primaryColor } from '../../utils/theme'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Dialog, DialogContent, Typography } from '@material-ui/core'
import CustomTooltip from './CustomTooltip'
import { valueHistory } from './hardcodedData'

const HistoryChart: React.FC<Props> = (props) => {
	const handleClose = () => {
		props.closeHistory()
	}

	return (
		<Dialog fullWidth maxWidth='md' open={ props.isOpen } onClose={ handleClose }>
			<DialogContent style={ dialogStyle }>
				<Typography align='center' color='primary' style={ nameStyle }>
					HISTÓRICO DE VALORES
				</Typography>
				<div style={ chartContainerStyle }>
					<ResponsiveContainer>
						<LineChart data={ valueHistory }>
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

const mapStateToProps = (state: RootReducerInterface) => ({
	isOpen: state.ControllerReducer.historyIsOpen,
})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ closeHistory }, dispatch)
export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(HistoryChart)

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
	marginBottom: '1.5em',
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {
	isOpen: boolean
}

interface DispatchProps {
	closeHistory: CloseHistoryInterface
}

type Props = StateProps & DispatchProps & OwnProps

type State = OwnState
