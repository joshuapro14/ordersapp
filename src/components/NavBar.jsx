import Style from './navBar.module.css';
import {useSelector} from 'react-redux';
import {getIsLoggedIn} from '../features/login/loginSlice';
import Logout from '../features/login/Logout';

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <nav className={Style.nav}>
            <h2>Orders App</h2>
            <ul>
                {isLoggedIn && <li><Logout /></li>}
            </ul>
        </nav>
    )
}

export default NavBar