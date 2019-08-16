import * as React from 'react'
import { history } from '../../router/history'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'

const menuItens: any = {
	home: { text: 'INÍCIO', iconName: 'home_rounded' },
	stocks: { text: 'AÇÕES', iconName: 'trending_up_rounded' },
	currencies: { text: 'MOÉDAS', iconName: 'attach_money_rounded' },
	login: { text: 'ENTRAR', iconName: 'exit_to_app_rounded' },
	register: { text: 'CADASTRAR', iconName: 'person_add_rounded' },
	logout: { text: 'SAIR', iconName: 'exit_to_app_rounded' },
}

const TopMenuItem: React.FC<Props> = (props) => {
	const { route, handleCloseMenu } = props
	const { text, iconName } = menuItens[route.substring(1)] // Remove the  first '/' character

	const handleClick = () => {
		history.push(route)
		handleCloseMenu()
	}

	return (
		<div style={ containerStyle } onClick={ handleClick }>
			<Icon color='primary' style={ iconStyle }>
				{ iconName }
			</Icon>
			<Typography color='primary' style={ fontStyle }>
				{ text }
			</Typography>
			<Icon style={ arrowStyle }>keyboard_arrow_right_outline</Icon>
		</div>
	)
}
export default TopMenuItem

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const containerStyle = {
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	padding: '15px 0px',
	cursor: 'pointer',
}
const fontStyle = {
	fontWeight: 600,
	fontSize: '1em',
	letterSpacing: '1px',
	margin: '0 20px',
}
const arrowStyle = {
	marginLeft: 'auto',
}
const iconStyle = {
	fontSize: '1.75em',
}
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// INTERFACES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
export type RouteOptionsType =
	| '/home'
	| '/login'
	| '/register'
	| '/logout'
	| '/stocks'
	| '/currencies'

interface OwnState {}

interface OwnProps {
	route: RouteOptionsType
	handleCloseMenu: () => void
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
