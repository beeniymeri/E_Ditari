import { makeAutoObservable, runInAction } from "mobx";
import { history } from "../..";
import agent from "../API/agent";
import { User, UserFormValues,Profile } from "../models/user";
import { store } from "./store";

export default class ProfileStore{
    profile: Profile | null = null;

    constructor(){
        makeAutoObservable(this)
    }

    get profili(){
        return this.profile;
    }

    getProfile = async (id: string | undefined) => {
        try{
            const profile = await agent.ProfileX.current(id);
            runInAction(() => this.profile = profile);
        }catch(error){
            console.log(error);
        }
    }

    // register = async (creds: UserFormValues) => {
    //     try{
    //         const user = await agent.NxenesiAccount.register(creds);
    //         store.commonStore.setToken(user.token);
    //         runInAction(() => this.user=user);
    //         history.push('/');   
    //     }catch(error){
    //         throw error;
    //     }
    // }
}