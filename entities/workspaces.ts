import {useSuspenseQuery} from '@tanstack/react-query'
import {WorkspaceApi} from "@/api/workspace";

export const useMyWorkspaces = () => useSuspenseQuery({
    queryKey: ["myWorkspaces"],
    queryFn: WorkspaceApi.fetchWorkspaces,
})
