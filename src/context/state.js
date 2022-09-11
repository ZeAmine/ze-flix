import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [totalResults, setTotalResults] = useState('');

  const addFavorites = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        setFavorites,
        addFavorites,
        totalResults,
        setTotalResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
