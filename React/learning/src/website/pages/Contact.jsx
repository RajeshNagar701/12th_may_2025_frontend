import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function Contact() {

    const [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        comment: ""
    });

    const changeHandel = (e) => {
        setData({ ...data, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(data);
    }

    const validation = () => {
        var result = true;
        if (data.name == "" || data.name == null) {
            result=false;
            toast.error('Name field is required !');
            return false;
        }
        if (data.email == "" || data.email == null) {
            result=false;
            toast.error('Email field is required !');
            return false;
        }
        if (data.comment == "" || data.comment == null) {
            result=false;
            toast.error('Comment field is required !');
            return false;
        }
        return result;
    }
    const onsubmitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/contact`, data);
            setData({ ...data, name: "", email: "", comment: "" });
            alert('Inquiry Submitted Success');
            return false;
        }
    }


    return (
        <div>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Contact Us</h1>
                </div>
            </div>

            {/* Start Contact */}
            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post" onSubmit={onsubmitHandel} role="form">

                        <div className="mb-3">
                            <label htmlFor="inputname">Name</label>
                            <input type="text" value={data.name} onChange={changeHandel} className="form-control mt-1" id="name" name="name" placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputemail">Email</label>
                            <input type="email" value={data.email} onChange={changeHandel} className="form-control mt-1" id="email" name="email" placeholder="Email" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputmessage">Message</label>
                            <textarea onChange={changeHandel} value={data.comment} className="form-control mt-1" id="message" name="comment" placeholder="Message" rows={8} defaultValue={""} />
                        </div>
                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" name="submit" className="btn btn-success btn-lg px-3">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* End Contact */}
        </div>

    )
}

export default Contact