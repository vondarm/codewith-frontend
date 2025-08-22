import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {useCallback} from "react";

const LOCAL_STORAGE_KEY = 'lastWorkspace';
const QUERY_KEY = 'lastWorkspaceQuery';

const getLastWorkspace = (): number => {
    return Number(localStorage.getItem(LOCAL_STORAGE_KEY));
};
const setLastWorkspace = (value: number) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, value.toString());
};

export const useLastWorkspaceId = () => {
    const queryClient = useQueryClient();
    const {data: lastWorkspaceId} = useQuery({
        queryKey: [QUERY_KEY],
        staleTime: Infinity,
        cacheTime: Infinity,
        queryFn: getLastWorkspace,
        initialData: getLastWorkspace(),
    });

    const mutation = useMutation({
        mutationFn: (id: number) => (setLastWorkspace(id), id),
        onSuccess: (id: number) => queryClient.setQueryData([QUERY_KEY], id),
        mutationKey: [QUERY_KEY]
    })

    const setLastWorkspaceId = useCallback((value: number) => {
        if (value === lastWorkspaceId) return
        mutation.mutate(value)
    }, [mutation, lastWorkspaceId])

    return {
        lastWorkspaceId,
        setLastWorkspaceId,
    }
}
