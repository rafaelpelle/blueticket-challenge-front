import * as React from 'react'
import { useSnackbar } from 'notistack'
import { history } from '../../router/history'
import { sleep } from '../../utils/time'
import { User, UserLoginInterface } from '../../utils/interfaces'
import { useEmailInput, usePasswordInput } from '../../hooks/UseInput'
import FormInput from '../FormInput'
import PasswordInput from '../PasswordInput'
import Button from '../Button'

const userPlaceholder = require('../../../public/assets/images/user_placeholder.png')

const LoginForm: React.FC<Props> = (props) => {
	const [loading, setLoading] = React.useState(false)
	const useEmail = useEmailInput('')
	const usePassword = usePasswordInput('')
	const { enqueueSnackbar } = useSnackbar()

	async function handleLogin() {
		const anyFormEmpty = useEmail.empty || usePassword.empty
		const anyFormError = useEmail.error || usePassword.error
		if (!anyFormError && !anyFormEmpty) {
			setLoading(true)
			await sleep(1000) // simulate a API request
			const stringUsers = localStorage.getItem('registeredUsers')
			const registeredUsers: User[] = JSON.parse(stringUsers) || []
			const user = registeredUsers.find((user) => {
				return user.email === useEmail.value && user.password === usePassword.value // TODO use bcrypt later
			})
			if (!user) {
				enqueueSnackbar(`Usuário ou senha errados!`, { variant: 'error' })
				setLoading(false)
			} else {
				setLoading(false)
				props.userLogin(user)
				history.push('/')
				enqueueSnackbar(`Login feito com sucesso. Bem-vindo!`, { variant: 'success' })
			}
		}
	}

	const handleRegister = () => {
		history.push('/register')
	}

	const handleKeyPress = (event: any) => {
		event.key === 'Enter' && handleLogin()
	}

	return (
		<form>
			<img src={ userPlaceholder } style={ imgStyle } alt='User' />
			<FormInput
				label='E-MAIL'
				style={ inputStyle }
				onKeyPress={ handleKeyPress }
				{ ...useEmail }
				fullWidth
			/>
			<PasswordInput
				label='SENHA'
				style={ inputStyle }
				onKeyPress={ handleKeyPress }
				{ ...usePassword }
				fullWidth
			/>
			<Button
				content='Entrar'
				variant='contained'
				color='primary'
				style={ loginButtonStyle }
				onClick={ handleLogin }
				loading={ loading }
				fullWidth
			/>
			<Button
				content='Não tem conta? Crie uma!'
				variant='outlined'
				color='primary'
				style={ buttonStyle }
				onClick={ handleRegister }
				fullWidth
			/>
		</form>
	)
}

export default LoginForm
/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const inputStyle = {
	marginTop: '0.5em',
}
const loginButtonStyle = {
	marginTop: '3em',
}
const buttonStyle = {
	marginTop: '1em',
}
const imgStyle = {
	borderRadius: '500em',
	margin: '0 auto',
	width: '50%',
	height: '50%',
	// This box-shadow is equal to Elevation 6 (from Material-UI)
	boxShadow:
		'0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
}
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	userLogin: UserLoginInterface
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
