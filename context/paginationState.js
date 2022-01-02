import { createContext, useContext, useState } from 'react';

import {PER_PAGE_DEFAULT} from '../config';


const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function PaginationStateProvider({ children }) {

  const [itemsPerPage, setItemsPerPage] = useState(PER_PAGE_DEFAULT);
  
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
