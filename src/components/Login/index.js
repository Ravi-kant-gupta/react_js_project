import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { errorMetthod, typeOfPassword, username, userpassword } from "../../reduxFolder/countersclice";
import "./index.css";


const Login=()=>{
    const history=useHistory()
    const userInputName=useSelector(state=>state.dataList.name)
    const userInputPassword=useSelector(state=>state.dataList.password)
    const passwordtype=useSelector(state=>state.dataList.passwordType)
    const isError=useSelector(state=>state.dataList.showError)
    const dispatch=useDispatch();

    const userName=(event)=>{
        // console.log(event.target.value)
        dispatch(username(event.target.value))
    }
    const userPassword=(event)=>{
        // console.log(event.target.value)
        dispatch(userpassword(event.target.value))
    }

    const submitForm=async (event)=>{
        event.preventDefault()
        // const {history}=this.props
        try {
            if(userInputName===""||userInputPassword===""){
                dispatch(errorMetthod(true))
            }else{
                dispatch(errorMetthod(false))
            const data={userInputName,
                userInputPassword}
                // console.log(data)
            const options={
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': "application/json"},
            }
            const res=await (await fetch("http://localhost:4000/login",options)).json()
            // console.log(res.jwt_token)
            dispatch(username(""))
            dispatch(userpassword(""))
            if(res.jwt_token!==null){
                Cookies.set('jwt_token', res.jwt_token, { expires: 30 });
                history.push("/analytics")
            }}
            // console.log( `TOKEN=== ${Cookies.get('jwt_token')}`)
        } catch (error) {
            console.log("ERROR")
        }

    }
    const showPassword=(text)=>{
        dispatch(typeOfPassword(text))
    }

    return(
    <div className="bg-container">

        <div className="main-container">
          
            <form className="input-field-container" onSubmit={submitForm}>
                <h1>Sign in Now</h1>
                <input type="text" placeholder="Your Name" value={userInputName} className="name-input"  onChange={userName}/>
                <br/>
                <div className="password-input">
                <input type={passwordtype} placeholder="Your password" value={userInputPassword}   onChange={userPassword} autoComplete="current-password"/>
                <span>{passwordtype==="password"? <FontAwesomeIcon icon={faEye} onClick={()=>showPassword("text")}/>:<FontAwesomeIcon icon={faEyeSlash} onClick={()=>showPassword("password")}/>}</span>
                </div>
                {/* <br/> */}
                
                <button type="submit" className="click-btn sign-color">Sign In</button>
                {isError&&<p className='error-message'>Please fill Username & Password*</p>}
               
            </form>



    </div>
</div>
        
    )
}
export default Login