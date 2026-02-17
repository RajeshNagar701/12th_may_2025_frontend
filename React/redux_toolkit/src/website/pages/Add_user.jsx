import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { insert_cust } from '../../app/customerSlice';

function Add_user() {

    const dispatch = useDispatch();


    const [obj_cate, setData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
    });

    const changeHandel = (e) => {
        setData({ ...obj_cate, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
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
        if (obj_cate.password == "" || obj_cate.password == null) {
            result = false;
            toast.error('password field is required !');
            return false;
        }
        if (obj_cate.mobile == "" || obj_cate.mobile == null) {
            result = false;
            toast.error('mobile field is required !');
            return false;
        }
        return result;
    }
    const submitHandel = (e) => {
        e.preventDefault();
        if (validation()) {
            dispatch(insert_cust(obj_cate));
            toast.success('Customer Add Success');
            setData({ ...obj_cate, name: "", email: "", password: "", mobile: "" });
        }
    }

    return (
        <div>
            <Header title="Add User" />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Add User</h2>
                        <div className="container mt-3">
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
                                        <label htmlFor="inputname">Password</label>
                                        <input type="password" value={obj_cate.password} onChange={changeHandel} className="form-control mt-1" id="name" name="password" placeholder="Password" />
                                    </div>
                                    <div className="form-group col-md-12 mb-3">
                                        <label htmlFor="inputname">Mobile</label>
                                        <input type="number" value={obj_cate.mobile} onChange={changeHandel} className="form-control mt-1" id="name" name="mobile" placeholder="Mobile" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col text-end mt-2">
                                        <button type="submit" className="btn btn-success btn-lg px-3">Signup</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Add_user