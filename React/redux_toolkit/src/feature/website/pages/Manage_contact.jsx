import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import { delete_contact, get_contact, update_contact } from '../../../app/contactSlice';

function Manage_contact() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_contact());
    });

    const { contact_arr } = useSelector((state) => state.contact);

    const deleteHandel = (id) => {
        dispatch(delete_contact(id));
        swal({
            title: "Success",
            text: "Contact Deleted Success!",
            icon: "success",
            button: "Done",
        });
        dispatch(get_contact());
    }

    const [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        comment: "",
    });

    const editHandel = (id) => {
        const editdata = contact_arr.filter((value) => { return value.id == id });
        setData(editdata[0])
    }

    const changeHandel = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    }

    function validation() {
        var result = true;
        if (data.name == "" || data.name == null) {
            toast.error('Name field is required');
            result = false;
            return false;
        }
        if (data.email == "" || data.email == null) {
            toast.error('email field is required');
            result = false;
            return false;
        }
        if (data.comment == "" || data.comment == null) {
            toast.error('Comment field is required');
            result = false;
            return false;
        }
        return result;
    }

    const submithandel = (e) => {
        e.preventDefault();
        if (validation()) {
            dispatch(update_contact(data));
            dispatch(get_contact());
            swal({
                title: "Success",
                text: "Contact Update Success",
                icon: "success",
                button: "Done",
            });
        }
    }


    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Manage Contact</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>comment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contact_arr.map((value) => {
                                        return (
                                            <tr>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td>{value.email}</td>
                                                <td>{value.comment}</td>
                                                <span class="p-2 mt-2 badge text-bg-danger" onClick={() => deleteHandel(value.id)}>Delete</span>
                                                <span class="p-2 mt-2 badge text-bg-primary" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editHandel(value.id)}>Edit</span>
                                            </tr>
                                        )
                                    })
                                }

                                <div className="modal" id="myModal">
                                    <div className="modal-dialog">
                                        <div className="modal-content">

                                            <div className="modal-header">
                                                <h4 className="modal-title">Edit Contact</h4>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                            </div>

                                            <div className="modal-body">
                                                <form action="" onSubmit={submithandel}>
                                                    <div className="mb-3 mt-3">
                                                        <label htmlFor="email">Name:</label>
                                                        <input type="name" value={data.name} onChange={changeHandel} className="form-control" id="name" placeholder="Enter name" name="name" />
                                                    </div>
                                                    <div className="mb-3 mt-3">
                                                        <label htmlFor="email">Email:</label>
                                                        <input type="email" value={data.email} onChange={changeHandel} className="form-control" id="email" placeholder="Enter email" name="email" />
                                                    </div>
                                                    <div className="mb-3 mt-3">
                                                        <label htmlFor="email">Comment:</label>
                                                        <textarea value={data.comment} onChange={changeHandel} className="form-control" name="comment"></textarea>
                                                    </div>
                                                   
                                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                                                </form>

                                            </div>


                                        </div>
                                    </div>
                                </div>

                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Manage_contact

