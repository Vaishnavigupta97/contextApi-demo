import React, { createContext, useState, useContext } from "react";

const ButtonContext = createContext();

export const useButtonContext = () => useContext(ButtonContext);

 const ContextProvider = ({ children }) => {
  const [urlss, setUrlss] = useState("");
  const [titless, setTitless] = useState("");
  const [blogss, setBlogss] = useState("");
//   const [formVisible, setFormVisible] = useState(false);
  const [modal, setModal] = useState(false);
  const [showItem, setShowItem] = useState(false);

 
  const value = {
    urlss,
    setUrlss,
    titless,
    setTitless,
    blogss,
    setBlogss,
    modal,
    setModal,
    showItem,
    setShowItem
  };
  console.log(urlss);
  return (
    <ButtonContext.Provider value={value}>
      {children}
    </ButtonContext.Provider>
  );
};

export default ContextProvider;
