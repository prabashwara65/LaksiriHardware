import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import registerCss from './register.module.css'


function Signup() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPass] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()


        axios.post('http://localhost:3001/register/register', { name, email, phone, password })
            .then(res => {
                alert("creted");
                navigate('/Login')

            })
            .catch(err => console.log(err))

    }

    return (


        <div className={registerCss.body}>
            {/* get boxicons icons */}
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel="stylesheet" />

            <div class={registerCss.wrapper}>
                <form onSubmit={handleSubmit} >

                    <h1>Register</h1>

                    {/* {registerCss.input-box} */}
                    <div class={registerCss.inputBox}>
                        <input type="text" placeholder="Name" id='name' required
                            onChange={(e) => setName(e.target.value)} />
                        {/* <i class='bx bxs-user-circle'></i> */}

                    </div>

                    <div class={registerCss.inputBox}>
                        <input type="email" placeholder="Email" id='email' required
                            onChange={(e) => setEmail(e.target.value)} />
                        {/* <i class='bx bxs-user-circle'></i> */}

                    </div>


                    <div class={registerCss.inputBox}>
                        <input type="number" placeholder="Phone" id='phone' required
                            onChange={(e) => setPhone(e.target.value)} />
                        {/* <i class='bx bxs-lock-alt'></i> */}

                    </div>

                    <div class={registerCss.inputBox}>
                        <input type="password" placeholder="Password" id='pass' required
                            onChange={(e) => setPass(e.target.value)} />
                        {/* <i class='bx bxs-lock-alt'></i> */}

                    </div>


                    <div className={registerCss.buttonContainer}>
                        <button type="submit" className={registerCss.btn}>Register</button>

                        <button className={registerCss.btn}>
                            {/* <Link to="/Login">Register</Link> */}
                            <a href='/Login'>Login</a>
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )

}

export default Signup;