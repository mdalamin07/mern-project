import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import signup from "../images/signup.svg";
import { MdAccountCircle, MdEmail, MdPhoneInTalk, MdSlideshow, MdLock } from "react-icons/md";

const SignUp = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name:"", email:"", phone:"", work:"", password:"", cpassword:""
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value})
    }

    const PostData = async (e) => {

        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            }),
        });

        const data = await res.json();

        if(res.status === 422 || !data) {
            window.alert("Registration Failed");
            console.log("Registration Failed");
        }else{
            window.alert("Registration Successful");
            console.log("Registration Successful");
            navigate("/login")
        }
    }

    return (
        <>
            <section className='signup shadow-sm rounded pt-5 mt-5'>
                <div className="container">
                    <div className="row signup_content p-md-3 p-lg-5 bg-light shadow-sm rounded-2">
                        <div className="col-md-6 order-2 order-sm-2 order-md-1 signup_form">
                            <h2 className='form_title'>Sign Up</h2>
                            <form method='POST'>
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <MdAccountCircle/>
                                    </label>
                                    <input type="text" 
                                        name='name' 
                                        id='name' 
                                        autoComplete='off'
                                        value={user.name}
                                        onChange={handleInputs} 
                                        placeholder='Your Name' 
                                        className='my_input' 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <MdEmail/>
                                    </label>
                                    <input type="email" 
                                        name='email' 
                                        id='email' 
                                        autoComplete='off'
                                        value={user.email}
                                        onChange={handleInputs} 
                                        placeholder='Your Email' 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <MdPhoneInTalk/>
                                    </label>
                                    <input type="number" 
                                        name='phone' 
                                        id='phone' 
                                        autoComplete='off'
                                        value={user.phone}
                                        onChange={handleInputs} 
                                        placeholder='Your Phone' 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work">
                                        <MdSlideshow/>
                                    </label>
                                    <input type="text" 
                                        name='work' 
                                        id='work' 
                                        autoComplete='off'
                                        value={user.work}
                                        onChange={handleInputs}
                                        placeholder='Your Profession' 
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
                                        value={user.password}
                                        onChange={handleInputs} 
                                        placeholder='Your Password' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <MdLock/>
                                    </label>
                                    <input type="password" 
                                        name='cpassword' 
                                        id='cpassword' 
                                        autoComplete='off'
                                        value={user.cpassword}
                                        onChange={handleInputs} 
                                        placeholder='Confirm Your Password' 
                                    />
                                </div>
                                <div className="form-group form_button">
                                    <input type="submit" 
                                        name='signup' 
                                        id='signup' 
                                        className='form_submit shadow rounded' 
                                        value="register"
                                        onClick={PostData}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 order-1 order-sm-1 order-md-2 signup_image">
                            <figure>
                                <img src={signup} alt="signup_image" className='img-fluid' width={450} />
                            </figure>
                            <Link to="/login" className='signup_img_caption'> I am already Register </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp
