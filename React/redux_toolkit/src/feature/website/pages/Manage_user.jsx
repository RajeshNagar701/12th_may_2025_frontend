import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { delete_user, get_user, update_user } from '../../../app/userSlice';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

function Manage_user() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_user());
    });

    const { user_arr } = useSelector((state) => state.user);

    const deleteHandel = (id) => {
        dispatch(delete_user(id));
        swal({
            title: "Success",
            text: "User Deleted Success!",
            icon: "success",
            button: "Done",
        });
        dispatch(get_user());
    }

    const [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
    });

    const editHandel = (id) => {
        const editdata = user_arr.filter((value) => { return value.id == id });
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
        if (data.password == "" || data.password == null) {
            toast.error('password field is required');
            result = false;
            return false;
        }
        if (data.mobile == "" || data.mobile == null) {
            toast.error('mobile field is required');
            result = false;
            return false;
        }
        return result;
    }

    const submithandel = (e) => {
        e.preventDefault();
        if (validation()) {
            dispatch(update_user(data));
            dispatch(get_user());
            swal({
                title: "Success",
                text: "User Updated Success!",
                icon: "success",
                button: "Done",
            });
        }
    }

    const statusHandel = (id) => {
        const statusdata = user_arr.filter((value) => { return value.id == id });
        if (statusdata[0].status == "Block") {
            const obj = { id: id, status: "Unblock" }
            dispatch(update_user(obj))
            dispatch(get_user());
            swal({
                title: "Success",
                text: "Unblock user Success!",
                icon: "success",
                button: "Done",
            });
        }
        else {
            const obj = { id: id, status: "Block" }
            dispatch(update_user(obj))
            dispatch(get_user());
            swal({
                title: "Success",
                text: "Unblock user Success!",
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
                                                <span class="p-2 mt-2 badge text-bg-danger" onClick={() => deleteHandel(value.id)}>Delete</span>
                                                <span class="p-2 mt-2 badge text-bg-primary" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editHandel(value.id)}>Edit</span>
                                                <span class="p-2 mt-2 badge text-bg-success" onClick={() => statusHandel(value.id)}>{value.status}</span>

                                            </tr>
                                        )
                                    })
                                }

                                <div className="modal" id="myModal">
                                    <div className="modal-dialog">
                                        <div className="modal-content">

                                            <div className="modal-header">
                                                <h4 className="modal-title">Edit User</h4>
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
                                                        <label htmlFor="email">mobile:</label>
                                                        <input type="mobile" value={data.mobile} onChange={changeHandel} className="form-control" id="mobile" placeholder="Enter mobile" name="mobile" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="pwd">Password:</label>
                                                        <input type="password" value={data.password} onChange={changeHandel} className="form-control" id="pwd" placeholder="Enter password" name="password" />
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

export default Manage_user

