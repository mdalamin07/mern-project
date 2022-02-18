import React, { useState, useEffect} from 'react'


const Home = () => {
    const [userName, setUserName] = useState('');

    const [show, setShow] = useState(false);
    // const show = false

    const userHome = async () => {
        try{
            const res = await fetch("/getData", {
                method : "GET",
                headers : {
                    "Content-Type": "application/json"
                },
            });
             const data = await res.json();
             setUserName(data.name);
             setShow(true);

        }catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        userHome();
    }, []);
    return (
        <>
            <section className="home pt-5">
                <div className="home_content d-flex flex-column align-items-center justify-content-center h-100vh">
                    <p className='fw-bolder'>Welcome</p>
                    <h1 className='fw-bold text-capitalize'>{userName}</h1>
                    <h2 className='text-center'>{ show ? 'Happy, to see you back' : 'We Are The MERN Developer' }</h2>
                </div>
            </section>
        </>
    )
}

export default Home
