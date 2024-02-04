import React from "react";
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
    from 'react-icons/bs'


import { useEffect, useState  } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearUser } from '../ReduxTool/userSlice';

function Header() {
    const user = useSelector((state) => state.user.user)

    if (!user) {
        return <h2>No user informations</h2>
    }

    const navigate = useNavigate();

    //variable for success msg
    const [suc, setSuc] = useState();

    axios.defaults.withCredentials = true;



    //Protected routes
    useEffect(() => {
        axios.get('http://localhost:3001/dashboard')
            .then(res => {
                if (res.data === "Success") {

                    setSuc(": Authorize Success !")
                    console.log(res.data)

                } else {
                    navigate('/')
                    //console.log(err)

                    setSuc("Not Succeeded !")
                }
            })
            .catch(err => console.log(err))
    }, [])


    const dispatch = useDispatch();

    const handleLogout = () => {
        axios.get('http://localhost:3001/logout')
            .then(res => {
                if (res.data.Status) {
                    navigate('/login')
                }
            })
        dispatch(clearUser());
        navigate('/login'); // Redirect to the login page after logout
    };
    return (


        <header className="header">
            <div className="menu-icon">
                <BsJustify className="icon" />
            </div>

            <div className="header-left">
                <BsSearch className="icon" />

            </div>

            <div className="header-right">
                {/* <BsFillBellFill className="icon"/>
                <BsFillEnvelopeFill className="icon"/> */}

                <BsPersonCircle className="iconHeader" />
                <span className="span">Welcome {user.name}</span>
 
                <span className="span">
                    <button onClick={handleLogout} className="btn btn-primary">
                        Logout
                    </button>
                </span>

                <h6>{suc}</h6>

            </div>

        </header>
    )
}
export default Header;