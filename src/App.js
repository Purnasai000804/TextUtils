import React, { useState } from "react";
import Alert from "./components/Alerts";
import Navbar from "./components/navbar";
import TextArea from "./components/TextArea";
import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

 function App() {
  const [mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
  let showAlert=(type,message)=>{
    setAlert({msg:message,
    type:type})
     setTimeout(() => {
       setAlert(null)
     }, 2000);
  }
  let themeSet=()=>{
     document.body.style.backgroundColor='blue';
    document.body.classList.toggle()
   }
  let toggleMode=()=>{  
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='gray';
      document.title='TextUtils-Darkmode'
      showAlert('success','Darkmode has been enabled')
    }
     else{
       setMode('light')
       document.body.style.backgroundColor='white';
       document.title='TextUtils-Lightmode'
       showAlert('success','lightmode has been enabled')
     }
  }
  
   return (
    <>
     <BrowserRouter> 
    <Navbar mode={mode} toggleMode={toggleMode} themeSet={themeSet}/>
    <Alert alert={alert}/>
    <TextArea showAlert={showAlert} heading='purna' mode={mode}/> 

     <Routes>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/TextUtils" element={<TextArea showAlert={showAlert} heading='purna' mode={mode}/>}/> 
    </Routes> 
     </BrowserRouter> 
    </>
   );

 }

 export default App;
