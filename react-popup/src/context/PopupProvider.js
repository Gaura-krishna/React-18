import React, { createContext, useContext, useState } from 'react';

const PopupContext = createContext();


const PopupProvider = ({children}) => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
  
        setPopupOpen(true);
      };
    
      const closePopup = () => {
    
        setPopupOpen(false);
      };

      const contextValue = {
        isPopupOpen,
        openPopup,
        closePopup
      }


  return (
    <PopupContext.Provider value={contextValue}>
    {children}
  </PopupContext.Provider>
  )
}

export { PopupProvider, PopupContext };