import {iUser} from "../IUser"

export interface AuthResponse {
    accsessToken: string;
    refreshToken: string;
    user: iUser;
};