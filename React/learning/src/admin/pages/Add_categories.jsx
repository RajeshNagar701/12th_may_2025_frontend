import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Add_categories() {

 const [obj_cate,setData]=useState({
    id:"",
    name:"",
    image:""
 });

 const changeHandel=(e)=>{
    setData({...obj_cate,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
    console.log(obj_cate);
 }

 const submitHandel = async (e) => {
        e.preventDefault();
        const obj = await axios.post(`http://localhost:3000/categories`,obj_cate);
        setData({...obj_cate,name:"",image:""});
        alert('Categories add success');
        return false;
    }


  return (
    <div>
        <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Add Categories</h1>
                   
                </div>
            </div>
        <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" onSubmit={submitHandel} method="post" role="form">
                        <div className="row">
                             <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Name</label>
                                <input type="text" value={obj_cate.name} onChange={changeHandel} className="form-control mt-1" id="name" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Enter Image URL</label>
                                <input type="url" value={obj_cate.image} onChange={changeHandel}  className="form-control mt-1" id="image" name="image" placeholder="Enter Image URL" />
                            </div>
                           
                        </div>
                       
                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3">Submit</button>
                            </div>
                        </div>
                    </form>
                  
                </div>
            </div>
    </div>
  )
}

export default Add_categories