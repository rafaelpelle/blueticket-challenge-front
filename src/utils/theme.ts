import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

export const pageHeaderHeight = '75px'
export const isMobile = window.innerWidth < 800
export const toastTimeout = 3000
export const moneyGreen = '#4caf50'
export const primaryColor = '#7159C1'
export const secondaryColor = '#FFFFFF'

export const appTheme = createMuiTheme({
	palette: {
		primary: {
			main: primaryColor,
		},
		secondary: {
			main: secondaryColor,
		},
	},
	typography: {
		fontFamily: [
			'Montserrat',
			'"Helvetica Neue"',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	overrides: {
		MuiSnackbarContent: {
			message: {
				fontWeight: 'bold',
			},
		},
		MuiDialog: {
			root: {
				padding: 0,
			},
			paper: {
				margin: '0 auto',
			},
			paperScrollPaper: {
				maxHeight: 'calc(100% - 50px)',
			},
			paperFullWidth: {
				width: '100%',
			},
			container: {
				height: `calc(100% - ${pageHeaderHeight})`,
				marginTop: pageHeaderHeight,
			},
		},
		MuiCircularProgress: {
			root: {
				display: 'block',
			},
		},
		MuiTab: {
			root: {
				fontWeight: 600,
			},
			textColorPrimary: {
				color: 'rgba(255, 255, 255, 0.6)',
			},
		},
		MuiButton: {
			root: {
				fontWeight: 600,
			},
		},
		MuiFormLabel: {
			root: {
				fontWeight: 500,
				fontSize: '0.9em',
				textTransform: 'uppercase',
				zIndex: 1,
				'&$focused': {
					fontSize: '1em',
				},
				'&$error': {
					fontSize: '1em',
				},
			},
		},
		MuiFormHelperText: {
			root: {
				margin: '15px',
				fontWeight: 600,
			},
		},
		MuiInput: {
			input: {
				fontWeight: 500,
				fontSize: '0.9em',
				padding: '10px 15px',
				backgroundColor: '#ffffff',
			},
		},
		MuiDrawer: {
			paperAnchorLeft: {
				marginTop: pageHeaderHeight,
			},
			paperAnchorTop: {
				marginTop: pageHeaderHeight,
			},
		},
		MuiAppBar: {
			positionFixed: {
				// The MuiDrawer has zIndex 1300.
				zIndex: 1301,
				position: 'sticky',
			},
		},
	},
})
