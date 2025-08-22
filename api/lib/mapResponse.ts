import {AxiosResponse} from "axios";

export const mapApiResponse = <T>(response: Promise<AxiosResponse>): Promise<T> => response.then(({data}) => data)

type SuccessResponse<T> = {
    type: "success",
    data: T
}
type ErrorResponse<E> = {
    type: "error",
    data: E
}

export const mapApiResponseWithErrors = <T, E>(response: Promise<AxiosResponse>): Promise<SuccessResponse<T> | ErrorResponse<E>> => response
    .then(({data}) => ({type: "success", data}))
    .catch((error) => ({type: "error", data: error.response.data}))
