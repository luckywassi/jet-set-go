import { createContext, useContext, useReducer } from "react";
import storeReducer, { initialState } from "./store-reducer";

const Context = createContext();

export const useStore = () => useContext(Context);

const StoreProvider = ({ children }) => {

  const [store, dispatch] = useReducer(storeReducer, initialState);

  return (
    <Context.Provider
      value={{
        store,
        dispatch
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default StoreProvider