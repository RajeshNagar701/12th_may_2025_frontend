import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Manage_contact() {
    useEffect(() => {
        fetch_data();
    });

    const [data, setData] = useState([]);

    const fetch_data = async () => {
        const obj = await axios.get(`http://localhost:3000/contact`);
        setData(obj.data)
    }

    const deleteHandel = async (id) => {
        const obj = await axios.delete(`http://localhost:3000/contact/${id}`);
        fetch_data();
        alert('delete success');
        return false;
    }

    
    return (
        <div>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Manage Contact</h1>

                </div>
            </div>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-9 m-auto">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Comment</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((value, index, arr) => {
                                        return (
                                            <tr>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td>{value.email}</td>
                                                <td>{value.comment}</td>
                                                <td className='text-center'>8
                                                    <button className='btn btn-danger me-2' onClick={()=>deleteHandel(value.id)}>Delete</button>
                                                    <button className='btn btn-primary'>Edit</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage_contact