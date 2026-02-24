import React,{useState} from 'react'
import {useNavigate,Link, NavLink} from 'react-router-dom'
function Login() {

  const [formvalue,setFormvalue]=useState({
    "email":"",
    "password":""
  })

  function changehandel(e)
  {
      const {name,value}=e.target;
      setFormvalue({...formvalue,[name]:value});
  }
  const navigate=useNavigate();
  function submithandel(e)
  {
      e.preventDefault();
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDbKKS7QP1cHErTc5c_Ru06SfM-OF05SA0', {
      method: 'POST',
      body: JSON.stringify(formvalue),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        if(data.registered === true)
        {
          alert('Login Success');
          navigate('/index');
        }
        else
        {
          alert('Login failed due to wrong Credential');
        }
      });
  }
  return (
    
    <div>
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row align-items-end mb-4">
          <div className="col-lg-6">
            <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Login Here</h6>
          </div>
          
        </div>
        <div className="row">
          <div className="col-lg-12 mb-5 mb-lg-0">
            <div className="contact-form">
              <div id="success" />
              <form name="sentMessage" id="contactForm" >
                <div className="form-row">
                 
                 <div className="col-sm-12 control-group">
                      <input type="email" name="email" value={formvalue.email} onChange={changehandel}  className="form-control" required="required" placeholder='Enter User Name' data-validation-required-message="Please enter your name" />
                      <p className="help-block text-danger" />
                    </div>
                  <div className="col-sm-12 control-group">
                    <input type="password" name="password" value={formvalue.password} onChange={changehandel}  className="form-control" required="required" placeholder='Enter Password' data-validation-required-message="Please enter your name" />
                    <p className="help-block text-danger" />
                  </div>
                  
                 
                  <div className="col-sm-6 control-group">
                  <button  className="btn btn-primary py-3 px-5" onClick={submithandel} type="submit" id="sendMessageButton">Login</button>
                  </div>
                  <div className="col-sm-6 control-group">
                      <Link to="/signup" className="nav-item nav-link">If you Not Registered then click here for Register</Link>
                  </div>
               </div> 
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>

  )
}

export default Login