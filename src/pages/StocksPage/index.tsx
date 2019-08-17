import * as React from 'react'
import axios from 'axios'
import { FINANCE_KEY, FINANCE_URL } from '../../utils/httpClient'
import Typography from '@material-ui/core/Typography'
import StockBoard from './StockBoard'
import Loader from '../../components/Loader'

const { useState, useEffect } = React

const StocksPage: React.FC<Props> = (props) => {
	const [loading, setLoading] = useState(true)
	const [stocks, setStocks] = useState(null)

	useEffect(() => {
		handleGetStocks()
	}, [])

	const handleGetStocks = async () => {
		setLoading(true)
		try {
			// const response = await axios.get(`${FINANCE_URL}?format=json-cors&key=${FINANCE_KEY}`)
			// const currenciesData = response.data.results.currencies
			const stocksData = require('../../utils/hardcodedData.json').results.stocks
			setStocks(stocksData)
		} catch (e) {
			console.error(e)
		}
		setLoading(false)
	}

	return (
		<div style={ containerStyle }>
			<Typography variant='h4' color='primary' align='center' style={ headerStyle }>
				BOLSA DE VALORES
			</Typography>
			{ loading && <Loader /> }
			{ !loading && (
				<div style={ gridStyle }>
					{ Object.keys(stocks).map((key: string) => (
						<StockBoard stock={ stocks[key] } key={ key } />
					)) }
				</div>
			) }
		</div>
	)
}

export default StocksPage

/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const containerStyle = {
	maxWidth: '900px',
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
	gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
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
