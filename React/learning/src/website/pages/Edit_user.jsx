import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, redirect, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

function Edit_user() {

    useEffect(() => {
        edit_data();
    },[]);

    const {id}=useParams(); // we can get url id from route

    const edit_data = async () => {
        const obj = await axios.get(`http://localhost:3000/customer/${id}`);
        setData(obj.data)
    }
    

    //====================================================================
    const [obj_cate, setData] = useState({
        name: "",
        email: "",
        mobile: "",
    });

    const changeHandel = (e) => {
        setData({ ...obj_cate,[e.target.name]: e.target.value });
        console.log(obj_cate);
    }

    const validation = () => {
        var result = true;
        if (obj_cate.name == "" || obj_cate.name == null) {
            result = false;
            toast.error('Name field is required !');
            return false;
        }
        if (obj_cate.email == "" || obj_cate.email == null) {
            result = false;
            toast.error('Email field is required !');
            return false;
        }
        if (obj_cate.mobile == "" || obj_cate.mobile == null) {
            result = false;
            toast.error('mobile field is required !');
            return false;
        }
        return result;
    }

    const redirect=useNavigate();
    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const obj = await axios.put(`http://localhost:3000/customer/${obj_cate.id}`, obj_cate);
            setData({ ...obj_cate, name: "", email: "", mobile: "" });
            toast.success('Update Success');
            redirect('/user_profile');
            return false;
        }
    }

    return (
        <div>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Edit Profile</h1>

                </div>
            </div>
            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post" onSubmit={submitHandel} role="form">
                        <div className="row">
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Name</label>
                                <input type="text" value={obj_cate.name} onChange={changeHandel} className="form-control mt-1" id="name" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Email</label>
                                <input type="email" value={obj_cate.email} onChange={changeHandel} className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputname">Mobile</label>
                                <input type="number" value={obj_cate.mobile} onChange={changeHandel} className="form-control mt-1" id="name" name="mobile" placeholder="Mobile" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3">Save</button>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Edit_user