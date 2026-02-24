import React,{useState,useEffect} from 'react'
import {useNavigate,Link, NavLink} from 'react-router-dom'
function Signup() {

  const [formvalue,setFormvalue]=useState({
    "name":"",
    "email":"",
    "password":"",
    "mobile":""
  })

  function changehandel(e)
  {
      const {name,value}=e.target;
      setFormvalue({...formvalue,[name]:value});
  }
// signup with firebase Authantication
  const navigate=useNavigate();
  function submithandel(e)
  {
      e.preventDefault();
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDbKKS7QP1cHErTc5c_Ru06SfM-OF05SA0', {
      method: 'POST',
      body: JSON.stringify(formvalue),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.localId)
        {
          if (data.localId) {
            fetch(`https://reacttops-561c8-default-rtdb.firebaseio.com/users/${data.localId}.json`, {
                method: "PUT",
                body: JSON.stringify(formvalue),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
            .then((response) => response.json())
            .then((data) => {
                alert("Register Success");
                navigate('/login');
            })
          } 
          else 
          {
              alert("something went wrong")
          }
          //setFormvalue({name:"",email:"",password:"",mobile:""});
        }
        else 
        {
            alert("something went wrong")
        }
      });
  }

  
  /*
  function submithandel(e)
  {
      e.preventDefault();
      fetch('https://reacttops-561c8-default-rtdb.firebaseio.com/users.json', {
      method: 'POST',
      body: JSON.stringify(formvalue),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if(data)
        {
          setFormvalue({name:"",email:"",password:"",mobile:""});
        }
      });
  }

  
  */

  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-end mb-4">
            <div className="col-lg-6">
              <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Sign Up Here</h6>
            </div>
            
          </div>
          <div className="row">
            <div className="col-lg-12 mb-5 mb-lg-0">
              <div className="contact-form">
                <div id="success" />
                <form name="sentMessage" id="contactForm" >
                  <div className="form-row">
                    <div className="col-sm-12 control-group">
                      <input type="text" name="name" value={formvalue.name} onChange={changehandel} className="form-control" required="required" placeholder='Enter Name' data-validation-required-message="Please enter your name" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="col-sm-12 control-group">
                      <input type="email" name="email" value={formvalue.email} onChange={changehandel}  className="form-control" required="required" placeholder='Enter User Name' data-validation-required-message="Please enter your name" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="col-sm-12 control-group">
                      <input type="password" name="password" value={formvalue.password} onChange={changehandel}  className="form-control" required="required" placeholder='Enter Password' data-validation-required-message="Please enter your name" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="col-sm-12 control-group">
                      <input type="number" name="mobile" value={formvalue.mobile} onChange={changehandel} className="form-control" required="required"  placeholder='Enter Mobile' data-validation-required-message="Please enter your name" />
                      <p className="help-block text-danger" />
                    </div>
                   
                    <div className="col-sm-6 control-group">
                    <button  className="btn btn-primary py-3 px-5" onClick={submithandel} type="submit" id="sendMessageButton">Signup</button>
                    </div>
                    <div className="col-sm-6 control-group">
                        <Link to="/login" className="nav-item nav-link">If you allready Registered then click here for Login</Link>
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

export default Signup