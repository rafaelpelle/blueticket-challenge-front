export const parseCurrencyName = (currency: string) => {
	switch (currency) {
		case 'Dollar':
			return 'Dólar'
		case 'Euro':
			return 'Euro'
		case 'Pound Sterling':
			return 'Libra Esterlina'
		case 'Argentine Peso':
			return 'Peso Argentino'
	}
}

export const handleMoneyFormat = (value: string | number, currency: string) => {
	if (value === undefined || value === null) {
		value = 0
	}
	const formattedValue = Number(value)
		.toFixed(2)
		.replace('.', ',')
		.replace(/(\d)(?=(\d{3})+\,)/g, '$1.')
	switch (currency) {
		case 'USD':
			return 'US$ ' + formattedValue
		case 'EUR':
			return formattedValue + ' €'
		default:
			return 'R$ ' + formattedValue
	}
}

export function handleCPF(cpf: string): string {
	cpf = removeNonNumericCharacters(cpf)
	const lastDigitsList = cpf.match(/..$/)
	if (!lastDigitsList) {
		return cpf
	}
	const lastDigits = lastDigitsList[0]
	return cpf.replace(/..$/, '-' + lastDigits).replace(/(\d)(?=(\d{3})+\-)/g, '$1.')
}

export function handleCNPJ(v: string): string {
	v = v.replace(/\D/g, '')
	v = v.replace(/^(\d{2})(\d)/, '$1.$2')
	v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
	v = v.replace(/\.(\d{3})(\d)/, '.$1/$2')
	return v.replace(/(\d{4})(\d)/, '$1-$2')
}

export function removeNonNumericCharacters(text: string) {
	return text.replace(/\D/g, '')
}

export function removeWhiteSpaces(text: string): string {
	return text.replace(/\s/g, '')
}

export const valueToPercentage = (value: number) => {
	return value ? `${value.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}%` : '0,00%'
}

export function removeNonAlphaNumericCharacters(text: string) {
	return text.replace(/[!"\[\]{}%^&*:@~#';/.<>\\|`]/g, '')
}

export function handleCellphone(v: string): string {
	v = v.replace(/\D/g, '')
	v = v.replace(/^(\d{2})(\d)/g, '($1) $2')
	v = v.replace(/(\d)(\d{4})$/, '$1-$2')
	return v
}

export function handleZipCode(zipCode: string): string {
	zipCode = zipCode.replace(/\D/g, '')
	return zipCode.replace(/(\d)(\d{3})$/, '$1-$2')
}

export function removeLeftZeros(text: string) {
	return text !== '' ? Number(text).toString() : ''
}

export const handleDateFormat = (timestamp: string | Date) => {
	const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
	return new Date(timestamp).toLocaleDateString('pt-BR', options)
}
