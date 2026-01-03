import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {

 const [obj_cate,setData]=useState({
    name:"",
    email:"",
    password:"",
    mobile:"",
 });

 const changeHandel=(e)=>{
    setData({...obj_cate,id:new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value});
    console.log(obj_cate);
 }

 const submitHandel = async (e) => {
        e.preventDefault();
        const obj = await axios.post(`http://localhost:3000/customer`,obj_cate);
        setData({...obj_cate,name:"",email:"",password:"",mobile:""});
        alert('Signup success');
        return false;
    }

  return (
    <div>
        <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Signup Us</h1>
                   
                </div>
            </div>
        <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post" onSubmit={submitHandel}  role="form">
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
                    <div className="row">
                        <div className="col text-start mt-2">
                           <Link to="/login">If You already registered then Login Here</Link>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Signup