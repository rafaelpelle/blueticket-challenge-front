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
			const response = await axios.get(`${FINANCE_URL}?format=json-cors&key=${FINANCE_KEY}`)
			const currenciesData = response.data.results.currencies
			delete currenciesData.source
			setCurrencies(currenciesData)
		} catch (e) {
			console.error(e)
		}
		setLoading(false)
	}

	const renderTest = () => {
		if (currencies) {
			Object.keys(currencies).forEach((key: string) => <p>{ key }</p>)
		}
	}

	return (
		<div>
			<Typography variant='h4' color='primary' align='center'>
				Cotação das moédas
			</Typography>
			{ !loading && (
				<React.Fragment>
					{ renderTest() }
					<CurrencyBoard currency={ currencies.USD } />
					<CurrencyBoard currency={ currencies.EUR } />
					<CurrencyBoard currency={ currencies.GBP } />
					<CurrencyBoard currency={ currencies.ARS } />
					<CurrencyBoard currency={ currencies.BTC } />
				</React.Fragment>
			) }
		</div>
	)
}

export default CurrenciesPage

/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps

type State = OwnState
