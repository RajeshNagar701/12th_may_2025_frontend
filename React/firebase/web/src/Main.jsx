import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";

//================ Website =========================
import Index from './Pages/Index'
import About from './Pages/About'
import PNF from './Pages/PNF'
import Header from './Component/Header';
import Banner1 from './Component/Banner1';
import Banner2 from './Component/Banner2';
import Footer from './Component/Footer';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Single from './Pages/Single';
import Project from './Pages/Project';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Form_handeling from './Pages/Form_handeling.jsx';
import Form_main from './Pages/Form_main';
import Single_Product from './Pages/Single_Product';



//================ Admin =========================



function Main() {
  return (
        <div>
        <Header/>
            <Routes> 
                <Route index element={<><Banner1/> <Index/></>} />
                <Route path='/index' element={<><Banner1/><Index/></>} />
                <Route path='/about' element={<><Banner2 title={"About"}/><About/></>}/> 
                <Route path='/blog' element={<><Banner2 title={"Blog"}/><Blog/></>} />
                <Route path='/service' element={<><Banner2 title={"Service"}/><Service/></>}/> 
                <Route path='/project' element={<><Banner2 title={"Project"}/><Project/></>} />
                <Route path='/single' element={<><Banner2 title={"Single"}/><Single/></>} />
                <Route path='/contact' element={<><Banner2 title={"Contact"}/><Contact/></>}/>
                <Route path='/signup' element={<><Banner2 title={"Signup"}/><Signup/></>}/>
                <Route path='/login' element={<><Banner2 title={"Login"}/><Login/></>}/>
                <Route path='/form_handeling' element={<><Banner2 title={"Form_handeling"}/><Form_handeling/></>}/>
                <Route path='/form_main' element={<><Banner2 title={"form_main"}/><Form_main/></>}/>
                <Route path='/project/:id' element={<><Banner2 title={"View Product"}/><Single_Product/></>}/>   
                <Route path='*' element={<><Banner2 title={"Page Not Found"}/><PNF/></>}/> 
            </Routes>
        <Footer/>
        </div>
  )
}

export default Main