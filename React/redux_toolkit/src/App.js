import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./website/pages/Index";
import Add_user from "./website/pages/Add_user";
import Manage_user from "./website/pages/Manage_user";
import Edit_user from "./website/pages/Edit_user";
import Pnf from "./website/pages/Pnf";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/> }></Route>
          <Route path="/add_user" element={<Add_user/> }></Route>
          <Route path="/manage_user" element={<Manage_user/> }></Route>
          <Route path="/edit_user" element={<Edit_user/> }></Route>
          <Route path="*" element={<Pnf/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
