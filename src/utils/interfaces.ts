/////////////////////////////////////////////////////////////////
/////////////////////////// REDUCERS ////////////////////////////
/////////////////////////////////////////////////////////////////
export interface RootReducerInterface {
	UserReducer: UserReducerInterface
	DialogReducer: DialogReducerInterface
	StoreReducer: StoreReducerInterface
}

export interface UserReducerInterface {
	user: UserInterface
}

export interface DialogReducerInterface {
	drawerIsOpen: boolean
	updateDialogIsOpen: boolean
	redirectDialogIsOpen: boolean
	couponDialogIsOpen: boolean
}

export interface StoreReducerInterface {
	selectedCategory: StoreCategory
	selectedStore: StoreInterface
}
/////////////////////////////////////////////////////////////////
/////////////////////////// REQUESTS ////////////////////////////
/////////////////////////////////////////////////////////////////
export interface DeeplinkPayload {
	storeId: string
	url: string
}
export interface ProductDeeplinkPayload extends DeeplinkPayload {
	scrappingId: string
}
export interface UserPayload {
	// GETMORE USER:
	// email: string
	// password: string
	// phoneInfo: PhoneInfoInterface
	//
	// NEXT USER:
	cpf: string
	name: string
	email: string
	agency: string
	account: string
	password: string
}
/////////////////////////////////////////////////////////////////
///////////////////////// GETMORE TYPES /////////////////////////
/////////////////////////////////////////////////////////////////
export interface ProductMatchInterface {
	products: ProductInterface[]
	matchId: string
}

export interface ProductInterface {
	_id: string
	storeID: string
	storeId: string
	name: string
	store: string // nome da loja
	tkbRatio: number
	description: string
	salesPrice: number // preço à vista
	installmentsPrice: {
		numInstallments: number // número de parcelas
		installmentPrice: number // valor da parcela
	}
	priceHistory: PriceHistoryInterface
	datasheet: string
	image: string
	category: string
	timeStamp: string
	visited: boolean
	url: string
	rating: number
	numberOfReviews: number
}

export type HistoryPeriod = 'OneWeek' | 'OneMonth' | 'ThreeMonths' | 'SixMonths' | 'TwelveMonths'
export type PriceHistoryInterface = PriceSampleInterface[]
export interface PriceSampleInterface {
	price: number
	date: string
}

export type SortOption = 'none' | 'name' | 'takeback'
export interface StoreInterface {
	id: string
	alias: string
	name?: string
	tkbRatio: number | null
	logoUrl: string | null
	url?: string | null
	totalCoupons?: number | null
}

export interface CouponInterface {
	id: string
	storeId: string
	expiryDate: DateInterface
	code: string
	description: string
	discountRatio: number
}

export interface UserInterface {
	name?: string
	email?: string
	emailvalid?: boolean
	phoneInfo?: PhoneInfoInterface
	locationInfo?: LocationInfoInterface
	cpf?: string
	imageURL: string
	birthDate?: DateInterface
	birthdate?: DateInterface
	paypalEmail?: string
	readTutorial?: boolean
	agency?: string
	account?: string
}

export type WithdrawalStatus = 'withdrawing' | 'withdrawn-error' | 'withdrawn' | 'all'
export type WithdrawalType = 'account-deposit' | 'voucher'
export interface WithdrawalInterface {
	id: string
	userId: string
	type: WithdrawalType
	withdrawBatch?: string
	currency: Currency
	status: WithdrawalStatus
	tkbValue: number
	dollarQuotation?: number
	withdrawalValue: number
	timestamp: string
}

export type TakebackStatus =
	| 'awaiting-confirmation'
	| 'awaiting-the-store'
	| 'canceled'
	| 'withdrawn'
	| 'all'
export interface TakebackInterface {
	tkbStatus: TakebackStatus
	currency: Currency
	purchaseOriginalValue: number
	tkbRatio: number
	alias: string
	timestamp: Date
}

export interface BalanceInterface {
	availableBalance: Balance[]
	processingBalance: Balance[]
	withdrawingBalance: Balance[]
	withdrawnBalance: Balance[]
}

export interface Balance {
	currency: Currency
	tkbValue: number
}

export interface PhoneInfoInterface {
	region: string
	number: string
}

export interface LocationInfoInterface {
	street?: string
	number?: string
	complement?: string
	zipCode?: string
	district?: string
	city?: string
	state?: string
}

export interface DateInterface {
	day: number | string
	month: number | string
	year: number | string
}

export interface CategoryInterface {
	name: StoreCategory
	vector: string
	viewBox: string
}

export type Currency = 'BRL' | 'USD' | 'EUR'
export type StoreCategory =
	| 'Automotivos'
	| 'Bebidas'
	| 'Beleza e Bem estar'
	| 'Calçados'
	| 'Educação'
	| 'Eletroeletrônicos'
	| 'Esporte e Lazer'
	| 'Farmácia e Saúde'
	| 'Informática'
	| 'Joalheria e Ótica'
	| 'Livraria'
	| 'Móveis e Decoração'
	| 'PetShop'
	| 'Supermercados'
	| 'Turismo e Viagem'
	| 'Vestuário'
	| 'Todas'

export interface FaqItemInterface {
	id: number | string
	question: string
	answer: string
}
/////////////////////////////////////////////////////////////////
//////////////////////// ACTION CREATORS ////////////////////////
/////////////////////////////////////////////////////////////////
export type OpenRedirectDialogInterface = (
	storeInfo: StoreInterface
) => { type: string; payload: StoreInterface }
export type OpenDrawerInterface = () => { type: string }
export type CloseDrawerInterface = () => { type: string }
export type OpenDialogInterface = () => { type: string }
export type CloseDialogInterface = () => { type: string }
export type UserLoginInterface = (userToken: string) => (dispatch: any, getState: any) => any
export type UserLogoutInterface = () => { type: string }
