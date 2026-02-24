import React,{useState} from 'react'

function Form_main() {

  const[formvalue,setformvalue]=useState({
      name:"",
      email:"",
      subject:"",
      message:""
  })  
  const[alldata,setalldata]=useState([]);
  
  function changehandel(e){
    setformvalue({...formvalue,[e.target.name]:[e.target.value]})
  }
  function submithandel(e){
      e.preventDefault();
      setalldata([...alldata,formvalue]);
      setformvalue({name:"",email:"",subject:"",message:""})  
  }

  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-end mb-4">
            <div className="col-lg-6">
              <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Contact Form</h6>
            </div>
            <div className="col-lg-6">
              <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Contact Data</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="contact-form">
                <div id="success" />
                <form name="sentMessage" id="contactForm" >
                  <div className="form-row">
                    <div className="col-sm-6 control-group">
                      <input type="text" name="name" value={formvalue.name} onChange={changehandel} className="form-control p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="col-sm-6 control-group">
                      <input type="email" name="email" value={formvalue.email} onChange={changehandel} className="form-control p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <input type="text" name="subject" value={formvalue.subject} onChange={changehandel} className="form-control p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <textarea name="message" value={formvalue.message} onChange={changehandel} className="form-control p-4" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                    <p className="help-block text-danger" />
                  </div>
                  <div>
                    <button onClick={submithandel} className="btn btn-primary btn-block py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-md-6'>
              <table className='table'>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
                {
                  alldata.map((item, index) => {
                    //const {id,fname,email} =item
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.subject}</td>
                        <td>{item.message}</td>
                        <td><button onClick={delete(item.id)} className='btn btn-danger'>Delete</button></td>
                      </tr>
                    )
                  })

                }

              </table>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form_main