import React from 'react'

function Service() {
  return (
  <div>
    <div className="container-fluid py-5">
        <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
            <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Our Services</h6>
            <h1 className="mb-4 section-title">Awesome Cleaning Services For You</h1>
            <p>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
            <a href className="btn btn-primary mt-3 py-2 px-4">More Services</a>
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0">
            <div className="owl-carousel service-carousel position-relative">
                <div className="d-flex flex-column align-items-center text-center bg-light rounded overflow-hidden pt-4">
                <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                    <i className="fa fa-2x fa-hotel" />
                </div>
                <h5 className="font-weight-bold mb-4 px-4">Home Cleaning</h5>
                <img src="img/blog-1.jpg" alt />
                </div>
                <div className="d-flex flex-column align-items-center text-center bg-light rounded overflow-hidden pt-4">
                <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                    <i className="fa fa-2x fa-city" />
                </div>
                <h5 className="font-weight-bold mb-4 px-4">Window Cleaning</h5>
                <img src="img/blog-3.jpg" alt />
                </div>
                <div className="d-flex flex-column align-items-center text-center bg-light rounded overflow-hidden pt-4">
                <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                    <i className="fa fa-2x fa-spa" />
                </div>
                <h5 className="font-weight-bold mb-4 px-4">Carpet Cleaning</h5>
                <img src="img/blog-2.jpg" alt />
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* Services End */}
    {/* Contact Info Start */}
    <div className="container-fluid py-5 contact-info">
        <div className="row">
        <div className="col-lg-4 p-0">
            <div className="contact-info-item d-flex align-items-center justify-content-center bg-primary text-white py-4 py-lg-0">
            <i className="fa fa-3x fa-map-marker-alt text-secondary mr-4" />
            <div className>
                <h5 className="mb-2">Our Office</h5>
                <p className="m-0">123 Street, New York, USA</p>
            </div>
            </div>
        </div>
        <div className="col-lg-4 p-0">
            <div className="contact-info-item d-flex align-items-center justify-content-center bg-secondary text-white py-4 py-lg-0">
            <i className="fa fa-3x fa-envelope-open text-primary mr-4" />
            <div className>
                <h5 className="mb-2">Email Us</h5>
                <p className="m-0">info@example.com</p>
            </div>
            </div>
        </div>
        <div className="col-lg-4 p-0">
            <div className="contact-info-item d-flex align-items-center justify-content-center bg-primary text-white py-4 py-lg-0">
            <i className="fa fa-3x fa-phone-alt text-secondary mr-4" />
            <div className>
                <h5 className="mb-2">Call Us</h5>
                <p className="m-0">+012 345 6789</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* Contact Info End */}
    {/* Testimonial Start */}
    <div className="container-fluid py-5">
        <div className="container">
        <div className="row">
            <div className="col-lg-7 pt-lg-5 pb-5">
            <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Testimonial</h6>
            <h1 className="section-title mb-5">What Our Clients Say</h1>
            <div className="owl-carousel testimonial-carousel position-relative">
                <div className="d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                    <img className="img-fluid" src="img/testimonial-1.jpg" alt />
                    <div className="ml-3">
                    <h5>Client Name</h5>
                    <i>Profession</i>
                    </div>
                </div>
                <p>Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor  lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore.</p>
                </div>
                <div className="d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                    <img className="img-fluid" src="img/testimonial-2.jpg" alt />
                    <div className="ml-3">
                    <h5>Client Name</h5>
                    <i>Profession</i>
                    </div>
                </div>
                <p>Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor  lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore.</p>
                </div>
                <div className="d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                    <img className="img-fluid" src="img/testimonial-3.jpg" alt />
                    <div className="ml-3">
                    <h5>Client Name</h5>
                    <i>Profession</i>
                    </div>
                </div>
                <p>Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor  lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore.</p>
                </div>
            </div>
            </div>
            <div className="col-lg-5" style={{minHeight: 400}}>
            <div className="position-relative h-100 rounded overflow-hidden">
                <img className="position-absolute w-100 h-100" src="img/testimonial.jpg" style={{objectFit: 'cover'}} />
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>

  )
}

export default Service