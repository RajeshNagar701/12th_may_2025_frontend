import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Manage_categories() {

    useEffect(()=>{
        fetch_data();
    },[]);

    const [data,setData]=useState([]);
    /*
    const fetch_data=()=>{
      fetch('http://localhost:3000/categories')
      .then(response => response.json())
      .then(obj =>  setData(obj)) 
    }
    */
    const fetch_data=async()=>{
      const obj=await axios.get(`http://localhost:3000/categories`);
      //console.log(obj);
      setData(obj.data)
    }

    const deleteHandel = async (id) => {
        const obj = await axios.delete(`http://localhost:3000/categories/${id}`);
        fetch_data();
        alert('delete success');
        return false;
    }

    return (
        <div>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Manage Categories</h1>

                </div>
            </div>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-9 m-auto">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Cate Name</th>
                                    <th>Image</th>
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((value,index,arr)=>{
                                        return(
                                             <tr>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td><img src={value.image} width="50px"alt="" /></td>
                                                <td className='text-center'>
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

export default Manage_categories