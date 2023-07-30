import { iUser } from "../models/IUser";
import {makeAutoObservable} from "mobx"
import AuthService from "../service/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";

export default class Store {
    user = {} as iUser;
    isAuth = false;
    isLoading = false;

    constructor(){
        makeAutoObservable(this)
    };

    setAuth(bool:boolean){
        this.isAuth = bool;
    };

    setUser(user:iUser){
        this.user = user;
    };   

    setLoading(bool:boolean){
        this.isLoading = bool;
    }


    async login(email:string , password:string){
        try {
            const response = await AuthService.login(email,password);
            localStorage.setItem('token' , response.data.accsessToken );
            console.log(response.data.accsessToken);
            
            this.setAuth(true);
            this.setUser(response.data.user);
        }catch(e){    
        };
    };

    async registration(email:string , password:string){
        try {
            const response = await AuthService.registration(email,password);
            localStorage.setItem('token' , response.data.accsessToken);
            this.setUser(response.data.user);
        }catch(e){            
            
        };
    };

    async logout(){
        try {
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as iUser);
        }catch(e){
        };
    };

    async checkAuth(){
        this.setLoading(true);
        try{
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});
            localStorage.setItem('token' , response.data.accsessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        }catch(e){
            
        }finally{
            this.setLoading(false);
        }
    }

}