import * as React from 'react'
import { useSnackbar } from 'notistack'
import { history } from '../../router/history'
import { sleep } from '../../utils/time'
import { useInput, useEmailInput, usePasswordInput } from '../../hooks/UseInput'
import FormInput from '../FormInput'
import PasswordInput from '../PasswordInput'
import Button from '../Button'

const userPlaceholder = require('../../../public/assets/images/user-placeholder.png')

const RegisterForm: React.FC<Props> = (props) => {
	const [loading, setLoading] = React.useState(false)
	const useName = useInput('')
	const useEmail = useEmailInput('')
	const usePassword = usePasswordInput('')
	const { enqueueSnackbar } = useSnackbar()

	async function handleRegister() {
		const anyFormEmpty = useName.empty || useEmail.empty || usePassword.empty
		const anyFormError = useName.error || useEmail.error || usePassword.error
		if (!anyFormError && !anyFormEmpty) {
			setLoading(true)
			await sleep(1000) // simulate a API request
			// await registerUser(userInfo)
			enqueueSnackbar(`Seja bem-vindo!`, { variant: 'success' })
			setLoading(false)
		}
	}

	function handleLogin() {
		history.push('/login')
	}

	const handleKeyPress = (event: any) => {
		event.key === 'Enter' && handleRegister()
	}

	return (
		<div>
			<img src={ userPlaceholder } style={ imgStyle } alt='User' />
			<FormInput
				label='NOME'
				style={ inputStyle }
				onKeyPress={ handleKeyPress }
				{ ...useName }
				fullWidth
			/>
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
				content='Cadastrar'
				variant='contained'
				color='primary'
				style={ registerButtonStyle }
				onClick={ handleRegister }
				loading={ loading }
				fullWidth
			/>
			<Button
				content='Já tem conta? Entre!'
				variant='outlined'
				color='primary'
				style={ loginButtonStyle }
				onClick={ handleLogin }
				fullWidth
			/>
		</div>
	)
}

export default RegisterForm
/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const inputStyle = {
	marginTop: '0.5em',
}
const registerButtonStyle = {
	marginTop: '3em',
}
const loginButtonStyle = {
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

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
