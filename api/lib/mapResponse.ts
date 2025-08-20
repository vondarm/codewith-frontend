import {AxiosResponse} from "axios";

export const mapApiResponse = <T>(response: Promise<AxiosResponse>): Promise<T> => response.then(({data}) => data)
