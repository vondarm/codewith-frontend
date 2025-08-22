import {useQueryClient, useSuspenseQuery} from '@tanstack/react-query'
import {WorkspaceApi} from "@/api/workspace";
import {useLastWorkspaceId} from "@/entities/lastWorkspace";
import {useEffect} from "react";
import {Workspace} from "@/domain/workspace";

export const useMyWorkspaces = () => useSuspenseQuery({
    queryKey: ["myWorkspaces"],
    queryFn: WorkspaceApi.fetchWorkspaces,
})

export const useWorkspace = (id: number) => {
    const {data} = useMyWorkspaces()

    return data.find(workspace => workspace.id === id)
}

export const useRevalidateWorkspaces = () => {
    const client = useQueryClient()

    return () => client.refetchQueries(["myWorkspaces"])
}

export const useCurrentWorkspace = (): Workspace | undefined => {
    const {data} = useMyWorkspaces()
    const {lastWorkspaceId, setLastWorkspaceId} = useLastWorkspaceId()
    const currentWorkspace = data.find(workspace => workspace.id === lastWorkspaceId)
    const firstId = data[0]?.id

    useEffect(() => {
        if (!currentWorkspace && firstId) {
            setLastWorkspaceId(firstId)
        }
    }, [lastWorkspaceId, setLastWorkspaceId, currentWorkspace, firstId]);

    return currentWorkspace || data[0]
}
