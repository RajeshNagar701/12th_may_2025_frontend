import React, { useEffect, useState } from 'react'
import AHeader from './component/AHeader'
import AFooter from './component/AFooter'
import axios from 'axios';


function Dashbord() {


    useEffect(() => {
        select_user();
    }, []);

    const [users_data, setusers_data] = useState([]);
    const select_user = async () => {
        const res = await axios.get(`http://localhost:5000/getdata`);
        console.log(res.data);
        setusers_data(res.data);
    }

    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:5000/delete/${id}`);
        select_user();
        alert(res.data.status);
        return false;
    }

    const [formvalue, setFormvalue] = useState({
        title: "",
        body: "",
    });

    const editHandel = async (id) => {
        const res = await axios.get(`http://localhost:5000/getsingle/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue._id);
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        const res = await axios.put(`http://localhost:5000/update/${formvalue._id}`, formvalue);
        select_user();
        alert(res.data.status);
        return false;
    }

    return (
        <>
            <AHeader />
            <div className="container mt-5">
                <div className="row">

                    <div className="col-sm-12">
                        <h2>Manage User </h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>User Id</th>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    users_data.map((value, index, arr) => {

                                        return (
                                            <tr>
                                                <td>{value.userId}</td>
                                                <td>{value.id}</td>
                                                <td>{value.title}</td>
                                                <td>{value.body}</td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => deleteHandel(value._id)}>Delete</button>
                                                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editHandel(value._id)}>Edit</button>
                                                    <div className="modal" id="myModal">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                {/* Modal Header */}
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">Edit User</h4>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                                </div>
                                                                {/* Modal body */}
                                                                <div className="modal-body">
                                                                    <div className="container mt-3">
                                                                        <form action="" method='post'>
                                                                            <div className="mb-3 mt-3">
                                                                                <label htmlFor="email">Title:</label>
                                                                                <input type="name" onChange={changeHandel} value={formvalue.title} className="form-control" id="name" placeholder="Enter title" name="title" />
                                                                            </div>
                                                                            <div className="mb-3 mt-3">
                                                                                <label htmlFor="email">Body:</label>
                                                                                <textarea onChange={changeHandel} className="form-control" value={formvalue.body} id="email" placeholder="Enter Body" name="body"></textarea>
                                                                            </div>


                                                                            <button type="submit" className="btn btn-primary" onClick={submitHandel} data-bs-dismiss="modal">Save</button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                {/* Modal footer */}
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-danger" >Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </td>
                                            </tr>);
                                    })
                                }

                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
            <AFooter />
        </>
    )
}

export default Dashbord