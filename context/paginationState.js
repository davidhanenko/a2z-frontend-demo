import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  PER_PAGE_DEFAULT,
  SORT_ITEMS_BY_DEFAULT,
} from '../config';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function PaginationStateProvider({ children }) {
  const [itemsPerPage, setItemsPerPage] = useState();
  const [sortItemsBy, setSortItemsBy] = useState(
    SORT_ITEMS_BY_DEFAULT
  );

  // get anount items showed per page from localStarage depend on selected option
  useEffect(() => {
    const value = parseInt(
      localStorage.getItem('showPerPage')
    );
    const itemsPerPage = !!value ? value : PER_PAGE_DEFAULT;
    setItemsPerPage(itemsPerPage);
  }, [itemsPerPage]);

  
  return (
    <LocalStateProvider
      value={{
        itemsPerPage,
        setItemsPerPage,
        sortItemsBy,
        setSortItemsBy,
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
