import * as React from 'react'
import axios from 'axios'
import { FINANCE_KEY, FINANCE_URL } from '../../utils/httpClient'
import Typography from '@material-ui/core/Typography'
import BitcoinBoard from './BitcoinBoard'
import Loader from '../../components/Loader'

const { useState, useEffect } = React

const CryptoPage: React.FC<Props> = (props) => {
	const [loading, setLoading] = useState(true)
	const [cryptocurrencies, setCryptocurrencies] = useState(null)

	useEffect(() => {
		handleGetCryptocurrencies()
	}, [])

	const handleGetCryptocurrencies = async () => {
		setLoading(true)
		try {
			// const response = await axios.get(`${FINANCE_URL}?format=json-cors&key=${FINANCE_KEY}`)
			// const currenciesData = response.data.results.currencies
			const cryptocurrenciesData = require('../../utils/hardcodedData.json').results.bitcoin
			setCryptocurrencies(cryptocurrenciesData)
		} catch (e) {
			console.error(e)
		}
		setLoading(false)
	}

	return (
		<div style={ containerStyle }>
			<Typography variant='h4' color='primary' align='center' style={ headerStyle }>
				COTAÇÃO DO BITCOIN
			</Typography>
			{ loading && <Loader /> }
			{ !loading && (
				<div style={ gridStyle }>
					{ Object.keys(cryptocurrencies).map((key: string) => (
						<BitcoinBoard cryptocurrency={ cryptocurrencies[key] } key={ key } />
					)) }
				</div>
			) }
		</div>
	)
}

export default CryptoPage

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
