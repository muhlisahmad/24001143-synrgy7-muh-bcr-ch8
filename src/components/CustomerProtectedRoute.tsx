import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const CustomerProtectedRoute = () => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export default CustomerProtectedRoute
