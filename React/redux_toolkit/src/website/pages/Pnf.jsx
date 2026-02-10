import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Pnf() {
    return (
        <div>
            <Header title="Page Not Found" />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 text-center p-5">
                        <h2>Page Not Found</h2>
                        <h1>404</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Pnf