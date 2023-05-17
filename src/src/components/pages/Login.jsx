import React, { useContext } from 'react'
import MyInput from '../UI/inputs/MyInput'
import MyButton from '../UI/buttons/MyButton'
import { AuthContext } from '../context'

const Login = () => {
	const { setIsAuth } = useContext(AuthContext)
	const login = () => {
		setIsAuth(true)
	}
	return (
		<div>
			<div className='container'>
				<h1>Страница Логина</h1>
				<form onSubmit={() => login()}>
					<MyInput placeholder='Login' />
					<MyInput placeholder='Password' />
					<MyButton>Войти</MyButton>
				</form>
			</div>
		</div>
	)
}

export default Login