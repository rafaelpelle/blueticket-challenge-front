import * as React from 'react'
import { CircularProgress } from '@material-ui/core'
import { pageHeaderHeight } from '../../utils/theme'

const Loader: React.FC<Props> = (props) => (
	<div style={ { ...containerStyle, position: 'absolute' } }>
		<CircularProgress
			size={ 150 }
			color={ props.color ? props.color : 'primary' }
			style={ { ...props.style } }
		/>
	</div>
)

export default Loader

/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const containerStyle = {
	width: '100vw',
	height: `calc(100vh - ${pageHeaderHeight})`,
	top: pageHeaderHeight,
	left: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'rgba(0,0,0,0.25)',
	transition: 'opacity 500ms cubic- bezier(0.4, 0, 0.2, 1) 0ms',
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////

type Color = 'inherit' | 'primary' | 'secondary'

interface OwnProps {
	color?: Color
	style?: any
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
