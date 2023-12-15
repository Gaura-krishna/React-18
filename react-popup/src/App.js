
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { PopupContext } from './context/PopupProvider';
import Home from './component/Home';
import Popup from './component/Popup';
import React from 'react';

function App() {

 
    const {
      openPopup,

      closePopup,
      isPopupOpen
    } = React.useContext(PopupContext);
    const navigate=useNavigate()
    const handlePopup=()=>{
      openPopup()

      setTimeout(() => {
        closePopup()

        navigate('/Home')

        
        
      },3000);
    }




  return (
  
    <div className="App">
      <button onClick={()=>handlePopup()}>Popup</button>
      { isPopupOpen?<Popup/>:null}
      
    </div>
  
  );
}

export default App;
