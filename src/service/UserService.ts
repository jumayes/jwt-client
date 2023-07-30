import $api from "../http";
import { iUser } from "../models/IUser";
import { AxiosResponse } from "axios";

export default class UserService {
    static fetchUsers(): Promise <AxiosResponse <iUser[]>>{
        return $api.get<iUser[]>('/users')
    }
}