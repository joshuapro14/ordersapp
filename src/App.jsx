
import Orders from './features/orders/orders';
import Login from './features/login/Login';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {useSelector} from 'react-redux';
import {getIsLoggedIn} from './features/login/loginSlice';
import NavBar from './components/NavBar';
import CustomRoute from './routes/CustomRoute';


function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/"
            exact
            element={
              <CustomRoute condition={isLoggedIn} onFailNavigateTo="/login">
                <Orders />
              </CustomRoute>
            }
        />
        <Route path="/login"
            exact
            element={
              <CustomRoute condition={!isLoggedIn} onFailNavigateTo="/">
                <Login />
              </CustomRoute>
            }
        />
      </Routes>          
    </BrowserRouter>
  )
}

export default App
