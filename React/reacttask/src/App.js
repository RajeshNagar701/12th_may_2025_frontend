import Life_class from "./Compo_Life_Cycle/Class/Life_class";
import Life_func from "./Compo_Life_Cycle/Func/Life_func";
import Class_component from "./component/Class/Class_component";
import Func_component from "./component/Function/Func_component";


import Mycss from "./css/Mycss";
import Jsx from "./Jsx/Jsx";

import About from "./Layout_src/pages/About";
import Contact from "./Layout_src/pages/Contact";
import Home from "./Layout_src/pages/Home";
import Main_lazy from "./Lazy_suspense/Main_lazy";
import Module_css from "./Module_css/Module_css";
import MUI from "./MUI/MUI";
import Main_props from "./Props/Main_props";
import Main_drilling from "./Props_drilling/Main_drilling";
import React_memo from "./React_Memo/React_memo";
import React_Tailwind from "./React_Tailwind/React_Tailwind";
import Tailwind_instalation from "./React_Tailwind/Tailwind_instalation";
import React_useCallback from "./React_useCallback/React_useCallback";
import MainReactBootstrap from "./ReactBootstrap/MainReactBootstrap";
import App_routing from "./Routing_src/App_routing";
import Sass from "./Sass/Sass";
import State_class from "./State/Class/State_class";
import Func_state from "./State/Func/Func_state";
import Styled_component from "./Styled_component/Styled_component";
import Use_context from "./UseContext/Use_context";
import UseReducer from "./UseReducer/UseReducer";
import UseRef from "./useRef/UseRef";
import UseRef1 from "./useRef/UseRef1";


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
         //<Module_css/>
         //<Sass/> 

         //props
         //<Main_props/>
         
         //<App_routing/>

         //<MainReactBootstrap/>
         // <MUI/>
         // <Styled_component/>   
         
         //state
         //<State_class/>
         //<Func_state/>
     
         //<Life_class/>
         //<Life_func/>
     

        //<Main_drilling/>
        //<Use_context/>

        //<Main_lazy/>
        
        //<React_Tailwind/>
        //<Tailwind_instalation/>

        //<UseRef/>
        //<UseRef1/>

        //<React_memo/>
        //<React_useCallback/>

        <UseReducer/>
     }
      
      
    </div>
  );
}

export default App;
