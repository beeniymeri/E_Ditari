import { makeAutoObservable, runInAction } from "mobx";
import { history } from "../..";
import agent from "../API/agent";
import { User, UserFormValues } from "../models/user";
import { store } from "./store";

export default class NxenesiUserStore{
    user: User | null = null;

    constructor(){
        makeAutoObservable(this)
    }

    get isLoggedIn(){
        return !!this.user;
    }

    get roli(){
        return this.user?.roli;
    }

    get id(){
        return this.user?.id;
    }

    login = async (creds: UserFormValues) => {
        try{
            const user = await agent.NxenesiAccount.login(creds);
            console.log(user.roli);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user=user);
            if(user.roli == 1){
            history.push('/mesimdhenesi/dashboard');
            }else if(user.roli == 0){
            history.push('/nxenesi/dashboard');
            }
        }catch(error){
            throw error;
        }
    }

    logout = () => {
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.user=null;
        history.push('/login');
    }

    getUser = async () => {
        try{
            const user = await agent.NxenesiAccount.current();
            runInAction(() => this.user = user);
        }catch(error){
            console.log(error);
        }
    }

    register = async (creds: UserFormValues) => {
        try{
            const user = await agent.NxenesiAccount.register(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user=user);
            history.push('/');   
        }catch(error){
            throw error;
        }
    }
}