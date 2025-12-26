import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Shop() {
    useEffect(() => {
        fetch_data1();
        fetch_data2();
    }, []);

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    const fetch_data1 = async () => {
        const obj = await axios.get(`http://localhost:3000/categories`);
        setData1(obj.data)
    }
    const fetch_data2 = async () => {
        const obj = await axios.get(`http://localhost:3000/products`);
        setData2(obj.data)
    }
    return (
        <div>
            {/* Start Content */}
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <h1 className="h2 pb-4">Categories</h1>
                        <ul className="list-unstyled templatemo-accordion">
                            <li className="pb-3">
                                <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                                    All Products
                                </a>
                            </li>
                            {
                                data1.map((value, index, arr) => {
                                    return (
                                        <li className="pb-3">
                                            <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                                                {value.name}
                                            </a>
                                        </li>
                                    )
                                })
                            }


                        </ul>
                    </div>
                    <div className="col-lg-9">

                        <div className="row">

                            {
                                data2.map((value, index, arr) => {
                                    return (
                                        <div className="col-md-4">
                                            <div className="card mb-4 product-wap rounded-0">
                                                <div className="card rounded-0">
                                                    <img className="card-img rounded-0 img-fluid" src={value.image} />
                                                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                                        <ul className="list-unstyled">
                                                            <li><Link className="btn btn-success text-white" to="/shop_single"><i className="far fa-heart" /></Link></li>
                                                            <li><Link className="btn btn-success text-white mt-2" to="/shop_single"><i className="far fa-eye" /></Link></li>
                                                            <li><Link className="btn btn-success text-white mt-2" to="/shop_single"><i className="fas fa-cart-plus" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <Link href="/shop_single" className="h3 text-decoration-none">{value.name}</Link>
                                                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                
                                                        <li className="pt-2">
                                                            <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                                            <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                                            <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                                            <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                                            <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                                                        </li>
                                                    </ul>
                                                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                                                        <li>
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-warning fa fa-star" />
                                                            <i className="text-muted fa fa-star" />
                                                            <i className="text-muted fa fa-star" />
                                                        </li>
                                                    </ul>
                                                    <p className="text-center mb-0"><del>${value.price}</del> ${value.disc_price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                        <div div="row">
                            <ul className="pagination pagination-lg justify-content-end">
                                <li className="page-item disabled">
                                    <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabIndex={-1}>1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Content */}
            {/* Start Brands */}
            <section className="bg-light py-5">
                <div className="container my-4">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Our Brands</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="col-lg-9 m-auto tempaltemo-carousel">
                            <div className="row d-flex flex-row">
                                {/*Controls*/}
                                <div className="col-1 align-self-center">
                                    <a className="h1" href="#multi-item-example" role="button" data-bs-slide="prev">
                                        <i className="text-light fas fa-chevron-left" />
                                    </a>
                                </div>
                                {/*End Controls*/}
                                {/*Carousel Wrapper*/}
                                <div className="col">
                                    <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="multi-item-example" data-bs-ride="carousel">
                                        {/*Slides*/}
                                        <div className="carousel-inner product-links-wap" role="listbox">
                                            {/*First slide*/}
                                            <div className="carousel-item active">
                                                <div className="row">
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*End First slide*/}
                                            {/*Second slide*/}
                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*End Second slide*/}
                                            {/*Third slide*/}
                                            <div className="carousel-item">
                                                <div className="row">
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                                                    </div>
                                                    <div className="col-3 p-md-5">
                                                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*End Third slide*/}
                                        </div>
                                        {/*End Slides*/}
                                    </div>
                                </div>
                                {/*End Carousel Wrapper*/}
                                {/*Controls*/}
                                <div className="col-1 align-self-center">
                                    <a className="h1" href="#multi-item-example" role="button" data-bs-slide="next">
                                        <i className="text-light fas fa-chevron-right" />
                                    </a>
                                </div>
                                {/*End Controls*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Brands*/}
        </div>

    )
}

export default Shop