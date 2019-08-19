export const setStocksData = (stocks: any) => ({
	type: 'STOCKS_DATA_OBTAINED',
	payload: stocks,
})

export const setCurrenciesData = (currencies: any) => ({
	type: 'CURRENCIES_DATA_OBTAINED',
	payload: currencies,
})

export const setBitcoinData = (bitcoin: any) => ({
	type: 'BITCOIN_DATA_OBTAINED',
	payload: bitcoin,
})

export const setHistoryData = (historyData: any) => ({
	type: 'HISTORY_DATA_OBTAINED',
	payload: historyData,
})

export const clearFinanceData = () => ({
	type: 'FINANCE_DATA_CLEARED',
})
