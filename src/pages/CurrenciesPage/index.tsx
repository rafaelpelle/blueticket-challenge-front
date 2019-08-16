import * as React from 'react'
import axios from 'axios'
import { FINANCE_KEY, FINANCE_URL } from '../../utils/httpClient'
import Typography from '@material-ui/core/Typography'
import CurrencyBoard from './CurrencyBoard'

const { useState, useEffect } = React

const CurrenciesPage: React.FC<Props> = (props) => {
	const [loading, setLoading] = useState(true)
	const [currencies, setCurrencies] = useState(null)

	useEffect(() => {
		handleGetCurrencies()
	}, [])

	const handleGetCurrencies = async () => {
		setLoading(true)
		try {
			// const response = await axios.get(`${FINANCE_URL}?format=json-cors&key=${FINANCE_KEY}`)
			// const currenciesData = response.data.results.currencies
			const currenciesData = require('../../utils/hardcodedData.json').results.currencies
			delete currenciesData.source
			setCurrencies(currenciesData)
		} catch (e) {
			console.error(e)
		}
		setLoading(false)
	}

	return (
		<div style={ containerStyle }>
			<Typography variant='h4' color='primary' align='center' style={ headerStyle }>
				COTAÇÃO DAS MOEDAS
			</Typography>
			{ !loading && (
				<div style={ gridStyle }>
					<CurrencyBoard currency={ currencies.USD } />
					<CurrencyBoard currency={ currencies.EUR } />
					<CurrencyBoard currency={ currencies.GBP } />
					<CurrencyBoard currency={ currencies.ARS } />
					<CurrencyBoard currency={ currencies.BTC } />
				</div>
			) }
		</div>
	)
}

export default CurrenciesPage

/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const containerStyle = {
	maxWidth: '800px',
	margin: '0 auto',
	padding: '2em 10px',
}
const headerStyle = {
	fontWeight: 800,
	letterSpaceing: '5px',
	marginBottom: '2em',
}
const gridStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
	gridGap: '30px',
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
