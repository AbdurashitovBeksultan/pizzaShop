import React from 'react'
import Header from './header/Header'
import { Routes, Route } from 'react-router-dom'
import Footer from './footer/Footer'
import ПицаPage from '../pages/ПицаPage'
import ЗакускиPage from '../pages/ЗакускиPage'
import СалатPage from '../pages/СалатPage'
import СупыPage from '../pages/СупыPage'
import ГорячийPage from '../pages/ГорячийPage'

const Layout = () => {
	return (
		<div>
			<Header />
			<main>
				

				<Routes>
					<Route path='/' element={<ПицаPage />} />
					<Route path='/закуски' element={<ЗакускиPage />} />
					<Route path='/салаты' element={<СалатPage />} />
					<Route path='/супы' element={<СупыPage/>} />
					<Route path='/Горячий' element={<ГорячийPage/>} />
				</Routes>
				
			</main>
			<Footer />
		</div>
	)
}

export default Layout
