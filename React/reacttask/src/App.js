import Class_component from "./component/Class/Class_component";
import Func_component from "./component/Function/Func_component";


import Mycss from "./css/Mycss";
import Jsx from "./Jsx/Jsx";

import About from "./Layout_src/pages/About";
import Contact from "./Layout_src/pages/Contact";
import Home from "./Layout_src/pages/Home";
import Module_css from "./Module_css/Module_css";


function App() {
  return (
    <div >
      {
        // Component 
        //<Func_component/>
        //<Class_component/>

         //layout
         //<Home/> 
         //<About/>  
         //<Contact/>

         //jsx
         //<Jsx/>

         //<Mycss/>
         <Module_css/>

      }
      
    </div>
  );
}

export default App;
