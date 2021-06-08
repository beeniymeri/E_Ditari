import { createContext, useContext } from "react";
import MesimdhenesiStore from "./mesimdhenesiStore";

interface Store {
    mesimdhenesiStore: MesimdhenesiStore
}

export const store: Store = {
    mesimdhenesiStore: new MesimdhenesiStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}