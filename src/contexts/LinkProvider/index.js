import React, {useState} from 'react';
import {LINK_STORAGE_KEY} from "./constants";

const storedLinks = localStorage.getItem(LINK_STORAGE_KEY) || [];
export const LinkContext = React.createContext();

const LinkProvider = ({children}) => {
  const [links, setLinks] = useState(storedLinks);

  return (
    <LinkContext.Provider value={{links, setLinks}}>
      {children}
    </LinkContext.Provider>
  );
};

export default LinkProvider;
