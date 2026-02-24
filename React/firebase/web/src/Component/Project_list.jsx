import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Project_list() {

const [listdata,setlistdata]=useState([]);
const [isload, SetIsload]=useState(true);
  
    useEffect(()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
        .then(res=>res.json())
        .then(data=> {
            SetIsload(false) 
            setlistdata(data.drinks)}
            );
    },[])

 const navigate=useNavigate()


  return (
       <>
        {
        isload ? 
        <div className="d-flex justify-content-center">
            Loading... <div className="spinner-border"></div> 
        </div>
        : 
        null}
        {
            listdata.map((item)=>{
            const {idDrink,strDrink,strDrinkThumb}=item;
            
        return(
        <div key={idDrink} className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item first mt-5">
            <div className="position-relative overflow-hidden">
                <div className="portfolio-img">
                <img className="w-100" width="100%" height="250px" src={strDrinkThumb} alt="true" />
                </div>
                <div className="portfolio-text bg-primary">
                <h4 className="font-weight-bold mb-4">{idDrink}</h4>
                <h4 className="font-weight-bold mb-4">{strDrink}</h4>
                <div className="d-flex align-items-center justify-content-center">
                    <button className="btn btn-sm btn-secondary m-1" onClick={()=>navigate(`/project/${idDrink}`)}>
                         View
                    </button>
                    <a className="btn btn-sm btn-secondary m-1" href={strDrinkThumb} data-lightbox="portfolio">
                    <i className="fa fa-eye" />
                    </a>
                </div>
                </div>
            </div>
            </div> ) 
            })
        }
         
        </>
  )
}

export default Project_list