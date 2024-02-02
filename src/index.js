import React from 'react'
import ReactDOM from 'react-dom/client'
import 'keen-slider/keen-slider.min.css'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
)
