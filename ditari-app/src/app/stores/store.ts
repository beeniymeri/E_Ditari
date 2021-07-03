import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import MesimdhenesiStore from "./mesimdhenesiStore";
import NxenesiUserStore from "./nxenesiUserStore";
import nxenesiUserStore from "./nxenesiUserStore";
import ProfileStore from "./profileStore";

interface Store {
    mesimdhenesiStore: MesimdhenesiStore
    commonStore: CommonStore;
    nxenesiUserStore: NxenesiUserStore;
    profileStore: ProfileStore;
}

export const store: Store = {
    mesimdhenesiStore: new MesimdhenesiStore(),
    commonStore: new CommonStore(),
    nxenesiUserStore: new NxenesiUserStore(),
    profileStore: new ProfileStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}