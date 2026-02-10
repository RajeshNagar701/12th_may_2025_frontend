import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'


function Edit_user() {

    const redirect=useNavigate();
    return (
        <div>
            <Header title="Edit User" />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Edit User</h2>
                        <div className="container mt-3">
                            <form action="/action_page.php">
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                                </div>
                                <div className="form-check mb-3">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary float-start">Save</button>
                            </form>
                            <button type="submit" className="btn btn-primary float-end" onClick={()=>redirect('/manage_user')}>Back</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Edit_user