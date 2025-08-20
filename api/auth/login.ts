import axios from "axios";

type AuthResult = {
    type: "success",
} | {
    type: "error",
    data: { detail: string }
}

export const login = async (email: string, password: string): Promise<AuthResult> => {
    try {
        const res = await axios.post("api/auth/token", {email, password});
        const {access, refresh} = res.data;

        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);

        return {
            type: "success",
            data: res.data
        } as AuthResult
    } catch (e: any) {
        return {
            type: "error",
            data: e.response?.data
        } as AuthResult
    }
};