import axios from "axios";
import { AxiosResponse } from "axios";

interface RegisterParams {
    username: string;
    email: string ;
    password: string;
}

interface LoginParams {
    username: string;
    password:string;
}

const baseUrl = "https://quera.iran.liara.run/";

export const registerUser = async (data: RegisterParams) => {
    try {
        const response = await axios.post(baseUrl + "accounts/", data);
        console.log(response.data); 
    } catch (error) {
        console.error("Error:", error);
    }
};
export const loginUser = async (data: LoginParams): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(baseUrl + "accounts/login/", data);
        console.log(response.data); 
        return response; 
    } catch (error) {
        console.error("Error:", error);
        throw error; 
    }
};

