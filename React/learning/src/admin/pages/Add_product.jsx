import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Add_product() {

    useEffect(() => {
        fetch_data();
    }, []);

    const [cate, setCate] = useState([]);
    const fetch_data = async () => {
        const obj = await axios.get(`http://localhost:3000/categories`);
        setCate(obj.data)

        //============================================================
    }

    const [obj_cate, setData] = useState({
        id: "",
        cate_id: "",
        name: "",
        sdesc: "",
        ldesc: "",
        price: "",
        disc_price: "",
        image: ""
    });

    const changeHandel = (e) => {
        setData({ ...obj_cate, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(obj_cate);
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        const obj = await axios.post(`http://localhost:3000/products`, obj_cate);
        setData({ ...obj_cate, cate_id: "", name: "", sdesc: "", ldesc: "", price: "", disc_price: "", image: "" });
        alert('Products add success');
        return false;
    }


    return (
        <div>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Add Product</h1>

                </div>
            </div>
            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" onSubmit={submitHandel} method="post" role="form">
                        <div className="row">
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Select Categories</label>
                                <select type="text" value={obj_cate.cate_id} onChange={changeHandel} className="form-control mt-1" name="cate_id">
                                    <option value="">--------- Select Categories ----------</option>    
                                    {
                                        cate.map((value) => {
                                            return (
                                                <option value={value.id}>
                                                    {value.name}
                                                </option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Name</label>
                                <input type="text" value={obj_cate.name} onChange={changeHandel} className="form-control mt-1" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Short Description</label>
                                <textarea type="text" value={obj_cate.sdesc} onChange={changeHandel} className="form-control mt-1" name="sdesc"></textarea>
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Long Description</label>
                                <textarea type="text" value={obj_cate.ldesc} onChange={changeHandel} className="form-control mt-1" name="ldesc"></textarea>
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Price</label>
                                <input type="number" value={obj_cate.price} onChange={changeHandel} className="form-control mt-1" name="price" placeholder="Enter Price" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Discounted Price</label>
                                <input type="number" value={obj_cate.disc_price} onChange={changeHandel} className="form-control mt-1" name="disc_price" placeholder="Enter Discounted Price" />
                            </div>
                            <div className="form-group col-md-12 mb-3">
                                <label htmlFor="inputemail">Enter Image URL</label>
                                <input type="url" value={obj_cate.image} onChange={changeHandel} className="form-control mt-1" id="image" name="image" placeholder="Enter Image URL" />
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

export default Add_product