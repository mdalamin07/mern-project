import React from 'react';
import {Link} from "react-router-dom";

const Errorpage = () => {
  return(
    <>
        <section className="errorpage">
            <div className="container">
                <div className="error_content d-flex flex-column align-items-center justify-content-center">
                    <div className="notfound">
                        <h1 className='fw-bold'>404</h1>
                    </div>
                    <div className="error_text mt-5">
                        <h2>We are sorry, Page not found!</h2>
                        <p className='mx-auto'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <Link to="/" className='btn shadow rounded-pill mt-3'>Back To Homepage</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  ) 
};

export default Errorpage;
