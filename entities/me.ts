import {useQueryClient, useSuspenseQuery} from "@tanstack/react-query";
import {UserApi} from "@/api/me";

export const useMe = () => useSuspenseQuery({
    queryKey: ["me"],
    queryFn: UserApi.fetchMe,
})

export const useRevalidateMe = () => {
    const client = useQueryClient()

    return () => client.refetchQueries({queryKey: ['me']})
}
