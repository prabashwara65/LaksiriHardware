import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import loginCss from './login.module.css';
import { useDispatch } from 'react-redux';
import { setUser } from '../ReduxTool/userSlice';

function Login() {

    const [email, setEmail] = useState();
    const [password, setPass] = useState();
    const navigate = useNavigate();

    const dispatch = useDispatch()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        
        // dispatch(setUser({
        //      email : email,
        //      logedin: true
        //     }))

        axios.post('http://localhost:3001/login', { email, password })
            .then(res => {
                console.log("login : " + res.data)
                if (res.data.Status === "Success") {
                    
                    if (res.data.role === "admin") {
                      

                        //set user name from axios post req by login and 
                        //pass to userSlice and stored in localstorage
                        //this technique use because login page not have name field
                        dispatch(setUser({
                            
                            name : res.data.name,
                            
                           }))
                        navigate('/Dashboard')
                        

                    } else {

                        dispatch(setUser({
                              name : res.data.name,
                            
                           }))
 

                        navigate('/')
                    }
                }
            })
            .catch(err => console.log(err))

    }


    return (

        
        <div className={loginCss.body}>
            {/* get boxicons icons
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel="stylesheet"/>
         */}
        <div class={loginCss.wrapper}>
                <form onSubmit={handleSubmit} >
                

                    <h1>Login</h1>

                    {/* {loginCss.input-box} */}
                    <div class={loginCss.inputBox}>
                        <input type="text" placeholder="Username" id='email' required
                        onChange={(e) => setEmail(e.target.value)}/>
                        {/* <i class='bx bxs-user-circle'></i> */}

                    </div> 

                    <div class={loginCss.inputBox}>
                        <input type="text" placeholder="Password" id='pass'required
                        onChange={(e) => setPass(e.target.value)}/>
                        {/* <i class='bx bxs-lock-alt'></i> */}

                    </div> 

                    <button type="submit" className={loginCss.btn}>Login</button>

                    <div className={loginCss.registerLink}>

                        <p>Don't Have an Account <Link to="/register">Register</Link></p>
                    </div> 
                    

                </form>
        </div> 
   
        </div>

          

       
    )



}

export default Login;