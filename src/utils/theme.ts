import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

export const pageHeaderHeight = '75px'
export const isMobile = window.innerWidth < 800
export const toastTimeout = 3000
export const moneyGreen = '#4caf50'

export const appTheme = createMuiTheme({
	// palette: {
	// 	primary: {
	// 		main: customTheme.colors.primaryColor,
	// 	},
	// 	secondary: {
	// 		main: customTheme.colors.secondaryColor,
	// 	},
	// },
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
			paperScrollPaper: {
				maxHeight: 'calc(100% - 50px)',
				margin: '25px',
			},
			container: {
				height: `calc(100% - ${pageHeaderHeight})`,
				marginTop: pageHeaderHeight,
			},
			paperFullScreen: {
				top: '32px',
				marginTop: '-' + pageHeaderHeight,
				maxHeight: `100%`,
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
