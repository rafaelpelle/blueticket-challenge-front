import * as React from 'react'
import { CloseDrawerInterface, OpenDrawerInterface } from '../../utils/interfaces'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const DrawerMenuButton: React.FC<Props> = (props) => {
	const { drawerIsOpen, openDrawerMenu, closeDrawerMenu } = props

	const handleClick = () => {
		drawerIsOpen ? closeDrawerMenu() : openDrawerMenu()
	}

	return (
		<IconButton color='secondary' onClick={ handleClick }>
			<MenuIcon style={ iconStyle } />
		</IconButton>
	)
}

export default DrawerMenuButton
/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const iconStyle = {
	fontSize: '1.25em',
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	drawerIsOpen: boolean
	openDrawerMenu: OpenDrawerInterface
	closeDrawerMenu: CloseDrawerInterface
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
