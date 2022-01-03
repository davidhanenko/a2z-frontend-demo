import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function MenuStateProvider({ children }) {
  // state for side menu
  const [isMenuOpen, setMenuOpen] = useState(false);
  // state to track if side menu hamburger btn been clicked
  const [btnClicked, setBtnClicked] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <LocalStateProvider
      value={{
        isMenuOpen,
        setMenuOpen,
        btnClicked,
        setBtnClicked,
        closeMenu,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function useMenu() {
  const all = useContext(LocalStateContext);
  return all;
}

export { MenuStateProvider, useMenu };
