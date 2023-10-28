import { Route, Switch } from 'react-router-dom';
import './App.css';
import Analytics from "./components/Analytics";
import Data from "./components/Data";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import LoginProtectedRoute from "./components/ProtectedRoute/authLogin.js";
import ProtectedRoute from "./components/ProtectedRoute/index.js";
const App=()=> {
  return (
    <Switch>
    <LoginProtectedRoute exact path="/" component={Login}/>
    <ProtectedRoute exact path="/analytics" component={Analytics}/>
    <ProtectedRoute exact path="/data" component={Data}/>
      <Route path="/notfound" component={NotFound}/>
    </Switch>
  );
}

export default App;
