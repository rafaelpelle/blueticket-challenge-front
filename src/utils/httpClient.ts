import axios from 'axios'

export const FINANCE_URL = process.env.FINANCE_URL || 'https://api.hgbrasil.com/finance/'
export const FINANCE_KEY = process.env.FINANCE_KEY || 'e503cdf6'

export const axiosInstance = axios.create({
	baseURL: FINANCE_URL,
	timeout: 10000,
	headers: { 'Access-Control-Allow-Origin': '*' },
})
