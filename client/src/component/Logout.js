import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App';

const Logout = () => {

    const { dispatch } = useContext(UserContext);

    const navigate = useNavigate();
    // Promiss
    useEffect(() => {
        fetch("/logout", {
            method : "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({type:"USER", payload:false})
            navigate("/login")
            if(res.status != 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((error) => {
            console.log(error)
        })
    });
  return (
    <>
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <h1 className='text-center mt-5 pt-5'>Logout</h1>
        </div>
    </>
  )
}

export default Logout