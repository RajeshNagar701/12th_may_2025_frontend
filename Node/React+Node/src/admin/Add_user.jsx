import React, { useState } from 'react'
import AHeader from './component/AHeader'
import AFooter from './component/AFooter'
import axios from 'axios';

function Add_user() {

    const [formvalue,setFormvalue]=useState({
        userId:"11",
        id:"",
        title:"",
        body:"",
    });

    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const submitHandel = async(e) => {
        e.preventDefault();
        const res=await axios.post(`http://localhost:5000/postdata`,formvalue);
        //console.log(res.data);
        setFormvalue({...formvalue,title:"",body:""});
        alert(res.data.result);
        return false;
    }

    return (
        <>
            <AHeader />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Add Data</h2>
                        <div className="container mt-3">
                            <form action="" method='post' onSubmit={submitHandel}>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Title:</label>
                                    <input type="name" onChange={changeHandel} value={formvalue.title} className="form-control" id="name" placeholder="Enter title" name="title" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Body:</label>
                                    <textarea onChange={changeHandel}  className="form-control" value={formvalue.body} id="email" placeholder="Enter Body" name="body"></textarea>
                                </div>
                               

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
            <AFooter />
        </>
    )
}

export default Add_user