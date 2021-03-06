import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material'

import App from './App'

import './style/presett.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<StyledEngineProvider injectFirst>
		<App />
	</StyledEngineProvider>
)
