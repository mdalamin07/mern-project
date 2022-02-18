import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import login from "../images/login.svg";
import { MdEmail, MdLock } from "react-icons/md";
import { UserContext } from '../App';

const Login = () => {

    const { dispatch } = useContext(UserContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const PostUser = async (e) => {
        e.preventDefault();

        const res = await fetch("/signin", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await res.json();
        console.log(data)

        if(res.status === 400 || !data) {
            window.alert("Invalid Credientials");
            console.log("Invalid Credientials");
        }else{
            dispatch({type:"USER", payload:true})
            window.alert("Login Successful");
            console.log("Login Successful");

            navigate("/")
        }
    }

    return (
        <>
            <section className='login pt-5 mt-5'>
                <div className="container ">
                    <div className="signup_content row p-2 py-md-5 p-lg-5 bg-light shadow-sm rounded-2">
                        <div className="col-md-6 order-sm-0 order-md-0 login_image">
                            <figure>
                                <img src={login} alt="login_image" className='img-fluid ' width={350} />
                            </figure>
                            <Link to="/signup" className='login_img_caption'> Create an Account </Link>
                        </div>
                        <div className="col-md-6 order-sm-1 order-md-1 signup_form mt-3">
                            <h2 className='form_title'>Login</h2>
                            <form method='POST'>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <MdEmail/>
                                    </label>
                                    <input type="email" 
                                        name='email'
                                        id='email' 
                                        autoComplete='off'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} 
                                        placeholder='Your Email' 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <MdLock/>
                                    </label>
                                    <input type="password" 
                                        name='password'
                                         id='password'
                                         autoComplete='off'
                                         value={password}
                                         onChange={(e) => setPassword(e.target.value)} 
                                         placeholder='Your Password' 
                                    />
                                </div>
                                <div className="form-group form_button mb-sm-3">
                                    <input type="submit" 
                                        name='signin' 
                                        id='signin' 
                                        className='form_submit rounded shadow' 
                                        value="login"
                                        onClick={PostUser} 
                                    />
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
