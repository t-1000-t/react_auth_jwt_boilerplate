import { useContext, useDebugValue } from 'react'
import AuthContext from '../context/AuthProvider'

const useAuth = () => {
  const useContext1 = useContext(AuthContext) as any
  const { auth } = useContext1

  useDebugValue(auth, (auth: any) => (auth?.user ? 'Logged In' : 'Logged Out'))

  return useContext(AuthContext)
}

export default useAuth
