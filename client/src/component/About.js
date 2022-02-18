import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Image from "../images/client.jpg";

const About = () => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try{
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
            });
            const data = await res.json();
            setUserData(data)

            if(!res.status === 200 ) {
                throw new Error("User Not Found")
            }

        }catch (error) {
            console.log(error);
            navigate("/login");
        }
    }
    // const profileImage = (e) => {
    //     e.preventDefault();
    // }
    useEffect(() => {
      callAboutPage();
    });    
    return (
        <>
            <section className="about mt-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-1 bg-light shadow-sm rounded p-md-5 mx-auto">
                            <form method="GET">
                                <div className="row mb-3">
                                    <div className="col-6 col-sm-6 col-md-4">
                                        <img src={Image}  alt="profile_image" className='img-fluid profile_image' />
                                    </div>
                                    <div className="col-6 col-sm-6 col-md-8 pt-3">
                                        <div className="profile_head">
                                            <h5 className='fw-bold'>{userData.name}</h5>
                                            <h6 className='fw-bold'>{userData.work}</h6>
                                            <p className='profile_rating mt-3 mb-md-5'>RANKING : <span>1/10</span></p>
                                        </div>
                                        {/* <input type="submit" onClick={profileImage} className='profile_edit_btn'  /> */}
                                    </div>
                                </div>
                                <div className="row">
                                    {/* Left side url */}
                                    <div className="col-md-4 order-2 order-sm-2 order-md-1">
                                        <div className="profile_work d-flex flex-column">
                                            <h6 className='mt-3 fw-bold'>WORK LINK</h6>
                                            <Link to="https://facebook.com/md.alamin7500" target="_blank" className='text-decoration-none'>Facebook</Link>
                                            <Link to="https://twitter.com/md_alamin75" target="_blank" className='text-decoration-none'>Twitter</Link>
                                            <Link to="https://www.linkedin.com/in/mdalamin75/" target="_blank" className='text-decoration-none'>Linkedin</Link>
                                            <Link to="https://www.instagram.com/md_alamin75/" target="_blank" className='text-decoration-none'>Instagram</Link>
                                        </div>
                                    </div>
                                    {/* Right side data toogle */}
                                    <div className="col-md-8 ps-4 about_info order-1 order-sm-1 order-md-2">
                                        <ul className="nav nav-pills mb-3">
                                            <li className="nav-item">
                                                <Link className="nav-link active" data-bs-toggle="tab" to='#home'>About</Link>
                                            </li>
                                            <li className="nav-item nav_pills">
                                                <Link className="nav-link ms-5 ms-sm-5" data-bs-toggle="tab" to='#profile'>Timeline</Link>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id='myTab'>
                                            <div id="home" className="tab-pane fade active show">
                                                <div className="row">
                                                    <div className="col-4 col-sm-4 col-md-6">
                                                        <label>User ID</label>
                                                    </div>
                                                    <div className="col-8 col-sm-8 col-md-6">
                                                        <p>{userData._id}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4 col-sm-4 col-md-6">
                                                        <label>Name</label>
                                                    </div>
                                                    <div className="col-8 col-sm-8 col-md-6">
                                                        <p>{userData.name}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4 col-sm-4 col-md-6">
                                                        <label>Email</label>
                                                    </div>
                                                    <div className="col-8 col-sm-8 col-md-6">
                                                        <p>{userData.email}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4 col-sm-4 col-md-6">
                                                        <label>Phone</label>
                                                    </div>
                                                    <div className="col-8 col-sm-8 col-md-6">
                                                        <p>{userData.phone}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4 col-sm-4 col-md-6">
                                                        <label>Profession</label>
                                                    </div>
                                                    <div className="col-8 col-sm-8 col-md-6">
                                                        <p>{userData.work}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Timeline Tab */}
                                            <div id="profile" className="tab-pane fade">
                                                <div className="row">
                                                    <div className="col-6 col-sm-6 col-md-6">
                                                        <label>Experience</label>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-6">
                                                        <p>Expart</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 col-sm-6 col-md-6">
                                                        <label>Hourly Rate</label>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-6">
                                                        <p>10$/hr</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 col-sm-6 col-md-6">
                                                        <label>Total Project</label>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-6">
                                                        <p>25</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 col-sm-6 col-md-6">
                                                        <label>Phone</label>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-6">
                                                        <p>{userData.phone}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 col-sm-6 col-md-6">
                                                        <label>Profession</label>
                                                    </div>
                                                    <div className="col-6 col-sm-6 col-md-6">
                                                        <p>{userData.work}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
