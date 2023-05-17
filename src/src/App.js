import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './components/pages/router/routes';
import Navbar from './components/pages/Navbar';
import AppRouter from './components/pages/router/AppRouter';
import { AuthContext } from './components/context';


function App() {
	const [isAuth, setIsAuth] = useState(false)



	return (
		<div className="App">
			<div className='container'>
				<AuthContext.Provider value={{
					setIsAuth, isAuth
				}}>
					<BrowserRouter>
						<Navbar />
						<AppRouter />
					</BrowserRouter>
				</AuthContext.Provider>
			</div>
		</div>
	);
}

export default App;
