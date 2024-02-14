import { createContext, useContext, useMemo, useReducer } from "react";
import storeReducer, { initialState } from "./store-reducer";

const Context = createContext();

export const useStore = () => useContext(Context);

const StoreProvider = ({ children }) => {

  const [store, dispatch] = useReducer(storeReducer, initialState);

  const contextData = useMemo(() => ({ store, dispatch }), [store, dispatch]);

  return (
    <Context.Provider
      value={contextData}
    >
      {children}
    </Context.Provider>
  )
}

export default StoreProvider