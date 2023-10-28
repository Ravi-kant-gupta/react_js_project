import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { selectMethod, showSidetab } from "../../reduxFolder/countersclice";
// withRouter
import "./index.css";

const Header=()=>{
    // const [value,setValue]=useState(false)
    const selectedTab=useSelector(state=>state.dataList.selectedTabItem)
    const showTab=useSelector(state=>state.dataList.isTab)
    const history=useHistory()
    const dispatch=useDispatch()
    const onSelectTab=(value)=>{
        dispatch(selectMethod(value))
    }
    const showLeftTab=(value)=>{
        dispatch(showSidetab(value))
    }

    const logoutMethod=()=>{
        dispatch(showSidetab(false))
        dispatch(selectMethod("analytics"))
        Cookies.remove("jwt_token")
        history.replace("/")
    }

    const sidebarTab=(
        
        <ul className='tab-list'>
            <li className={selectedTab==="analytics"?"selected-tab header-tab":"header-tab"} onClick={()=>onSelectTab("analytics")}>
                <Link to="/analytics" className="nav-link">
                    Analytics
                </Link>
            </li>
            <li className={selectedTab==="data"?"selected-tab header-tab":"header-tab"} onClick={()=>onSelectTab("data")}>
                <Link to="/data" className="nav-link">
                    Data
              </Link>
            </li>
            <li className="logout" onClick={()=>logoutMethod()}>
                {/* <Link to="/data" className="nav-link">
                    Data
              </Link> */}
              LogOut
            </li>
        </ul>
        
    )

    return(
    <nav className='nav-bar'>
        <div className='menu-bar'>
            {showTab===true?<div className='icon-size'><FontAwesomeIcon icon={faXmark}  onClick={()=>showLeftTab(false)} className='icon'/></div>:
            <FontAwesomeIcon icon={faBars} onClick={()=>showLeftTab(true)} className='icon'/>}
                {showTab&&sidebarTab}
        </div>
        <h1>DashBoard</h1>
    </nav>
    )
}

export default Header