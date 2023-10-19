export interface ApiResponse <T> {
    sucscess:boolean;
    data?:T;
    error?:string;
    stackTrace?:string;
    version:string;
    service:string;
}