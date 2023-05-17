import { Navigate } from "react-router-dom";
import About from "../About";
import Login from "../Login";
import PageById from "../PageById";
import Posts from "../Posts";

export const privateRoutes = [
	{ path: '/posts', element: <Posts /> },
	{ path: '/posts/:id', element: <PageById /> },
	{ path: '/about', element: <About /> },
	{ path: '*', element: <Navigate to='/posts' /> },
]
export const publicRoutes = [
	{ path: '/login', element: <Login /> },
	{ path: '*', element: <Navigate to='/login' /> },
]