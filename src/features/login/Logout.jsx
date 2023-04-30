import {useDispatch} from 'react-redux';
import {logout} from './loginSlice';
import Style from './logout.module.css';

const Logout = () => {
    const dispatch = useDispatch();
  return (
    <>
        <button id="logoutBtn" onClick={() => dispatch(logout())}
            className={Style.logoutBtn}>
            Logout
        </button>
    </>
  )
}

export default Logout