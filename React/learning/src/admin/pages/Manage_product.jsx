import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Manage_product() {
    useEffect(() => {
        fetch_data();
    }, []);

    const [data, setData] = useState([]);

    const fetch_data = async () => {
        const obj = await axios.get(`http://localhost:3000/products`);
        setData(obj.data)
    }
    return (
        <div>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Manage Product</h1>

                </div>
            </div>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-9 m-auto">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Cate Id</th>
                                    <th>Prod Name</th>
                                    <th>Short Desc</th>
                                    <th>Long Desc</th>
                                    <th>Main Price</th>
                                    <th>Disc Price</th>
                                    <th>Image</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((value, index, arr) => {
                                        return (
                                            <tr>
                                                <td>{value.id}</td>
                                                <td>{value.cate_id}</td>
                                                <td>{value.name}</td>
                                                <td>{value.sdesc}</td>
                                                <td>{value.ldesc}</td>
                                                <td>{value.price}</td>
                                                <td>{value.disc_price}</td>
                                                 <td><img src={value.image} width="50px"alt="" /></td>
                                                <td className='text-center'>
                                                    <button className='btn btn-danger me-2'>Delete</button>
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

export default Manage_product