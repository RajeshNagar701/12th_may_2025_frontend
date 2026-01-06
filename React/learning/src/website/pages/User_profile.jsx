import React from 'react'

function User_profile() {
    return (
        <div>
            <section className="bg-success py-5">
                <div className="container">
                    <div className="row align-items-center py-5">
                        <div className="col-md-8 text-white">
                            <h1>Profile</h1>
                        </div>
                        <div className="col-md-4">
                            <img src="assets/img/about-hero.svg" alt="About Hero" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Close Banner */}
            {/* Start Section */}
            <section className="container py-5">
                <div className="row text-center pt-5 pb-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">My Profile</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 offset-md-3 col-md-6 mb-4">
                        <div className="card h-100">
                            <a href="shop-single.html">
                                <img src="./assets/img/feature_prod_01.jpg" className="card-img-top" alt="..." />
                            </a>
                            <div className="card-body">
                                <ul className="list-unstyled d-flex justify-content-between">
                                    <li>
                                        <i className="text-warning fa fa-star" />
                                        <i className="text-warning fa fa-star" />
                                        <i className="text-warning fa fa-star" />
                                        <i className="text-muted fa fa-star" />
                                        <i className="text-muted fa fa-star" />
                                    </li>
                                    <li className="text-muted text-right">$240.00</li>
                                </ul>
                                <a href="shop-single.html" className="h2 text-decoration-none text-dark">Gym Weight</a>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                                </p>
                                <p className="text-muted">Reviews (24)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Section */}

        </div>

    )
}

export default User_profile