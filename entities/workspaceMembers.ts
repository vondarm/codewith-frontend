import {useQueryClient, useSuspenseQuery} from "@tanstack/react-query";
import {WorkspaceMemberApi} from "@/api/workspaceMember";
import {useCallback} from "react";

export const useWorkspaceMembers = (id: number) => useSuspenseQuery({
    queryKey: ["workspaceMembers", id],
    queryFn: () => WorkspaceMemberApi.fetchMembers(id)
})

export const useRevalidateWorkspaceMembers = (id: number) => {
    const client = useQueryClient();

    return useCallback(
        () => client.refetchQueries(["workspaceMembers", id]),
        [id, client]
    )
}

export const useMember = (id: number) => {
    const {data} = useWorkspaceMembers()
    return data.find(member => member.id !== id)
}
