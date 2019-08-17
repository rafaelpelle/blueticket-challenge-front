import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isMobile, pageHeaderHeight } from '../../utils/theme'
import { openDrawerMenu, closeDrawerMenu } from '../../redux/ActionCreators/ControllerActions'
import DrawerMenuItem from './DrawerMenuitem'
import { SwipeableDrawer, Divider } from '@material-ui/core'
import {
	RootReducerInterface,
	CloseDrawerInterface,
	OpenDrawerInterface,
	User,
} from '../../utils/interfaces'

const DrawerMenu: React.FC<Props> = (props) => {
	const { drawerIsOpen, openDrawerMenu, closeDrawerMenu, user } = props

	const handleOnOpen = () => openDrawerMenu()

	const handleOnClose = () => closeDrawerMenu()

	return (
		<SwipeableDrawer
			anchor={ isMobile ? 'top' : 'left' }
			open={ drawerIsOpen }
			onOpen={ handleOnOpen }
			onClose={ handleOnClose }
			PaperProps={ { style: drawerStyle } }
			transitionDuration={ {
				enter: 500,
				exit: 300,
			} }
		>
			<div style={ containerStyle }>
				{ !user && (
					<React.Fragment>
						<DrawerMenuItem route='/login' handleCloseMenu={ handleOnClose } />
						<DrawerMenuItem route='/register' handleCloseMenu={ handleOnClose } />
						<Divider style={ dividerStyle } />
					</React.Fragment>
				) }
				{ user && (
					<React.Fragment>
						<DrawerMenuItem route='/home' handleCloseMenu={ handleOnClose } />
						<DrawerMenuItem route='/stocks' handleCloseMenu={ handleOnClose } />
						<DrawerMenuItem route='/currencies' handleCloseMenu={ handleOnClose } />
						<DrawerMenuItem route='/bitcoin' handleCloseMenu={ handleOnClose } />
						<Divider style={ dividerStyle } />
						<DrawerMenuItem route='/logout' handleCloseMenu={ handleOnClose } />
					</React.Fragment>
				) }
			</div>
		</SwipeableDrawer>
	)
}

const mapStateToProps = (state: RootReducerInterface) => ({
	drawerIsOpen: state.ControllerReducer.drawerIsOpen,
	user: state.UserReducer.user,
})
const mapDispatchToProps = (dispatch: any) =>
	bindActionCreators({ openDrawerMenu, closeDrawerMenu }, dispatch)
export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(DrawerMenu)
/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const containerStyle = {
	padding: '15px 20px',
	minWidth: '280px',
}
const drawerStyle = {
	maxHeight: `calc(100vh - ${pageHeaderHeight}`,
}
const dividerStyle = {
	margin: '1em 0em',
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {
	drawerIsOpen: boolean
	user: User
}
interface DispatchProps {
	openDrawerMenu: OpenDrawerInterface
	closeDrawerMenu: CloseDrawerInterface
}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
