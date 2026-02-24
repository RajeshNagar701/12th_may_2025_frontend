import React from 'react'

function Banner2({title}) {
  return (
    <div>
    <div className="container-fluid bg-primary py-5 mb-5">
    <div className="container py-5">
        <div className="row align-items-center py-4">
        <div className="col-md-6 text-center text-md-left">
            <h1 className="display-4 mb-4 mb-md-0 text-secondary text-uppercase">{title}</h1>
        </div>
        <div className="col-md-6 text-center text-md-right">
            <div className="d-inline-flex align-items-center">
            <a className="btn btn-sm btn-outline-light" href>Home</a>
            <i className="fas fa-angle-double-right text-light mx-2" />
            <a className="btn btn-sm btn-outline-light disabled" href>{title}</a>
            </div>
        </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Banner2