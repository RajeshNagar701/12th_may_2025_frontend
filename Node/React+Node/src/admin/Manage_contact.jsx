import React, { useEffect, useState } from 'react'
import AHeader from './component/AHeader'
import AFooter from './component/AFooter'


function Manage_contact() {

    const [contacts_data,setcontacts_data]=useState([]);
    useEffect(() => {
        
    });

    const deleteHandel = (id) => {
       
    }

    const editHandel=(id)=>{
        
    }

    return (
        <>
            <AHeader />
            <div className="container mt-5">
                <div className="row">

                    <div className="col-sm-12">
                        <h2>Manage Contact</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts_data.map((item, index, arr) => {

                                        return (
                                            <tr key={item}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.mobile}</td>
                                                <td>{item.message}</td>
                                                <td>
                                                    <button className='btn btn-primary' onClick={()=>editHandel(item.id)}>Edit</button>
                                                    <button className='btn btn-danger' onClick={()=>deleteHandel(item.id)}>Delete</button>
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
            <AFooter />
        </>
    )
}

export default Manage_contact