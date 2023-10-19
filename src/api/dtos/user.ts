export interface RegisterRequest {
    username:string;
    email?:string;
    password:string;
}

export interface User {
    id:number;
    username: string;
    email:string;
    first_name:string;
    last_name:string;
    phone_number:string;
    thumbnail:string;
}