import React, { useEffect, useState } from 'react';
import { FaMobile, FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {

    const [userData, setUserData] = useState({name:"", email:"", phone:"", message:""});

    const userContact = async () => {
        try{
            const res = await fetch("/getData", {
                method : "GET",
                headers : {
                    "Content-Type": "application/json"
                }
            })
             const data = await res.json();
             setUserData({...userData, name:data.name, email:data.email, phone:data.phone});
            
            if(!res.status === 200) {
                throw new Error("user not found")
            }

        }catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        userContact();
    });

    // we are storing data 
    
    const handleContact = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({...userData, [name]:value });
        
    }
    //  Send the data to frontend to backend 👉👉

    const contactFrom = async (e) => {
        e.preventDefault();
        
        const{ name, email, phone, message } = userData;
        
        const res = await fetch("/contact", {
            method : "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name, email, phone, message
            })
        });

        const data = await res.json();

        if(!data) {
            alert("Message not send")
            console.log("Message not send")
        }else{
            alert("Message Send")
            setUserData({...userData, message:""})
        }
    }

    
    return (
        <>
            <section className="contact mt-5 pt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-md-flex d-lg-flex  justify-content-between justify-content-md-between">
                            <div className="contact_info d-flex justify-content-start align-items-center bg-light shadow-sm rounded ps-3 pe-5 py-3 my-3">
                                 <h4><FaMobile/></h4>
                                <div className="contact_info_content ms-3">
                                    <div className="contact_info_title">
                                        <span>Phone</span>
                                    </div>
                                    <div className="contact_info_text">
                                        <span>+8801774147147</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contact_info d-flex justify-content-start align-items-center bg-light shadow-sm rounded ps-3 pe-5 py-3 my-3">
                                 <h4><MdEmail/></h4>
                                <div className="contact_info_content ms-3">
                                    <div className="contact_info_title">
                                        <span>Email</span>
                                    </div>
                                    <div className="contact_info_text">
                                        <span>mdalamin@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contact_info d-flex justify-content-start align-items-center bg-light shadow-sm rounded ps-3 pe-5 py-3 my-3">
                                 <h4><FaAddressCard/></h4>
                                <div className="contact_info_content ms-3">
                                    <div className="contact_info_title">
                                        <span>Address</span>
                                    </div>
                                    <div className="contact_info_text">
                                        <span>Sylhet, Bangladesh</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="contact_form">
                <div className="container mt-sm-3 mt-lg-5">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 ">
                            <div className="contact_form_content bg-light p-3 p-sm-3 p-md-5 p-lg-5 shadow-sm rounded">
                                <div className="contact_form_title mb-3 fw-bold fs-3">
                                    Get In Touch
                                </div>
                                <form method='POST' >
                                    <div className="contact_form_input d-lg-flex justify-content-between">
                                        <input type="text" className='shadow-sm rounded mb-3' autoComplete='off' id="name" name='name' value={userData.name} onChange={handleContact}  placeholder='Your Name' required={true} />
                                        <input type="email" className='shadow-sm rounded mb-3' autoComplete='off' id="email" name='email' value={userData.email} onChange={handleContact} placeholder='Your Email' required={true} />
                                        <input type="number" className='shadow-sm rounded mb-3' autoComplete='off' id="number" name='phone' value={userData.phone} onChange={handleContact} placeholder='Your Phone Number' required={true} />
                                    </div>
                                    <div className="contact_text mt-lg-5 text-center">
                                        <textarea className="contact_form_text w-100 p-3 shadow-sm rounded border-0 mb-3" placeholder='Message' name='message' value={userData.message} onChange={handleContact} cols="10" rows="10"></textarea>
                                    </div>
                                    <div className="contact_form_button mt-3">
                                        <button type='submit' onClick={contactFrom} className='btn px-3 py-2 rounded shadow-sm'>Send Message</button>
                                    </div> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </>
    )
}

export default Contact
