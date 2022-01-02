import { createContext, useContext, useState } from 'react';

import {perPageDefault} from '../config';


const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function PaginationStateProvider({ children }) {

  const [itemsPerPage, setItemsPerPage] = useState(perPageDefault);
  
  return (
    <LocalStateProvider
      value={{
        itemsPerPage,
        setItemsPerPage,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function usePagination() {
  const all = useContext(LocalStateContext);
  return all;
}

export { PaginationStateProvider, usePagination };
