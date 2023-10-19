export interface LoginRequest {
    username:string;
    password:string;
}

export interface TokenRequest {
    refreshToken:string;
}

export interface TokenRespone {
    token:string;
    refreshToken:string
}