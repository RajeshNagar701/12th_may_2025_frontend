import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function User_profile() {

    const redirect=useNavigate();

    useEffect(() => {
        fetch_data();
    });

    const [data, setData] = useState({});

    const fetch_data = async () => {
        const obj = await axios.get(`http://localhost:3000/customer/${sessionStorage.getItem('s_id')}`);
        setData(obj.data)
    }
    
    return (
        <div>
            <section className="bg-success py-5">
                <div className="container">
                    <div className="row align-items-center py-5">
                        <div className="col-md-8 text-white">
                            <h1>Profile</h1>
                        </div>
                        <div className="col-md-4">
                            <img src="assets/img/about-hero.svg" alt="About Hero" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Close Banner */}
            {/* Start Section */}
            <section className="container py-5">
                <div className="row text-center pt-5 pb-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">My Profile</h1>
                        <p>
                           Hi.. {data.name}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 offset-md-3 col-md-6 mb-4">
                        <div className="card h-100">
                           
                            <div className="card-body">
                                <p className="h2 text-decoration-none text-dark">ID : {data.id}</p>
                                <p className="h2 text-decoration-none text-dark">Name : {data.name}</p>
                                <p className="h2 text-decoration-none text-dark">Email : {data.email}</p>
                                <p className="h2 text-decoration-none text-dark">Mobile : {data.mobile}</p>
                                <p className="h2 text-decoration-none text-dark">status : {data.status}</p>
                                <button className='btn btn-primary' onClick={()=>redirect(`/edit_user/${data.id}`)}>Edit Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Section */}

        </div>

    )
}

export default User_profile