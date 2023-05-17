import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../UI/buttons/MyButton'
import { AuthContext } from '../context'

const Navbar = () => {
	const { setIsAuth } = useContext(AuthContext)
	const logout = () => {
		setIsAuth(false)
	}
	return (
		<div className="navbar">
			<MyButton onClick={() => logout()}>Выйти</MyButton>
			<Link to='/about'>About</Link>
			<Link to='/posts'>Посты</Link>
		</div>
	)
}

export default Navbar