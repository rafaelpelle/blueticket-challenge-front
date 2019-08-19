import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { pageHeaderHeight, isMobile } from '../../utils/theme'
import { closeDrawerMenu, openDrawerMenu } from '../../redux/ActionCreators/ControllerActions'
import DrawerMenuButton from './DrawerMenuButton'
import PageHeaderLogo from './PageHeaderLogo'
import SearchInput from './SearchInput'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {
	RootReducerInterface,
	OpenDrawerInterface,
	CloseDrawerInterface,
} from '../../utils/interfaces'

const PageHeader: React.FC<Props> = (props) => {
	const [searchIsOpen, setSearchIsOpen] = React.useState(false)
	const { drawerIsOpen, openDrawerMenu, closeDrawerMenu } = props
	const imageIsVisible = !(searchIsOpen && isMobile)

	return (
		<AppBar position='fixed' color='primary' style={ appBarStyle }>
			<Toolbar style={ toolbarStyle }>
				<DrawerMenuButton
					drawerIsOpen={ drawerIsOpen }
					openDrawerMenu={ openDrawerMenu }
					closeDrawerMenu={ closeDrawerMenu }
				/>
				<PageHeaderLogo imageVisible={ imageIsVisible } />
				{ /* <SearchInput isOpen={ searchIsOpen } setIsOpen={ setSearchIsOpen } /> */ }
			</Toolbar>
		</AppBar>
	)
}

const mapStateToProps = (state: RootReducerInterface) => ({
	drawerIsOpen: state.ControllerReducer.drawerIsOpen,
})
const mapDispatchToProps = (dispatch: any) =>
	bindActionCreators({ openDrawerMenu, closeDrawerMenu }, dispatch)
export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(PageHeader)

/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const appBarStyle = {
	padding: '0 10px',
	height: pageHeaderHeight,
}
const toolbarStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	height: '100%',
	padding: 0,
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {
	drawerIsOpen: boolean
}

interface DispatchProps {
	openDrawerMenu: OpenDrawerInterface
	closeDrawerMenu: CloseDrawerInterface
}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
