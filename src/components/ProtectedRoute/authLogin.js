import Cookies from 'js-cookie'
import { Redirect, Route } from 'react-router-dom'

const LoginProtectedRoute = props => {
  const token = Cookies.get('jwt_token')
  console.log(token)
  if (token !== undefined) {
    return <Redirect to="/analytics" />
  }
  return <Route {...props} />
}

export default LoginProtectedRoute