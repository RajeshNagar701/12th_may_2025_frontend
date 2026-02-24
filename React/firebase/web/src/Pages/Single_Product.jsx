import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

function Single_Product() {
    const { id } = useParams()
    const [singledata,setSingleData]=useState({});
    
    useEffect(()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((resp)=>resp.json())
        .then((data)=>setSingleData(data.drinks[0]));
    },[]); 



  return (
    <div>

        
        <div className="container-fluid bg-light py-5">
            <div className="container py-5">
            <div className="row">
                <div className="col-lg-7 pt-lg-5 pb-3">
                <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Why Choose Us</h6>
                <h1 className="mb-4 section-title">{}</h1>
                <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                <div className="row">
                    <div className="col-sm-4">
                    <h1 className="text-secondary mb-2" data-toggle="counter-up">{singledata.idDrink}</h1>
                    <h6 className="font-weight-semi-bold mb-sm-4">Our Cleaners</h6>
                    </div>
                    <div className="col-sm-4">
                    <h1 className="text-secondary mb-2" data-toggle="counter-up">1050</h1>
                    <h6 className="font-weight-semi-bold mb-sm-4">Happy Clients</h6>
                    </div>
                    <div className="col-sm-4">
                    <h1 className="text-secondary mb-2" data-toggle="counter-up">2500</h1>
                    <h6 className="font-weight-semi-bold mb-sm-4">Projects Done</h6>
                    </div>
                </div>
                </div>
                <div className="col-lg-5" style={{minHeight: 400}}>
                <div className="position-relative h-100 rounded overflow-hidden">
                    <img className="position-absolute w-100 h-100" src={singledata.strDrinkThumb} style={{objectFit: 'cover'}} />
                </div>
                </div>
            </div>
            </div>
        </div>
        
 
</div>

  )
}

export default Single_Product