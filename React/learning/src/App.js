import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./website/component/Header";
import Footer from "./website/component/Footer";
import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Contact from "./website/pages/Contact";
import Shop from "./website/pages/Shop";
import Shop_single from "./website/pages/Shop_single";
import Login from "./website/pages/Login";
import Signup from "./website/pages/Signup";
import Dashboard from "./website/pages/About";
import AHeader from "./admin/component/AHeader";
import AFooter from "./admin/component/AFooter";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<><Header /><Home /><Footer /></>}></Route>
          <Route path="/about" element={<><Header /><About /><Footer /></>}></Route>
          <Route path="/contact" element={<><Header /><Contact /><Footer /></>}></Route>
          <Route path="/shop" element={<><Header /><Shop /><Footer /></>}></Route>
          <Route path="/shop_single" element={<><Header /><Shop_single /><Footer /></>}></Route>
          <Route path="/login" element={<><Header /><Login /><Footer /></>}></Route>
          <Route path="/signup" element={<><Header /><Signup /><Footer /></>}></Route>
          
          <Route path="/dashboard" element={<><AHeader /><Dashboard /><AFooter /></>}></Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
