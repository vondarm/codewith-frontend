import {axiosInstance} from "@/api/lib/apiClient";
import {mapApiResponse} from "@/api/lib/mapResponse";
import {User} from "@/domain/user";

export const fetchMe = () => mapApiResponse<User>(axiosInstance.get("/me"))

export const UserApi = {fetchMe}
