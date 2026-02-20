import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { get_user } from '../../../app/userSlice';

function Manage_user() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_user());
    },[]);

    const { user_arr } = useSelector((state) => state.user);

    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Manage User</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user_arr.map((value) => {
                                        return (
                                            <tr>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td>{value.email}</td>
                                                <td>{value.mobile}</td>
                                                <span class="p-2 mt-2 badge text-bg-danger">Delete</span>
                                                <span class="p-2 mt-2 badge text-bg-success">{value.status}</span>

                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Manage_user

