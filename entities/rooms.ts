import {useQueryClient, useSuspenseQuery} from '@tanstack/react-query'
import {RoomApi} from "@/api/room";

export const useRooms = (workspaceId: number) => useSuspenseQuery({
    queryKey: ["rooms", workspaceId],
    queryFn: () => RoomApi.fetchWorkspaceRooms(workspaceId),
})

export const useRoom = (workspaceId: number, id: number) => {
    const {data} = useRooms(workspaceId)

    return data.find(room => room.id === id)
}

export const useRevalidateRooms = (workspaceId: number) => {
    const client = useQueryClient()

    return () => client.refetchQueries({queryKey: ["rooms", workspaceId]})
}
