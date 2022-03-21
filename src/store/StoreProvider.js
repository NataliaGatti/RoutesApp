import { createContext, useReducer } from "react";
import storeReducer, { initialStore } from "./storeReducer";

export const StoreContext = createContext();


const StoreProvider = ({ children }) => {
  const [ store, dispatch ] = useReducer(storeReducer, initialStore);
  // console.log("storeProvider", store)
  return (
      <StoreContext.Provider value={{ store, dispatch }}>
          {children}
      </StoreContext.Provider>
  )
}

export default StoreProvider;
