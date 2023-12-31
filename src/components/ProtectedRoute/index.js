import Cookies from 'js-cookie'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')
  console.log(token)
  if (token === undefined) {
    return <Redirect to="/" />
  }
  return <Route {...props} />
}

export default ProtectedRoute