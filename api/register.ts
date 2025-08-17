import axios from "axios";
import {login} from "@/api/login";

type AuthResult = {
    type: "success",
} | {
    type: "error",
    data: { detail: string }
}

export const register = async (email: string, password: string, displayName?: string): Promise<AuthResult> => {
    try {
        await axios.post("api/auth/register/", {email, password, displayName});
        return await login(email, password);

    } catch (e: any) {
        return {
            type: "error",
            data: e.response?.data
        } as AuthResult
    }
};