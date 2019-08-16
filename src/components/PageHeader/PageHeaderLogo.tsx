import * as React from 'react'
import { history } from '../../router/history'
import { pageHeaderHeight } from '../../utils/theme'
import Button from '@material-ui/core/Button'

const PageHeaderLogo: React.FC<Props> = (props) => {
	const { imageVisible } = props
	const buttonStyle = imageVisible ? visibleButtonStyle : hiddenButtonStyle
	const appLogo = require('../../../public/assets/images/app_icon.png')

	function goToHomePage() {
		history.push('/')
	}

	return (
		<Button onClick={ goToHomePage } style={ { ...buttonStyle, position: 'absolute' } }>
			<img src={ appLogo } style={ imageStyle } alt='logo' />
		</Button>
	)
}

export default PageHeaderLogo
/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const visibleButtonStyle = {
	padding: '10px',
	margin: '0 auto',
	left: '50%',
	transform: 'translateX(-50%)',
	height: pageHeaderHeight,
	width: 'auto',
	transition: 'all .3s ease-in-out 0s',
	transitionDelay: '.3s',
}
const hiddenButtonStyle = {
	...visibleButtonStyle,
	transition: 'all .1s ease-in-out 0s',
	transitionDelay: '0s',
	opacity: 0,
}
const imageStyle = {
	height: `calc(${pageHeaderHeight} - 20px)`,
	width: 'auto',
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	imageVisible: boolean
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
