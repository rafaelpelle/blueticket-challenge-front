import * as React from 'react'
import { CircularProgress } from '@material-ui/core'

const Loader: React.FC<Props> = (props) => (
	<div style={ { ...containerStyle, position: 'absolute' } }>
		<CircularProgress
			size={ 150 }
			color={ props.color ? props.color : 'primary' }
			style={ { ...defaultStyle, ...props.style } }
		/>
	</div>
)

export default Loader

/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const containerStyle = {
	width: '100vw',
	height: '100vh',
	top: 0,
	left: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'rgba(0,0,0,0.25)',
}
const defaultStyle = {
	// display: 'block',
	// margin: '0 auto',
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
