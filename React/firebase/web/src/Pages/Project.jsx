import React , {useState,useEffect} from 'react'
import Project_list from '../Component/Project_list'
function Project() {

    

  return (
    <div>
    <div className="container-fluid py-5">
        <div className="container">
        <div className="row align-items-end mb-4">
            <div className="col-lg-6">
            <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Our Projects</h6>
            <h1 className="section-title mb-3">Visit Our Awesome Cleaning Projects</h1>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
            <ul className="list-inline mb-2" id="portfolio-flters">
                <li className="btn btn-sm btn-outline-primary m-1 active" data-filter="*">All</li>
                <li className="btn btn-sm btn-outline-primary m-1" data-filter=".first">Complete</li>
                <li className="btn btn-sm btn-outline-primary m-1" data-filter=".second">Running</li>
                <li className="btn btn-sm btn-outline-primary m-1" data-filter=".third">Upcoming</li>
            </ul>
            </div>
        </div>

        <div className="row m-0 portfolio-container">
           
           <Project_list/>
            
        </div>
        </div>
    </div>
    </div>

  )
}

export default Project