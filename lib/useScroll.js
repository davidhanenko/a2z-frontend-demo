import { useRef, useContext, createContext } from 'react';

const ScrollContext = createContext();
const ScrollContextProvider = ScrollContext.Provider;

function ScrollProvider({ children }) {
  const scrollRef = useRef({
    scrollPos: 0,
  });

  return (
    <ScrollContextProvider value={{ scrollRef }}>
      {children}
    </ScrollContextProvider>
  );
}

function useScroll() {
  const all = useContext(ScrollContext);
  return all;
}

export { ScrollProvider, useScroll };
