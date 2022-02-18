import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { UserContext } from '../App';
import style from "../Header.module.css";


const Navbar = () => {
    const { state } = useContext(UserContext);
    const RenderMenu = () => {
        if(state) {
            return (
                <>
                <li className="nav-item">
                    <NavLink to="/" className={(navInfo) => (navInfo.isActive ? style.activeNav : "")}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className={(navInfo) => (navInfo.isActive ? style.activeNav : "")}>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className={(navInfo) => (navInfo.isActive ? style.activeNav : "")}>Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/logout" className={(navInfo) => (navInfo.isActive ? style.activeNav : "")} >Logout</NavLink>
                </li>
                </>
            )
        }else{
            return (
                <>
                <li className="nav-item">
                    <NavLink to="/" className={(navInfo) => (navInfo.isActive ? style.activeNav : "")}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className={(navInfo) => (navInfo.isActive ? style.activeNav : "")}>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className={(navInfo) => (navInfo.isActive ? style.activeNav : "")}>Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login" className={(navInfo) => (navInfo.isActive ? style.activeNav : "")} >Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signup" className={(navInfo) => (navInfo.isActive ? style.activeNav : "")}>Register</NavLink>
                </li>
                </>
            )
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid container">
                    <p className="navbar-brand">MD.<span>AL-AMIN</span></p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><RiBarChartHorizontalLine/></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <RenderMenu/>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
