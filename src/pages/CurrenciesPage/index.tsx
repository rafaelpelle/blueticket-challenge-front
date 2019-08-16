import * as React from 'react'
import { axiosInstance, FINANCE_KEY } from '../../utils/httpClient'

const { useState, useEffect } = React

const CurrenciesPage: React.FC<Props> = (props) => {
	const [loading, setLoading] = useState(false)
	const [currencies, setCurrencies] = useState(null)

	useEffect(() => {
		handleGetCurrencies()
	}, [])

	const handleGetCurrencies = async () => {
		setLoading(true)
		try {
			const response = await axiosInstance.get(`/quotations?key=${FINANCE_KEY}`)
			console.log(response.data)
		} catch (e) {
			console.error(e)
		}
	}

	return <div>Currencies</div>
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
