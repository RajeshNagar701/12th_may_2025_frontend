import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./feature/website/pages/Dashboard";
import Add_user from "./feature/website/pages/Add_user";
import Manage_user from "./feature/website/pages/Manage_user";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Add_contact from "./feature/website/pages/Add_contact";
import Manage_contact from "./feature/website/pages/Manage_contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/add_user" element={<Add_user />}></Route>
          <Route path="/manage_user" element={<Manage_user />}></Route>
          <Route path="/add_contact" element={<Add_contact />}></Route>
          <Route path="/manage_contact" element={<Manage_contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
