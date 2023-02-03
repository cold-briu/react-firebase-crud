import { createContext } from "react";

export const authContext = createContext()

export const AuthProvider = () => {
	const [isAuth, setisAuth] = useState()
	const [isAuth, setisAuth] = useState()
	const [isAuth, setisAuth] = useState()
	const [isAuth, setisAuth] = useState()


	const logout = () => { }

	const state = { isAuth }
	const dispatchers = { logout }

	return (<authContext.Provider state={state}>
	</>)

}