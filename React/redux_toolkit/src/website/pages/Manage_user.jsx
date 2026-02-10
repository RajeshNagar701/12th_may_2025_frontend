import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function Manage_user() {
    const redirect = useNavigate();


    return (
        <div>
            <Header title="Manage User" />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Manage User</h2>
                        <div className="container mt-3">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John</td>
                                        <td>Doe</td>
                                        <td>john@example.com</td>
                                        <td>
                                            <button className='btn btn-primary' onClick={()=>redirect('/edit_user')}>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                  

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Manage_user