import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'
import { AuthContext } from '../../context'

const AppRouter = () => {

	const { isAuth } = useContext(AuthContext)
	return (
		<Routes>
			{isAuth
				? privateRoutes.map(r =>
					<Route key={r.path} path={r.path} element={r.element} />
				)
				: publicRoutes.map(r =>
					<Route key={r.path} path={r.path} element={r.element} />
				)
			}

		</Routes>
	)
}

export default AppRouter