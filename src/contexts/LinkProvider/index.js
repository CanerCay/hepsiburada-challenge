import React, {useState} from 'react';
import {LINK_STORAGE_KEY} from "./constants";

const storedLinks = JSON.parse(localStorage.getItem(LINK_STORAGE_KEY)) || [];
export const LinkContext = React.createContext();

const LinkProvider = ({children}) => {
  const [links, setLinks] = useState(storedLinks);

  return (
    <LinkContext.Provider value={{links, setLinks: (links) => {
        setLinks(links);
        localStorage.setItem(LINK_STORAGE_KEY, JSON.stringify(links));
      }}}>
      {children}
    </LinkContext.Provider>
  );
};

export default LinkProvider;
